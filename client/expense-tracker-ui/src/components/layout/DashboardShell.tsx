interface Props {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export const DashboardShell = ({
  sidebar,
  children,
}: Props) => {
  return (
    <div className="min-h-screen bg-[#f5f5f2]">
      <div className="max-w-[1800px] mx-auto p-6">
        <div className="flex gap-6">
          {sidebar}

          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};