import { useState } from "react";

export default function EditTaskModal({ task, onUpdate, onClose }) {

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [category, setCategory] = useState(task.category);
  const [priority, setPriority] = useState(task.priority);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...task,
      title,
      description,
      category,
      priority,
    };

    onUpdate(updatedTask);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        className="card"
        onSubmit={handleSubmit}
        style={{ padding: "24px", width: "400px" }}
      >
        <h2>Edit Task</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", margin: "12px 0", padding: "8px" }}
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "100%", marginBottom: "12px", padding: "8px" }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "100%", marginBottom: "12px", padding: "8px" }}
        >
          <option>Work</option>
          <option>Study</option>
          <option>Personal</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ width: "100%", marginBottom: "16px", padding: "8px" }}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            type="submit"
            style={{
              flex: 1,
              background: "#6366f1",
              border: "none",
              color: "white",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            Save
          </button>

          <button type="button" onClick={onClose} style={{ flex: 1 }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}