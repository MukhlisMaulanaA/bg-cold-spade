export const ProductReviews = () => {
  return (
    <div className="bg-[#efe6d3] p-12 rounded-2xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-bold">Tales from the Park</h3>
          <p className="text-gray-600 italic">
            Real stories from parents and little explorers.
          </p>
        </div>
        <button className="text-yellow-600 font-semibold underline">
          READ ALL REVIEWS
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="font-semibold">Sarah Jenkins</p>
          <p className="text-yellow-400">★★★★★</p>
          <p className="text-sm text-gray-600 mt-2">
            “Finally, a toy that isn’t an eyesore! My son loves the smooth
            ride.”
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="font-semibold">Michael Ross</p>
          <p className="text-yellow-400">★★★★★</p>
          <p className="text-sm text-gray-600 mt-2">
            “Unbeatable value. Truly brings back that old-school sense of
            wonder.”
          </p>
        </div>
      </div>
    </div>
  );
};