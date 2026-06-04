import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function MiniAIInsight() {
  return (
    <div className="bg-white border border-[#ececec] rounded-3xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <div
          className="
          w-8
          h-8
          rounded-full
          bg-[#222]
          flex
          items-center
          justify-center
          "
        >
          <Sparkles
            size={12}
            className="text-white"
          />
        </div>

        <div>
          <h4 className="text-sm font-medium">
            Weekly AI Insight
          </h4>

          <p className="text-[10px] text-gray-500">
            Generated insights
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="border rounded-2xl p-2">
          <div className="flex justify-between">
            <span className="text-[10px] text-gray-400">
              Alert
            </span>

            <ArrowUpRight size={10} />
          </div>

          <p className="text-[11px] mt-4">
            Spending +12%
          </p>
        </div>

        <div className="border rounded-2xl p-2">
          <div className="flex justify-between">
            <span className="text-[10px] text-gray-400">
              Advice
            </span>

            <ArrowUpRight size={10} />
          </div>

          <p className="text-[11px] mt-4">
            Save ₹2k
          </p>
        </div>
      </div>
    </div>
  );
}