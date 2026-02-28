import {
  CheckCircle,
  ListTodo,
  Clock,
  TrendingUp,
} from "lucide-react";
import StatCard from "./StatCard";

export default function StatsSection({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;
  const percent = total
    ? Math.round((completed / total) * 100)
    : 0;

  return (
    <div
      style={{
        display: "grid",
        gap: "24px",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
      }}
    >
      <StatCard
        icon={<ListTodo size={20} />}
        number={total}
        label="Total Tasks"
        trend="+8% this week"
      />

      <StatCard
        icon={<CheckCircle size={20} />}
        number={completed}
        label="Completed"
        trend="+5% this week"
      />

      <StatCard
        icon={<Clock size={20} />}
        number={pending}
        label="Pending"
        trend="-2% this week"
      />

      <StatCard
        icon={<TrendingUp size={20} />}
        number={`${percent}%`}
        label="Productivity"
        trend="Improving"
      />
    </div>
  );
}