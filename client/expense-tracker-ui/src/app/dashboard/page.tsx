import { AssetDistribution } from "@/components/dashboard/AssetDistribution";
import { FinancialHealth } from "@/components/dashboard/FinancialHealth";
import { FavouriteTransactions } from "@/components/dashboard/FavouriteTransactions";
import { MonthlyOverview } from "@/components/dashboard/MonthlyOverview";
import { StatCard } from "@/components/dashboard/StatCard";
import { WeeklyInsight } from "@/components/dashboard/WeeklyInsight";

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-6">
      {/* LEFT COLUMN */}
      <div className="space-y-6">
        {/* Total Earnings */}
        <div>
          <p className="text-muted-foreground">Total Earnings</p>

          <h1 className="text-6xl font-bold mt-2">₹1,20,000</h1>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <StatCard title="Income" amount="₹53,000" color="#405a45" />

          <StatCard title="Expense" amount="₹12,400" color="#e5ddc3" />

          <StatCard title="Savings" amount="₹40,600" color="#d6c6dc" />
        </div>

        {/* Monthly Overview */}
        <MonthlyOverview />

        {/* Asset Distribution */}
        <AssetDistribution />
      </div>

      {/* RIGHT COLUMN */}
      <div
        className="
        flex
        flex-col
        gap-6
        h-full
        "
      >
        <WeeklyInsight />

        <FinancialHealth />

        <div className="flex-1">
          <FavouriteTransactions />
        </div>
      </div>
    </div>
  );
}
