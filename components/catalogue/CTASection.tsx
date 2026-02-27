export const CTASection = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="font-display text-3xl text-beige uppercase tracking-widest mb-4">
          Ready to Spark Wonder?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl text-center">
          Join thousands of parents who have chosen Cold Spade for quality, affordability, and timeless design. Give the gift of classic fun today.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-yellow-400 md:text-lg shadow-lg transform hover:-translate-y-1 transition-transform">Shop Now</a>
          <a href="#" className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-beige bg-secondary hover:bg-beige hover:text-secondary md:text-lg shadow-lg transform hover:-translate-y-1 transition-transform">Contact Us</a>
        </div>
      </div>
    </section>
  )
}