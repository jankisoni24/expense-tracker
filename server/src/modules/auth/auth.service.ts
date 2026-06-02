import { eq } from "drizzle-orm";

import { db } from "../../db";
import { users } from "../../db/schema/users";
import { refreshTokens } from "../../db/schema/refresh-token";

import { RegisterDto, LoginDto } from "./auth.types";

import { hashPassword, comparePassword } from "../../utils/password";

import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../../utils/jwt";

import { AppError } from "../../utils/AppError";

export class AuthService {
  /**
   * REGISTER USER
   */
  static async registerUser(payload: RegisterDto) {
    const { name, email, password } = payload;

    // Check existing user
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUser.length > 0) {
      throw new AppError(409, "User already exists with this email");
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const newUser = await db
      .insert(users)
      .values({
        name,
        email,
        password: hashedPassword,
      })
      .returning({
        id: users.id,
        name: users.name,
        email: users.email,
        createdAt: users.createdAt,
      });

    return newUser[0];
  }

  /**
   * LOGIN USER
   */
  static async loginUser(payload: LoginDto) {
    const { email, password } = payload;

    // Find user
    const user = await db.select().from(users).where(eq(users.email, email));

    if (user.length === 0) {
      throw new AppError(401, "Invalid email or password");
    }

    const foundUser = user[0];

    // Compare password
    const isPasswordValid = await comparePassword(password, foundUser.password);

    if (!isPasswordValid) {
      throw new AppError(401, "Invalid email or password");
    }

    // Generate JWT tokens
    const accessToken = generateAccessToken(foundUser.id);

    const refreshToken = generateRefreshToken(foundUser.id);

    //Remove previous refresh token if any
    await db
      .delete(refreshTokens)
      .where(eq(refreshTokens.userId, foundUser.id));

    // Save refresh token
    await db.insert(refreshTokens).values({
      userId: foundUser.id,
      token: refreshToken,

      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return {
      accessToken,
      refreshToken,

      user: {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
      },
    };
  }

  /**
   * REFRESH ACCESS TOKEN
   */
  static async refreshAccessToken(refreshToken: string) {
    const tokenRecord = await db
      .select()
      .from(refreshTokens)
      .where(eq(refreshTokens.token, refreshToken));

    if (tokenRecord.length === 0) {
      throw new AppError(401, "Invalid refresh token");
    }

    const decoded: any = verifyRefreshToken(refreshToken);

    const accessToken = generateAccessToken(decoded.userId);

    return {
      accessToken,
    };
  }

  /**
   *  LOGOUT USER
   */
  static async logout(refreshToken: string) {
    await db.delete(refreshTokens).where(eq(refreshTokens.token, refreshToken));

    return true;
  }

  /**
   *  GET LOGGED IN USER
   */
  static async getMe(userId: string) {
    const user = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
      })
      .from(users)
      .where(eq(users.id, userId));

    return user[0];
  }
}
