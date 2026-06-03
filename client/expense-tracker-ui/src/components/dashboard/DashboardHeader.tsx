"use client";

import { useAuthStore } from "@/store/auth.store";

export const DashboardHeader = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <header
      className="
        bg-white
        border-b
        px-8
        py-6
      "
    >
      <h1 className="text-3xl font-bold">Welcome Back, {user?.name}</h1>

      <p className="text-slate-500 mt-1">Track your expenses effectively.</p>
    </header>
  );
};
