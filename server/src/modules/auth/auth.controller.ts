import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { asyncHandler } from "../../utils/asyncHandler";

export const register = asyncHandler(async (req: Request, res: Response) => {
  const result = await AuthService.registerUser(req.body);

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const result = await AuthService.loginUser(req.body);

  res.cookie("refreshToken", result.refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    success: true,
    accessToken: result.accessToken,

    user: result.user,
  });
});

export const refreshToken = asyncHandler(
  async (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token missing",
      });
    }

    const result = await AuthService.refreshAccessToken(refreshToken);

    return res.status(200).json({
      success: true,
      accessToken: result.accessToken,
    });
  },
);

export const logout = asyncHandler(async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;

  if (refreshToken) {
    await AuthService.logout(refreshToken);
  }

  res.clearCookie("refreshToken");

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

export const getMe = asyncHandler(async (req: Request, res: Response) => {
  const userId = (req as any).user.userId;

  const user = await AuthService.getMe(userId);

  return res.status(200).json({
    success: true,
    data: user,
  });
});
