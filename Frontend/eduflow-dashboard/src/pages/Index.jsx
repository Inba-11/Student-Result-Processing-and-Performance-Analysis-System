import { GraduationCap, TrendingUp, CalendarCheck, Brain } from "lucide-react";
import { currentUser, studentStats } from "@/data/mockData";
import {
  StatsCard,
  PerformanceChart,
  SubjectChart,
  AIInsights,
  RecentAssignments,
} from "@/components/dashboard";

const Index = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Welcome back, {currentUser.name.split(" ")[0]}! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your academic performance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Current GPA"
          value={studentStats.gpa.toFixed(2)}
          change={studentStats.gpaChange}
          icon={GraduationCap}
          variant="primary"
        />
        <StatsCard
          title="Attendance Rate"
          value={`${studentStats.attendance}%`}
          change={studentStats.attendanceChange}
          icon={CalendarCheck}
          variant="success"
        />
        <StatsCard
          title="AI Score"
          value={studentStats.aiScore}
          change={studentStats.aiScoreChange}
          icon={Brain}
          variant="default"
        />
        <StatsCard
          title="Class Rank"
          value={`#${studentStats.classRank}`}
          change={studentStats.rankChange}
          changeLabel={` positions`}
          icon={TrendingUp}
          variant="warning"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PerformanceChart />
        <SubjectChart />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentAssignments />
        </div>
        <div>
          <AIInsights />
        </div>
      </div>
    </div>
  );
};

export default Index;
