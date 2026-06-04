import { AppCard } from "@/components/common/AppCard";

interface Props {
  children: React.ReactNode;
}

export const SidebarWrapper = ({
  children,
}: Props) => {
  return (
    <AppCard
      className="
      w-[280px]
      h-[calc(100vh-48px)]
      sticky
      top-6
      "
    >
      {children}
    </AppCard>
  );
};