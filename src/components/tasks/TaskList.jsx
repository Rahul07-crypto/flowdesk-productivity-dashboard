import TaskCard from "./TaskCard";

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}) {
  // EMPTY STATE
  if (!tasks || tasks.length === 0) {
    return (
      <div
        className="card"
        style={{
          textAlign: "center",
          padding: "48px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "22px" }}>
          ✨ No tasks yet
        </h2>

        <p
          style={{
            fontSize: "14px",
            color: "#9ca3af",
            maxWidth: "300px",
          }}
        >
          Create your first task to begin managing
          your productivity with FlowDesk.
        </p>
      </div>
    );
  }

  // TASK GRID
  return (
    <div
      style={{
        display: "grid",
        gap: "24px",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(280px, 1fr))",
      }}
    >
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}