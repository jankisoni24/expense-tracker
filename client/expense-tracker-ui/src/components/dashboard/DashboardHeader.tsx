"use client";

import { useAuthStore } from "@/store/auth.store";

export const DashboardHeader = () => {
  const user = useAuthStore((s) => s.user);

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const name = user?.name?.split(" ")[0] ?? "there";

  return (
    <div
      className="
      bg-white
      rounded-[20px]
      border
      border-[#ececec]
      px-8
      py-6
      "
    >
      <h1 className="text-3xl font-semibold">
        {getGreeting()}, {name} 👋🏻
      </h1>

      <p className="text-gray-500 mt-2">Here's your financial overview.</p>
    </div>
  );
};