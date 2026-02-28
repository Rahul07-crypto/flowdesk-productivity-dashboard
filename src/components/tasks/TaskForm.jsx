import { useState } from "react";

export default function TaskForm({ onAdd, onClose }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      category,
      priority,
      completed: false,
    };

    onAdd(newTask);
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
        style={{
          padding: "24px",
          width: "400px",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Add Task</h2>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "12px", padding: "8px" }}
        />

        <textarea
          placeholder="Description"
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
              padding: "10px",
              color: "white",
              borderRadius: "6px",
            }}
          >
            Add
          </button>

          <button
            type="button"
            onClick={onClose}
            style={{
              flex: 1,
              padding: "10px",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}