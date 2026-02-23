export const QuoteSection = () => {
  return (
    <section className="relative z-10 py-24 bg-secondary text-primary">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <span className="material-symbols-rounded text-6xl opacity-50 mb-6">format_quote</span>
        <blockquote className="text-3xl md:text-5xl font-fancy italic leading-tight">
          "It's not just a scooter. It's a time machine to a simpler, happier afternoon."
        </blockquote>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="h-px w-12 bg-primary opacity-50"></div>
          <p className="text-lg font-display uppercase tracking-widest text-white">Martha S., Parent</p>
          <div className="h-px w-12 bg-primary opacity-50"></div>
        </div>
      </div>
    </section>
  )
}