"use client";

import { useEffect } from "react";

import { AuthService } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

export const AuthInitializer = () => {
  const {
    setAccessToken,
    setUser,
    setAuthLoading,
  } = useAuthStore();

  useEffect(() => {
    const initialize = async () => {
      try {
        const refresh =
          await AuthService.refreshToken();

        setAccessToken(
          refresh.accessToken
        );

        const me =
          await AuthService.getMe();

        setUser(me.data);
      } catch {
        setAccessToken(null);
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    initialize();
  }, []);

  return null;
};