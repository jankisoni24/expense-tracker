import React from "react";
import { formatCurrency } from "@/lib/utils";

type Props = {
  month: string;
  income: number;
  expense: number;
  active?: boolean;
};

export const MonthBar = ({ month, income, expense, active }: Props) => {
  const total = Math.max(1, income + expense);
  const incomePct = Math.round((income / total) * 100);
  const expensePct = 100 - incomePct;

  return (
    <div
      className={`flex items-center justify-between rounded-2xl p-3 transition-all ${
        active ? "bg-[#405a45] text-white" : "bg-[#f7f7f5]"
      }`}
      role="group"
      aria-label={`${month} overview`}
    >
      <div className="w-16 font-medium">{month}</div>

      <div className="flex-1 px-4">
        <div className="w-full h-6 rounded-full bg-[#e9e9e7] overflow-hidden">
          <div
            className="h-6 rounded-l-full"
            style={{
              width: `${incomePct}%`,
              backgroundColor: active ? "#9cc8a6" : "#405a45",
              float: "left",
            }}
          />

          <div
            className="h-6 rounded-r-full"
            style={{
              width: `${expensePct}%`,
              backgroundColor: active ? "#e8e0c7" : "#e5ddc3",
              float: "right",
            }}
          />
        </div>
      </div>

      <div className="w-40 text-right text-sm">
        <div className={`text-xs ${active ? "text-white/80" : "text-gray-500"}`}>
          {formatCurrency(income)}
        </div>

        <div className={`text-xs mt-1 ${active ? "text-white/80" : "text-gray-500"}`}>
          {formatCurrency(expense)}
        </div>
      </div>
    </div>
  );
};

export default MonthBar;
