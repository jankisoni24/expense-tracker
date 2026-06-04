import { AuthInitializer } from "@/components/auth/AuthInitializer";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <AuthInitializer />
    <ProtectedRoute>
      <div className="min-h-screen bg-[#f4f4f2] p-4">
        <div
          className="
          flex
          gap-4
          h-[calc(100vh-32px)]
        "
        >
          <DashboardSidebar />

          <div
            className="
            flex-1
            bg-[#fafaf8]
            rounded-[28px]
            border
            border-[#ececec]
            overflow-auto
          "
          >
            <DashboardHeader />

            <div className="p-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
    </>
  );
}