import { StatsCard } from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        <StatsCard title="Total Balance" value="₹0" />

        <StatsCard title="Income" value="₹0" />

        <StatsCard title="Expenses" value="₹0" />

        <StatsCard title="Savings" value="₹0" />
      </section>

      <section
        className="
          grid
          gap-6
          lg:grid-cols-3
        "
      >
        <div
          className="
            lg:col-span-2
            bg-white
            rounded-2xl
            border
            p-6
          "
        >
          <h2 className="font-semibold text-lg">Monthly Overview</h2>

          <div className="h-[300px] flex items-center justify-center text-slate-400">
            Chart Coming Soon
          </div>
        </div>

        <div
          className="
            bg-white
            rounded-2xl
            border
            p-6
          "
        >
          <h2 className="font-semibold text-lg">Financial Health</h2>

          <div className="mt-8">
            <div className="text-5xl font-bold">85%</div>

            <p className="text-slate-500 mt-2">Excellent</p>
          </div>
        </div>
      </section>

      <section
        className="
          bg-white
          rounded-2xl
          border
          p-6
        "
      >
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

        <p className="text-slate-500">No expenses added yet.</p>
      </section>
    </div>
  );
}
