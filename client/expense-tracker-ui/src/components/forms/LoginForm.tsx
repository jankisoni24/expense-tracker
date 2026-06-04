"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth.schema";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useLogin } from "@/hooks/useLogin";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import Link from "next/link";

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();

  const loginMutation = useLogin();

  const { setAccessToken, setUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await loginMutation.mutateAsync(data);

      setAccessToken(response.accessToken);

      setUser(response.user);

      router.push("/dashboard");
    } catch {
      toast.error("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          className="
            h-12
            rounded-xl
            border-[#e5e5e5]
            bg-[#fafafa]
        "
          placeholder="Email"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Input
          className="
            h-12
            rounded-xl
            border-[#e5e5e5]
            bg-[#fafafa]
        "
          type="password"
          placeholder="Password"
          {...register("password")}
        />

        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button
        className="
        w-full
        h-12
        rounded-xl
        bg-[#405a45]
        hover:bg-[#314638]
    "
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? "Logging in..." : "Login"}
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link
          href="/auth/register"
          className="font-medium text-primary hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
};
