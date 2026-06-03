import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">
            Expense Tracker
          </h1>

          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link href="/auth/login">
                Login
              </Link>
            </Button>

            <Button asChild>
              <Link href="/auth/register">
                Register
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-6xl font-bold">
            Track Every Rupee.
          </h1>

          <h2 className="mb-6 text-6xl font-bold text-primary">
            Understand Every Expense.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            Manage expenses, track budgets,
            analyze spending patterns and
            make smarter financial decisions.
          </p>

          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/auth/register">
                Get Started
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/auth/login">
                Login
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}