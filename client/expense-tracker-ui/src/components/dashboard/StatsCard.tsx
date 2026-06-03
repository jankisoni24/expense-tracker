import { Card } from "@/components/ui/card";

interface Props {
  title: string;
  value: string;
}

export const StatsCard = ({ title, value }: Props) => {
  return (
    <Card className="p-6 shadow-sm">
      <p className="text-slate-500">{title}</p>

      <h2 className="text-4xl font-bold mt-3">{value}</h2>
    </Card>
  );
};
