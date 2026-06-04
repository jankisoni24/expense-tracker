import { RegisterForm } from "@/components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md">
      <h1 className="text-4xl font-bold">
        Create Account
      </h1>

      <p className="mt-3 text-gray-500">
        Start tracking your expenses today.
      </p>

      <div className="mt-8">
        <RegisterForm />
      </div>
    </div>
  );
}