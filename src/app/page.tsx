export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Placeholder */}
      <section className="flex items-center justify-center h-screen bg-primary-900 text-white">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">A.S Interiors</h1>
          <p className="text-xl md:text-2xl text-primary-200">Crafting Perfect Spaces</p>
        </div>
      </section>

      {/* About Section - Placeholder */}
      <section className="py-20 px-4 bg-background-light">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-800 mb-6">About Us</h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Premium mosquito doors, aluminium windows, and automated shutters for modern homes.
          </p>
        </div>
      </section>

      {/* Services Section - Placeholder */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-800 mb-12 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 border border-primary-100 rounded-lg">
                <div className="h-40 bg-primary-100 rounded mb-4" />
                <h3 className="text-xl font-semibold text-primary-800 mb-2">Service {i}</h3>
                <p className="text-primary-600">Service description placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Placeholder */}
      <section className="py-20 px-4 bg-accent-gold text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Get a Free Quote</h2>
          <button className="bg-white text-accent-gold px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer Placeholder */}
      <footer className="py-12 px-4 bg-primary-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-primary-300">&copy; 2024 A.S Interiors. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
