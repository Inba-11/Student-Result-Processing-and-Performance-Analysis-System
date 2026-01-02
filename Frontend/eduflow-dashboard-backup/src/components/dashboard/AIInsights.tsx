import { Lightbulb, TrendingUp, AlertCircle } from "lucide-react";
import { aiInsights } from "@/data/mockData";
import { cn } from "@/lib/utils";

const iconMap = {
  strength: TrendingUp,
  improvement: AlertCircle,
  recommendation: Lightbulb,
};

const colorMap = {
  strength: "text-success bg-success/10 border-success/20",
  improvement: "text-warning bg-warning/10 border-warning/20",
  recommendation: "text-secondary bg-secondary/10 border-secondary/20",
};

export function AIInsights() {
  return (
    <div className="bg-card rounded-lg p-5 shadow-card border border-border/50">
      <div className="mb-4 flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-secondary/10">
          <Lightbulb className="h-4 w-4 text-secondary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">AI Insights</h3>
          <p className="text-sm text-muted-foreground">
            Personalized recommendations based on your performance
          </p>
        </div>
      </div>
      <div className="space-y-3">
        {aiInsights.map((insight, index) => {
          const Icon = iconMap[insight.type as keyof typeof iconMap];
          const colors = colorMap[insight.type as keyof typeof colorMap];
          
          return (
            <div
              key={index}
              className={cn(
                "flex items-start gap-3 p-3 rounded-lg border",
                colors
              )}
            >
              <Icon className="h-5 w-5 mt-0.5 shrink-0" />
              <p className="text-sm">{insight.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
