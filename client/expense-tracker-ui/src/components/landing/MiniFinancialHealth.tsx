export default function MiniFinancialHealth() {
  return (
    <div className="bg-white border border-[#ececec] rounded-3xl p-4">
      <div className="flex justify-between">
        <div>
          <h4 className="text-sm font-semibold">
            Financial Health
          </h4>

          <span
            className="
            inline-block
            mt-2
            px-2
            py-1
            rounded-full
            bg-green-50
            text-green-700
            text-[10px]
            "
          >
            On Track
          </span>

          <p className="mt-3 text-xl font-bold">
            ₹24k
          </p>

          <p className="text-xs text-green-600">
            +64%
          </p>
        </div>

        <div className="flex items-center">
          <div
            className="
            w-16
            h-16
            rounded-full
            border-[6px]
            border-[#405a45]
            flex
            items-center
            justify-center
            "
          >
            <span className="text-sm font-bold text-[#405a45]">
              64
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}