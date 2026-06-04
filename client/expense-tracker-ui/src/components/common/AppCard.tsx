import { cn } from "@/lib/utils";

export const AppCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `
        bg-white
        rounded-[20px]
        border
        border-[#ececec]
        shadow-[0_1px_3px_rgba(0,0,0,0.03)]
        `,
        className
      )}
    >
      {children}
    </div>
  );
};