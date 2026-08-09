import { NextResponse } from 'next/server'
import { sendContactEmail, type ContactFormData } from '@/lib/mail'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5

const submissions = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (submissions.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  if (timestamps.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, timestamps)
    return true
  }
  timestamps.push(now)
  submissions.set(ip, timestamps)
  return false
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again in a few minutes.' },
        { status: 429 }
      )
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }

    const payload = (body ?? {}) as Record<string, unknown>

    const data: ContactFormData = {
      name: typeof payload.name === 'string' ? payload.name : '',
      phone: typeof payload.phone === 'string' ? payload.phone : '',
      email: typeof payload.email === 'string' ? payload.email : '',
      service: typeof payload.service === 'string' ? payload.service : '',
      message: typeof payload.message === 'string' ? payload.message : '',
    }

    await sendContactEmail(data)

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error(`[api/contact] Failed to send enquiry: ${message}`)

    const isValidationError =
      typeof message === 'string' &&
      /name|phone|email|too long|valid/i.test(message)

    return NextResponse.json(
      { error: isValidationError ? message : 'Failed to send your message. Please try again or call us directly.' },
      { status: isValidationError ? 400 : 500 }
    )
  }
}