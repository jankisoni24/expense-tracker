"use client";

import { AppCard } from "@/components/common/AppCard";
import GaugeComponent from "react-gauge-component";
import { MoreHorizontal } from "lucide-react";

export const FinancialHealth = () => {
  const healthScore = 64;

  return (
    <AppCard className="p-6 h-full">
      <div className="flex justify-between items-start">
        <h3 className="text-[28px] font-medium">
          Financial health
        </h3>

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
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="mt-5">
        <span
          className="
          inline-flex
          items-center
          rounded-full
          bg-[#eef6f2]
          px-3
          py-1
          text-sm
          font-medium
          text-[#0f766e]
          "
        >
          On Track
        </span>
      </div>

      <div className="mt-5">
        <h2 className="text-5xl font-bold">
          ₹1,29,000
        </h2>

        <p className="text-[#0f766e] mt-2 font-medium">
          +20% from last month
        </p>
      </div>

      <div className="mt-8 h-[220px]">
        <GaugeComponent
          value={healthScore}
          type="radial"

          arc={{
            width: 0.18,

            colorArray: [
              "#0f766e",
              "#fbbf24",
              "#f97316",
            ],

            padding: 0.02,

            subArcs: [
              { limit: 50 },
              { limit: 80 },
              { limit: 100 },
            ],
          }}

          pointer={{
            elastic: true,

            color: "#0f766e",

            width: 14,

            length: 0.75,
          }}

          labels={{
            valueLabel: {
              style: {
                fill: "#1f2937", // <-- important
                color: "#1f2937",
                fontSize: "38px",
                fontWeight: "700",
              },

              formatTextValue: () =>
                `${healthScore}%`,
            },

            tickLabels: {
              hideMinMax: true,
            },
          }}
        />
      </div>

      <div className="text-center -mt-2">
        <p className="text-[#737373]">
          Of monthly income saved
        </p>
      </div>

      <p
        className="
        text-sm
        text-[#a3a3a3]
        mt-6
        leading-relaxed
        "
      >
        This condition is based on
        your last 30-day transaction data.
      </p>
    </AppCard>
  );
};