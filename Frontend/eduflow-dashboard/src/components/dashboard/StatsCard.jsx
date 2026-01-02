import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export function StatsCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  variant = "default",
}: StatsCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  const iconColors = {
    default: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    primary: "bg-secondary/10 text-secondary",
  };

  return (
    <div className="bg-card rounded-lg p-5 shadow-card border border-border/50 hover:shadow-soft transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold tracking-tight">{value}</p>
          {change !== undefined && (
            <div className="flex items-center gap-1.5">
              <span
                className={cn(
                  "text-xs font-medium px-1.5 py-0.5 rounded",
                  isPositive && "bg-success/10 text-success",
                  isNegative && "bg-destructive/10 text-destructive",
                  !isPositive && !isNegative && "bg-muted text-muted-foreground"
                )}
              >
                {isPositive && "+"}
                {change}
                {typeof change === "number" && changeLabel ? changeLabel : "%"}
              </span>
              <span className="text-xs text-muted-foreground">vs last month</span>
            </div>
          )}
        </div>
        <div className={cn("p-2.5 rounded-lg", iconColors[variant])}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
