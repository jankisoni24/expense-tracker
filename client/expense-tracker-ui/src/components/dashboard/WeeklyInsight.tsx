import { AppCard } from "@/components/common/AppCard";

import {
  Sparkles,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export const WeeklyInsight = () => {
  return (
    <AppCard className="p-5">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <div
            className="
            h-10
            w-10
            rounded-full
            bg-[#222]
            flex
            items-center
            justify-center
            shadow-md
            "
          >
            <Sparkles
              size={18}
              className="text-white"
            />
          </div>

          <div>
            <h3 className="text-[24px] font-medium leading-none">
              Weekly AI Insight
            </h3>

            <p className="text-sm text-[#8a8a8a] mt-1">
              Generated insights from your finance
            </p>
          </div>
        </div>

        <button
          className="
          h-10
          w-10
          rounded-xl
          border
          border-[#ececec]
          flex
          items-center
          justify-center
          "
        >
          <MessageCircle size={18} />
        </button>
      </div>

      {/* Insight Cards */}

      <div className="grid grid-cols-2 gap-3 mt-5">
        {/* Money Alert */}

        <div
          className="
          border
          border-[#ececec]
          rounded-2xl
          p-4
          min-h-[170px]
          "
        >
          <div className="flex justify-between items-start">
            <span className="text-sm text-[#8a8a8a]">
              Money alert
            </span>

            <ArrowUpRight
              size={16}
              className="text-[#555]"
            />
          </div>

          <div className="mt-10">
            <p className="text-[20px] leading-tight font-medium">
              Spending
            </p>

            <p className="text-[20px] leading-tight">
              increase by
              <span className="text-[#8a8a8a]">
                {" "}
                12%
              </span>
            </p>

            <p className="text-[20px] leading-tight text-[#8a8a8a]">
              last week
            </p>
          </div>
        </div>

        {/* Advice */}

        <div
          className="
          border
          border-[#ececec]
          rounded-2xl
          p-4
          min-h-[170px]
          "
        >
          <div className="flex justify-between items-start">
            <span className="text-sm text-[#8a8a8a]">
              Advice
            </span>

            <ArrowUpRight
              size={16}
              className="text-[#555]"
            />
          </div>

          <div className="mt-10">
            <p className="text-[20px] leading-tight font-medium">
              Cash allocation
            </p>

            <p className="text-[20px] leading-tight">
              reached
              <span className="text-[#8a8a8a]">
                {" "}
                ₹9M
              </span>
            </p>

            <p className="text-[20px] leading-tight text-[#8a8a8a]">
              this month
            </p>
          </div>
        </div>
      </div>
    </AppCard>
  );
};