import { LoginForm } from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-bold">
        Welcome Back
      </h1>

      <p className="mt-3 text-gray-500">
        Login to continue managing your finances.
      </p>

      <div className="mt-8">
        <LoginForm />
      </div>
    </div>
  );
}