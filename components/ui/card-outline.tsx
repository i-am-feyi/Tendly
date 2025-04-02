import { cn } from "@/lib/utils";
import { Card, CardContent } from "./card";

const CardOutline = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("bg-card text-card-foreground rounded-xl border w-full", className)}
    >
      {children}
    </div>
  );
};

export default CardOutline;
