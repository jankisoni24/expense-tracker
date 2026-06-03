"use client";

import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/services/auth.service";

export const useLogout = () => {
  return useMutation({
    mutationFn: AuthService.logout,
  });
};