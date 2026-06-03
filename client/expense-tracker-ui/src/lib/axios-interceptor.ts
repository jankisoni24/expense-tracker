import { useAuthStore } from "@/store/auth.store";
import { api } from "./api";
import { AuthService } from "@/services/auth.service";

let isRefreshing = false;

let failedQueue: any[] = [];

const processQueue = (
  token: string | null
) => {
  failedQueue.forEach(
    (promise) => {
      if (token) {
        promise.resolve(token);
      } else {
        promise.reject();
      }
    }
  );

  failedQueue = [];
};

api.interceptors.request.use(
  (config) => {
    const token =
      useAuthStore
        .getState()
        .accessToken;

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest =
      error.config;

    if (
      error.response?.status ===
        401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise(
          (resolve, reject) => {
            failedQueue.push({
              resolve,
              reject,
            });
          }
        ).then((token) => {
          originalRequest.headers.Authorization =
            `Bearer ${token}`;

          return api(
            originalRequest
          );
        });
      }

      originalRequest._retry =
        true;

      isRefreshing = true;

      try {
        const data =
          await AuthService.refreshToken();

        const newToken =
          data.accessToken;

        useAuthStore
          .getState()
          .setAccessToken(
            newToken
          );

        processQueue(newToken);

        originalRequest.headers.Authorization =
          `Bearer ${newToken}`;

        return api(
          originalRequest
        );
      } catch (err) {
        processQueue(null);

        useAuthStore
          .getState()
          .logout();

        window.location.href =
          "/auth/login";

        return Promise.reject(
          err
        );
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(
      error
    );
  }
);