"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  Receipt,
  Tags,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { toast } from "sonner";

import { useLogout } from "@/hooks/useLogout";
import { useAuthStore } from "@/store/auth.store";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Expenses",
    href: "/dashboard/expenses",
    icon: Receipt,
  },
  {
    label: "Categories",
    href: "/dashboard/categories",
    icon: Tags,
  },
  {
    label: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const logoutMutation = useLogout();

  const logout =
    useAuthStore((state) => state.logout);

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
        w-72
        bg-white
        border-r
        min-h-screen
        flex
        flex-col
      "
    >
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold">
          Expense Tracker
        </h2>
      </div>

      <nav className="p-4 flex-1">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  transition
                  ${
                    active
                      ? "bg-black text-white"
                      : "hover:bg-slate-100"
                  }
                `}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="
            w-full
            flex
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-red-500
            hover:bg-red-50
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}