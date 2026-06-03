

import { api } from "@/lib/api";
import {
  LoginPayload,
  RegisterPayload,
} from "@/types/auth.types";

export const AuthService = {

  register: async (
    payload: RegisterPayload
  ) => {

    const response =
      await api.post(
        "/auth/register",
        payload
      );

    return response.data;
  },

  login: async (
    payload: LoginPayload
  ) => {

    const response =
      await api.post(
        "/auth/login",
        payload
      );

    return response.data;
  },

  logout: async () => {

    const response =
      await api.post(
        "/auth/logout"
      );

    return response.data;
  },

  getMe: async () => {

    const response =
      await api.get(
        "/auth/me"
      );

    return response.data;
  },

  refreshToken: async () => {

    const response =
      await api.post(
        "/auth/refresh-token"
      );

    return response.data;
  },
};