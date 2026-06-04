"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuthStore } from "@/store/auth.store";

export const ProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const {
    accessToken,
    isAuthLoading,
  } = useAuthStore();

  useEffect(() => {
    if (
      !isAuthLoading &&
      !accessToken
    ) {
      router.replace(
        "/auth/login"
      );
    }
  }, [
    accessToken,
    isAuthLoading,
    router,
  ]);

  if (isAuthLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!accessToken) {
    return null;
  }

  return <>{children}</>;
};