import { AppCard } from "@/components/common/AppCard";
import { Info } from "lucide-react";

export const MonthlyOverview = () => {
  return (
    <AppCard className="p-6 h-[380px]">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-[28px] font-medium">
            Monthly financial rhythm
          </h3>

          <Info
            size={16}
            className="text-gray-400"
          />
        </div>

        <div className="flex bg-[#f5f5f2] rounded-xl p-1">
          <button
            className="
            px-5
            py-2
            rounded-lg
            bg-white
            shadow-sm
            text-sm
            "
          >
            Income
          </button>

          <button
            className="
            px-5
            py-2
            text-sm
            text-gray-500
            "
          >
            Expense
          </button>

          <button
            className="
            px-5
            py-2
            text-sm
            text-gray-500
            "
          >
            Saving
          </button>
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-3 gap-8 mt-10">
        <div>
          <div
            className="
            w-3
            h-3
            rounded-full
            bg-[#405a45]
            mb-4
            "
          />

          <h4 className="text-4xl font-semibold">
            ₹40,129
          </h4>

          <p className="mt-2 text-gray-500">
            Settle job
          </p>
        </div>

        <div>
          <div
            className="
            w-3
            h-3
            rounded-full
            bg-[#e6dec1]
            mb-4
            "
          />

          <h4 className="text-4xl font-semibold">
            ₹20,891
          </h4>

          <p className="mt-2 text-gray-500">
            Freelance
          </p>
        </div>

        <div>
          <div
            className="
            w-3
            h-3
            rounded-full
            bg-[#cdbfd1]
            mb-4
            "
          />

          <h4 className="text-4xl font-semibold">
            ₹4,789
          </h4>

          <p className="mt-2 text-gray-500">
            Passive income
          </p>
        </div>
      </div>

      {/* Colored Blocks */}

      <div className="grid grid-cols-3 gap-4 mt-12">
        <div
          className="
          h-28
          rounded-[18px]
          bg-[#405a45]
          border
          border-[#4d6a52]
          shadow-inner
          "
        />

        <div
          className="
          h-28
          rounded-[18px]
          bg-[#e6dec1]
          border
          border-[#ddd4b2]
          "
        />

        <div
          className="
          h-28
          rounded-[18px]
          bg-[#cdbfd1]
          border
          border-[#c2b0c7]
          "
        />
      </div>
    </AppCard>
  );
};