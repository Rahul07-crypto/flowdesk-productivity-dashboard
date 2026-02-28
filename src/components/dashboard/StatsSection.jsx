import StatCard from "./StatCard";

export default function StatsSection({ tasks }) {

  const total = tasks.length;

  const completed = tasks.filter(
    (t) => t.completed
  ).length;

  const pending = total - completed;

  const productivity =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        marginBottom: "24px",
        flexWrap: "wrap",
      }}
    >
      <StatCard
        title="Total Tasks"
        value={total}
        subtitle="All created tasks"
      />

      <StatCard
        title="Completed"
        value={completed}
        subtitle="Tasks finished"
      />

      <StatCard
        title="Pending"
        value={pending}
        subtitle="Remaining work"
      />

      <StatCard
        title="Productivity"
        value={`${productivity}%`}
        subtitle="Completion rate"
      />
    </div>
  );
}