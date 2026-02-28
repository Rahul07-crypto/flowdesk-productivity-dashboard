import { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { useNotifications } from "../context/NotificationContext";
import useUser from "../hooks/useUser";

import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import EditTaskModal from "../components/tasks/EditTaskModal";
import StatsSection from "../components/dashboard/StatsSection";
import ProgressBar from "../components/dashboard/progressBar";
import UserModal from "../components/ui/UserModal";
import Loader from "../components/ui/Loader";

export default function Dashboard() {

  const { tasks, setTasks } = useTasks();
  const { addNotification } = useNotifications();
  const { name, saveName } = useUser();

  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // FAKE LOADER
  useEffect(() => {
    setTimeout(() => setLoading(false), 700);
  }, []);

  function greeting() {
    const h = new Date().getHours();
    if (h < 12) return "morning";
    if (h < 18) return "afternoon";
    return "evening";
  }

  // ======================
  // TASK ACTIONS
  // ======================

  const addTask = (task) => {
    setTasks([...tasks, task]);
    addNotification(`Task "${task.title}" added`);
    setShowModal(false);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
    addNotification("Task status updated");
  };

  const deleteTask = (id) => {
    if (!window.confirm("Delete task?")) return;
    setTasks(tasks.filter((t) => t.id !== id));
    addNotification("Task deleted");
  };

  const updateTask = (updated) => {
    setTasks(tasks.map((t) => (t.id === updated.id ? updated : t)));
    setEditingTask(null);
    addNotification("Task updated");
  };

  // ======================
  // FILTERS
  // ======================

  const filteredTasks = tasks
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      filter === "All" ? true : t.category === filter
    );

  const completed = tasks.filter((t) => t.completed).length;
  const percent = tasks.length
    ? Math.round((completed / tasks.length) * 100)
    : 0;

  if (loading) return <Loader />;

  return (
    <>
      {!name && <UserModal onSave={saveName} />}

      {/* WELCOME */}
      <div className="card" style={{ padding: "20px", marginBottom: "24px" }}>
        <h2>
          Good {greeting()}, {name} 👋
        </h2>
        <p style={{ color: "#9ca3af" }}>
          Here’s your productivity overview.
        </p>
      </div>

      <StatsSection tasks={tasks} />
      <ProgressBar percent={percent} />

      {/* CONTROLS */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <input
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {["All", "Work", "Study", "Personal"].map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}

        <button
          style={{ marginLeft: "auto" }}
          onClick={() => setShowModal(true)}
        >
          + Add Task
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={setEditingTask}
      />

      {showModal && (
        <TaskForm onAdd={addTask} onClose={() => setShowModal(false)} />
      )}

      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onUpdate={updateTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </>
  );
}