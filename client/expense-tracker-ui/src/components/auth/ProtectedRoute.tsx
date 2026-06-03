"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth.store";

import { useHydrated } from "@/hooks/useHydrated";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const router = useRouter();

  const hydrated = useHydrated();

  const accessToken = useAuthStore((state) => state.accessToken);

  useEffect(() => {
    if (hydrated && !accessToken) {
      router.replace("/auth/login");
    }
  }, [hydrated, accessToken, router]);

  if (!hydrated) {
    return (
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        Loading...
      </div>
    );
  }

  if (!accessToken) {
    return null;
  }

  return <>{children}</>;
};
