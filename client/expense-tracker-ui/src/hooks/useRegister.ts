"use client";

import { useMutation } from "@tanstack/react-query";
import { AuthService } from "@/services/auth.service";

export const useRegister = () => {
  return useMutation({
    mutationFn: AuthService.register,
  });
};