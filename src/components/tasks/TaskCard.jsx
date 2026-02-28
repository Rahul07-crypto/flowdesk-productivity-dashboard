export default function TaskCard({
  task,
  onToggle,
  onDelete,
  onEdit,
}) {
  const priorityStyles = {
    High: {
      background: "rgba(239,68,68,0.15)",
      color: "#ef4444",
    },
    Medium: {
      background: "rgba(251,191,36,0.15)",
      color: "#fbbf24",
    },
    Low: {
      background: "rgba(34,197,94,0.15)",
      color: "#22c55e",
    },
  };

  return (
    <div
      className="card"
      style={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* TITLE */}
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        {task.title}
      </h2>

      {/* DESCRIPTION */}
      <p
        style={{
          fontSize: "14px",
          color: "#9ca3af",
          lineHeight: "1.5",
        }}
      >
        {task.description}
      </p>

      {/* BADGES */}
      <div style={{ display: "flex", gap: "8px" }}>
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: "500",
            ...priorityStyles[task.priority],
          }}
        >
          {task.priority}
        </span>

        <span
          style={{
            padding: "4px 10px",
            borderRadius: "6px",
            fontSize: "12px",
            background: "#1f2937",
            color: "#9ca3af",
          }}
        >
          {task.category}
        </span>
      </div>

      {/* ACTIONS */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "4px",
        }}
      >
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={() => onEdit(task)}>
          Edit
        </button>

        <button
          style={{ background: "#ef4444" }}
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}