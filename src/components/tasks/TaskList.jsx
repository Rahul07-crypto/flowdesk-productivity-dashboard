import TaskCard from "./TaskCard";

export default function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}) {

  // EMPTY STATE
  if (!tasks.length) {
    return (
      <div
        className="card"
        style={{
          padding: "48px",
          textAlign: "center",
        }}
      >
        <h3>✨ No tasks yet</h3>
        <p style={{ color: "#9ca3af" }}>
          Create your first task to begin.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "16px",
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