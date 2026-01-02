import { recentAssignments } from "@/data/mockData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function RecentAssignments() {
  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 90) return "text-success";
    if (percentage >= 75) return "text-secondary";
    if (percentage >= 60) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="bg-card rounded-lg shadow-card border border-border/50">
      <div className="p-5 border-b border-border">
        <h3 className="text-lg font-semibold">Recent Assignments</h3>
        <p className="text-sm text-muted-foreground">
          Your latest graded assignments and quizzes
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Assignment</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead className="text-right">Score</TableHead>
            <TableHead className="text-right hidden sm:table-cell">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentAssignments.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell className="font-medium">{assignment.title}</TableCell>
              <TableCell>
                <Badge variant="secondary" className="font-normal">
                  {assignment.subject}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <span
                  className={cn(
                    "font-semibold",
                    getScoreColor(assignment.score, assignment.maxScore)
                  )}
                >
                  {assignment.score}/{assignment.maxScore}
                </span>
              </TableCell>
              <TableCell className="text-right text-muted-foreground hidden sm:table-cell">
                {new Date(assignment.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
