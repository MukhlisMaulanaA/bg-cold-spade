import { Brush } from 'lucide-react';
import { BanknoteArrowDown } from 'lucide-react';
import { CheckCheck } from 'lucide-react';

export const PromiseSection = () => {
  return (
    <section className="bg-beige py-20 text-center">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="font-display text-3xl text-secondary uppercase tracking-widest">
          Our Promise
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-12">
          <div className="p-6 border-2 border-transparent hover:border-primary transition duration-300 rounded-lg">
            <div className="w-14 h-14 mx-auto bg-primary rounded-full flex items-center justify-center">
              <Brush />
            </div>
            <h3 className="mt-6 font-display text-xl text-secondary">
              Artistic Form
            </h3>
            <p className="mt-4 text-gray-600 italic">
              We believe a scooter should be as beautiful as it is fun. Every curve is designed with wonder in mind.
            </p>
          </div>

          <div className="p-6 border-2 border-transparent hover:border-primary transition duration-300 rounded-lg">
            <div className="w-14 h-14 mx-auto bg-primary rounded-full flex items-center justify-center">
              <BanknoteArrowDown />
            </div>
            <h3 className="mt-6 font-display text-xl text-secondary">
              Affordable Wonder
            </h3>
            <p className="mt-4 text-gray-600 italic">
              Magic shouldn't cost a fortune. We keep our scooters inexpensive without sacrificing the soul of the design.
            </p>
          </div>

          <div className="p-6 border-2 border-transparent hover:border-primary transition duration-300 rounded-lg">
            <div className="w-14 h-14 mx-auto bg-primary rounded-full flex items-center justify-center">
              <CheckCheck />
            </div>
            <h3 className="mt-6 font-display text-xl text-secondary">
              Heirloom Quality
            </h3>
            <p className="mt-4 text-gray-600 italic">
              Built to last, built to be loved, and built to be passed down from one adventurer to the next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};