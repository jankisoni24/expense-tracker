"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  registerSchema,
} from "@/schemas/auth.schema";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useRegister } from "@/hooks/useRegister";

import { toast } from "sonner";

import Link from "next/link";
import { useRouter } from "next/navigation";

type RegisterFormValues =
  z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const router = useRouter();

  const registerMutation =
    useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(
      registerSchema
    ),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (
    data: RegisterFormValues
  ) => {
    try {
      await registerMutation.mutateAsync(
        data
      );

      toast.success(
        "Account created successfully"
      );

      router.push("/auth/login");
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-5"
    >
      {/* Name */}
      <div>
        <Input
          placeholder="Full Name"
          {...register("name")}
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <Input
          placeholder="Email Address"
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Password */}
      <div>
        <Input
          type="password"
          placeholder="Password"
          {...register(
            "password"
          )}
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">
            {
              errors.password
                .message
            }
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={
          registerMutation.isPending
        }
      >
        {registerMutation.isPending
          ? "Creating Account..."
          : "Create Account"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-primary hover:underline"
        >
          Login
        </Link>
      </p>
    </form>
  );
}