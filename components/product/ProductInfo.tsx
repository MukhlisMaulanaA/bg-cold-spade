import { ProductDetail } from "@/types/ProductDetail";

interface Props {
  product: ProductDetail;
}

export const ProductInfo = ({ product }: Props) => {
  return (
    <div>
      <h1 className="text-4xl lg:text-5xl font-bold font-display text-[#1f2937]">
        {product.name}
      </h1>

      <p className="italic text-gray-600 mt-2">{product.tagline}</p>

      {/* Rating */}
      <div className="flex items-center mt-4 gap-3">
        <div className="text-yellow-400 text-lg">
          {"★".repeat(Math.round(product.rating))}
        </div>
        <span className="text-sm text-gray-500 underline cursor-pointer">
          {product.reviewCount} Reviews from Happy Parents
        </span>
      </div>

      <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
        {product.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Price */}
      <div className="mt-8 flex items-center gap-4">
        <span className="text-3xl font-bold text-yellow-500">
          ${product.price.toFixed(2)}
        </span>

        {product.originalPrice && (
          <span className="line-through text-gray-400">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}

        <span className="bg-green-100 text-green-700 px-3 py-1 text-xs rounded-full">
          {product.stock}
        </span>
      </div>

      {/* Specs */}
      <div className="mt-8 bg-[#f7f1e4] p-6 rounded-xl grid grid-cols-2 gap-6 text-sm">
        <div>
          <p className="font-semibold">AGE RANGE</p>
          <p>{product.specs.ageRange}</p>
        </div>
        <div>
          <p className="font-semibold">WEIGHT</p>
          <p>{product.specs.weight}</p>
        </div>
        <div>
          <p className="font-semibold">MATERIALS</p>
          <p>{product.specs.materials}</p>
        </div>
        <div>
          <p className="font-semibold">WARRANTY</p>
          <p>{product.specs.warranty}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-lg shadow-md transition">
          PURCHASE NOW
        </button>

        <button className="border rounded-lg px-4 py-4 hover:bg-gray-100 transition">
          ♡
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 italic">
        Free shipping on orders over $50. Bring smiles guaranteed.
      </p>
    </div>
  );
};