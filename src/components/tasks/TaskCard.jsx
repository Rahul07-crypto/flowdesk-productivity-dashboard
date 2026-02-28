export default function TaskCard({
  task,
  onToggle,
  onDelete,
  onEdit,
}) {
  return (
    <div
      className="card"
      style={{
        padding: "16px",
        transition: "all 0.2s ease",
      }}
    >
      {/* TITLE */}
      <h3>{task.title}</h3>

      {/* DESCRIPTION */}
      <p
        style={{
          color: "#9ca3af",
          margin: "8px 0",
        }}
      >
        {task.description}
      </p>

      {/* META INFO */}
      <div
        style={{
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        📂 {task.category} | ⚡ {task.priority}
      </div>

      {/* STATUS */}
      <p>
        Status:{" "}
        {task.completed
          ? "✅ Completed"
          : "⏳ Pending"}
      </p>

      {/* ACTION BUTTONS */}
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          gap: "8px",
        }}
      >
        {/* TOGGLE */}
        <button
          onClick={() => onToggle(task.id)}
          style={{
            flex: 1,
            background: "#6366f1",
            border: "none",
            color: "white",
            padding: "6px",
            borderRadius: "6px",
          }}
        >
          Toggle
        </button>

        {/* EDIT */}
        <button
          onClick={() => onEdit(task)}
          style={{
            flex: 1,
            background: "#22c55e",
            border: "none",
            color: "white",
            padding: "6px",
            borderRadius: "6px",
          }}
        >
          Edit
        </button>

        {/* DELETE */}
        <button
          onClick={() => onDelete(task.id)}
          style={{
            flex: 1,
            background: "#ef4444",
            border: "none",
            color: "white",
            padding: "6px",
            borderRadius: "6px",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}