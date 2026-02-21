import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-cream to-[#EDE5D3] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <span className="bg-secondary text-primary text-xs px-3 py-1 rounded-full uppercase tracking-widest">
            Est. 2024
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-display text-secondary leading-tight">
            A Sense of{" "}
            <span id="wonder" className="text-primary font-body italic">Wonder</span>
            <br />
            on Every Ride
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-lg">
            Rediscover the joy of childhood exploration. High-quality craftsmanship meets timeless design, creating an inexpensive yet beautiful journey.
          </p>

          <div className="mt-8">
            <Link
              href="#collection"
              className="bg-accent text-white px-8 py-4 uppercase tracking-widest text-sm border-2 border-secondary font-display hover:bg-red-700 shadow-[6px_4px_0px_0px_rgba(0,_0,_0,_0.8)] duration-300"
              
            >
              Shop The Collection ▶
            </Link>

            <p className="mt-6 text-xs uppercase tracking-widest text-secondary">
              ★ Form Over Function
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="rotate-[-3deg] hover:rotate-0 transition duration-500 shadow-2xl border-8 border-white">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUJODrpVG7tQjA5huzQnXbGaHE4BPw83h4ObidAOaqtur1CHCVhaGpK2Gxpis11U5JmiChiTv48Auplnpbq90ow_wYXt8rj7R-cQl7_1JD9_5A-4MCt0sg8Uu8tLM2Di0-sv-Gl0jx7U5aAo1aKC5SEewVaytZDr7ERiBQwWRbr-ap86jH5aboVXAo2SnHcV8ukMLP_bcfUZ7HH6x0m2gKex-mL4ggnsNkxyIE59boMAX6hgAVqXrTDmMJDSSbWQcSkBpUl8QO2tw"
              alt="Child riding scooter"
              width={450}
              height={450}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};