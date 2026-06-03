import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { RegisterForm } from "@/components/forms/RegisterForm";

export default function RegisterPage() {
  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardContent className="p-8">
        <h1 className="mb-2 text-3xl font-bold">
          Create Account
        </h1>

        <p className="mb-8 text-muted-foreground">
          Start tracking your expenses
        </p>

        <RegisterForm />
      </CardContent>
    </Card>
  );
}