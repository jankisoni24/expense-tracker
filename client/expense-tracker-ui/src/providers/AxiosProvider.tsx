"use client";

import "@/lib/axios-interceptor";

export function AxiosProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}