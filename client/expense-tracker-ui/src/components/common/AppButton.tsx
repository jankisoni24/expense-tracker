import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props
  extends React.ComponentProps<typeof Button> {}

export const AppButton = ({
  className,
  ...props
}: Props) => {
  return (
    <Button
      className={cn(
        `
        rounded-2xl
        h-12
        px-6
        font-medium
        `,
        className
      )}
      {...props}
    />
  );
};