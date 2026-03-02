export const WhyChoose = () => {
  const items = [
    {
      title: "Artistic Form",
      desc: "We believe toys should be beautiful and inspiring.",
    },
    {
      title: "Surprisingly Affordable",
      desc: "High design doesn’t mean high cost.",
    },
    {
      title: "Quality Assured",
      desc: "Built to last through childhood and beyond.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Parents Choose Cold Spade
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#f7f1e4] p-8 rounded-xl text-center shadow-sm"
          >
            <div className="text-yellow-400 text-3xl mb-4">✦</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};