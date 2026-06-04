"use client";

import Link from "next/link";
import { Home, Wallet, Tags, BarChart3, Settings, Search } from "lucide-react";
import { LogOut } from "lucide-react";
import { useLogout } from "@/hooks/useLogout";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuthStore } from "@/store/auth.store";

export const DashboardSidebar = () => {
  const router = useRouter();
  const logoutMutation = useLogout();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();

      logout();

      router.replace("/auth/login");
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <aside
      className="
      w-[250px]
      bg-white
      rounded-[20px]
      border
      border-[#ececec]
      p-5
      flex
      flex-col
      "
    >
      <h2 className="text-xl font-semibold mb-6">Expense Tracker</h2>

      <div className="relative mb-8">
        <Search size={16} className="absolute left-3 top-3 text-gray-400" />

        <input
          placeholder="Search"
          className="
            w-full
            pl-10
            h-10
            rounded-[20px]
            bg-[#f6f6f4]
            border
            border-[#ececec]
            outline-none
          "
        />
      </div>

      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="
          flex items-center gap-3
          px-4 py-3
          rounded-[20px]
          bg-[#405a45]
          text-white
          "
        >
          <Home size={18} />
          Dashboard
        </Link>

        <Link
          href="/expenses"
          className="flex items-center gap-3 px-4 py-3 rounded-[20px] hover:bg-[#f6f6f4]"
        >
          <Wallet size={18} />
          Expenses
        </Link>

        <Link
          href="/categories"
          className="flex items-center gap-3 px-4 py-3 rounded-[20px] hover:bg-[#f6f6f4]"
        >
          <Tags size={18} />
          Categories
        </Link>

        <Link
          href="/reports"
          className="flex items-center gap-3 px-4 py-3 rounded-[20px] hover:bg-[#f6f6f4]"
        >
          <BarChart3 size={18} />
          Reports
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-3 rounded-[20px] hover:bg-[#f6f6f4]"
        >
          <Settings size={18} />
          Settings
        </Link>
      </nav>

      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="
            mt-auto
            w-full
            bg-[#405a45]
            text-white
            rounded-[20px]
            p-4
            flex
            items-center
            justify-center
            gap-2
            "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};
