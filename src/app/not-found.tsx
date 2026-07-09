import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl sm:text-7xl font-serif font-bold text-accent-gold mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4">Page Not Found</h2>
        <p className="text-primary-300 text-sm sm:text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-accent-gold text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-accent-darkGold hover:shadow-lg hover:shadow-accent-gold/20 active:scale-95 min-h-[44px]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
