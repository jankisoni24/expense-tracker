export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f2] p-6">
      <div
        className="
        max-w-7xl
        mx-auto
        min-h-[calc(100vh-48px)]
        bg-white
        rounded-[28px]
        border
        border-[#ececec]
        overflow-hidden
        grid
        lg:grid-cols-2
        "
      >
        {/* Left Section */}

        <div
          className="
          bg-[#405a45]
          text-white
          p-12
          flex
          flex-col
          justify-between
          "
        >
          <div>
            <h1 className="text-4xl font-bold">
              Expense Tracker
            </h1>

            <p className="mt-4 text-white/80">
              Track expenses, monitor budgets
              and build healthy financial habits.
            </p>
          </div>

          <div className="space-y-6">
            <FeatureCard
              title="Track Spending"
              description="Monitor every expense category."
            />

            <FeatureCard
              title="Budget Planning"
              description="Set monthly budgets and goals."
            />

            <FeatureCard
              title="Financial Insights"
              description="Visualize trends and savings."
            />
          </div>
        </div>

        {/* Right Section */}

        <div
          className="
          flex
          items-center
          justify-center
          p-8
          lg:p-16
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/10 rounded-[28px] p-5">
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="text-sm text-white/70 mt-2">
        {description}
      </p>
    </div>
  );
}