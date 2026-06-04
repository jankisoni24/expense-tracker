import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "@/components/landing/DashboardPreview";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">Expense Tracker</h1>

          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link href="/auth/login">Login</Link>
            </Button>

            <Button asChild>
              <Link href="/auth/register">Register</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[500px_1fr] gap-16 items-center">
            <div>
              <p className="text-[#405a45] font-medium">
                Personal Finance Made Simple
              </p>

              <h1 className="text-7xl font-bold mt-4 leading-tight">
                Understand Your Money.
              </h1>

              <p className="mt-6 text-lg text-gray-500">
                Track spending, budgets and savings from a beautiful dashboard.
              </p>
            </div>

            <DashboardPreview />
          </div>
        </div>
      </section>
    </main>
  );
}
