import { create } from "zustand";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  accessToken: string | null;
  user: User | null;

  isAuthLoading: boolean;

  setAuthLoading: (value: boolean) => void;

  setAccessToken: (token: string | null) => void;

  setUser: (user: User | null) => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({
    accessToken: null,

    user: null,

    isAuthLoading: true,

    setAuthLoading: (value) =>
      set({
        isAuthLoading: value,
      }),

    setAccessToken: (token) =>
      set({
        accessToken: token,
      }),

    setUser: (user) =>
      set({
        user,
      }),

    logout: () =>
      set({
        accessToken: null,
        user: null,
      }),
  }));
