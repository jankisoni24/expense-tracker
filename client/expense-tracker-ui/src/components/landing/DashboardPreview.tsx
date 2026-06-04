import MiniAIInsight from "./MiniAIInsight";
import MiniAssetDistribution from "./MiniAssetDistribution";
import MiniFavouriteTransactions from "./MiniFavouriteTransactions";
import MiniFinancialHealth from "./MiniFinancialHealth";
import MiniMonthlyOverview from "./MiniMonthlyOverview";

export const DashboardPreview = () => {
  return (
    <div
      className="
        bg-white
        rounded-[36px]
        border
        border-[#ececec]
        p-5
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        scale-[0.92]
        origin-top-right
        "
    >
      {/* Browser dots */}

      <div className="flex gap-2 mb-5">
        <div className="w-3 h-3 rounded-full bg-red-300" />

        <div className="w-3 h-3 rounded-full bg-yellow-300" />

        <div className="w-3 h-3 rounded-full bg-green-300" />
      </div>

      {/* Header */}

      <div className="flex justify-between items-start mb-5">
        <div>
          <p className="text-sm text-gray-500">Good Morning 👋</p>

          <h2 className="text-2xl font-semibold mt-1">Janki</h2>
        </div>

        <div className="flex gap-2">
          <div
            className="
            w-9
            h-9
            rounded-xl
            bg-[#f7f7f5]
            "
          />

          <div
            className="
            w-9
            h-9
            rounded-xl
            bg-[#f7f7f5]
            "
          />

          <div
            className="
            w-9
            h-9
            rounded-xl
            bg-[#f7f7f5]
            "
          />
        </div>
      </div>

      {/* Total Balance */}

      <div className="mb-5">
        <p className="text-sm text-gray-500">Total Balance</p>

        <h1 className="text-5xl font-bold mt-1">₹1.2L</h1>
      </div>

      {/* Summary cards */}

      <div className="grid grid-cols-3 gap-3 mb-5">
        <div
          className="
          rounded-3xl
          p-4
          bg-[#3f5c42]
          text-white
          "
        >
          <p className="text-xs opacity-70">Income</p>

          <p className="text-xl font-semibold mt-2">₹53k</p>
        </div>

        <div
          className="
          rounded-3xl
          p-4
          bg-[#e5ddc3]
          "
        >
          <p className="text-xs text-gray-600">Expense</p>

          <p className="text-xl font-semibold mt-2">₹12k</p>
        </div>

        <div
          className="
          rounded-3xl
          p-4
          bg-[#d6c6dc]
          "
        >
          <p className="text-xs text-gray-600">Saving</p>

          <p className="text-xl font-semibold mt-2">₹40k</p>
        </div>
      </div>

      {/* Dashboard Layout */}

      <div className="grid grid-cols-[1.7fr_1fr] gap-3 items-stretch">
        <div className="flex flex-col gap-3">
          <MiniMonthlyOverview />

          <div className="flex-1">
            <MiniAssetDistribution />
          </div>
        </div>

        <div className="space-y-3">
          <MiniAIInsight />

          <MiniFinancialHealth />

          <MiniFavouriteTransactions />
        </div>
      </div>
    </div>
  );
};
