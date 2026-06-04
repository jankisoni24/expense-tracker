import { Info } from "lucide-react";

export default function MiniMonthlyOverview() {
  return (
    <div className="bg-white border border-[#ececec] rounded-3xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h4 className="text-sm font-medium">
            Monthly rhythm
          </h4>

          <Info
            size={12}
            className="text-gray-400"
          />
        </div>

        <div className="flex bg-[#f5f5f2] rounded-lg p-1 text-[9px]">
          <span className="bg-white px-2 py-1 rounded-md">
            Income
          </span>

          <span className="px-2 py-1 text-gray-500">
            Expense
          </span>

          <span className="px-2 py-1 text-gray-500">
            Saving
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        <div>
          <div className="w-2 h-2 rounded-full bg-[#405a45]" />

          <p className="text-sm font-semibold mt-2">
            ₹40k
          </p>

          <p className="text-[10px] text-gray-500">
            Salary
          </p>
        </div>

        <div>
          <div className="w-2 h-2 rounded-full bg-[#e6dec1]" />

          <p className="text-sm font-semibold mt-2">
            ₹20k
          </p>

          <p className="text-[10px] text-gray-500">
            Freelance
          </p>
        </div>

        <div>
          <div className="w-2 h-2 rounded-full bg-[#cdbfd1]" />

          <p className="text-sm font-semibold mt-2">
            ₹5k
          </p>

          <p className="text-[10px] text-gray-500">
            Passive
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="h-14 rounded-2xl bg-[#405a45]" />

        <div className="h-14 rounded-2xl bg-[#e6dec1]" />

        <div className="h-14 rounded-2xl bg-[#cdbfd1]" />
      </div>
    </div>
  );
}