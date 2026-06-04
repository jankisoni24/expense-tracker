export default function MiniFavouriteTransactions() {
  return (
    <div className="bg-white border border-[#ececec] rounded-3xl p-4">
      <div className="flex justify-between mb-4">
        <h4 className="font-semibold text-sm">
          Favourite
        </h4>

        <span>⋯</span>
      </div>

      <div className="space-y-2">
        <div
          className="
          flex
          justify-between
          items-center
          bg-[#f7f7f5]
          rounded-2xl
          p-3
          "
        >
          <div>
            <p className="text-sm font-medium">
              Swiggy
            </p>

            <p className="text-[10px] text-gray-500">
              Food Delivery
            </p>
          </div>

          <span className="font-semibold">
            ₹9k
          </span>
        </div>

        <div
          className="
          flex
          justify-between
          items-center
          bg-[#f7f7f5]
          rounded-2xl
          p-3
          "
        >
          <div>
            <p className="text-sm font-medium">
              Netflix
            </p>

            <p className="text-[10px] text-gray-500">
              Entertainment
            </p>
          </div>

          <span className="font-semibold">
            ₹1.5k
          </span>
        </div>
      </div>
    </div>
  );
}