import { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { useNotifications } from "../context/NotificationContext";
import useUser from "../hooks/useUser";

import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";
import EditTaskModal from "../components/tasks/EditTaskModal";
import StatsSection from "../components/dashboard/StatsSection";
import ProgressBar from "../components/dashboard/ProgressBar";
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

  useEffect(() => {
    setTimeout(() => setLoading(false), 600);
  }, []);

  function greeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  }

  // ADD TASK
  const addTask = (task) => {
    setTasks([...tasks, task]);
    addNotification(`Task "${task.title}" added`);
    setShowModal(false);
  };

  // TOGGLE TASK
  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
    addNotification("Task status updated");
  };

  // DELETE TASK
  const deleteTask = (id) => {
    if (!window.confirm("Delete task?")) return;
    setTasks(tasks.filter((t) => t.id !== id));
    addNotification("Task deleted");
  };

  // UPDATE TASK
  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      )
    );
    setEditingTask(null);
    addNotification("Task updated");
  };

  // FILTER TASKS
  const filteredTasks = tasks
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      filter === "All" ? true : t.category === filter
    );

  // PRODUCTIVITY %
  const completedCount = tasks.filter((t) => t.completed).length;
  const percent = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  if (loading) return <Loader />;

  return (
    <>
      {!name && <UserModal onSave={saveName} />}

      {/* WELCOME SECTION */}
      <div className="card" style={{ marginBottom: "32px" }}>
        <h1>
          Good {greeting()}, {name} 👋
        </h1>
        <small>
          Manage tasks, monitor progress, and stay productive with FlowDesk.
        </small>
      </div>

      {/* STATS SECTION */}
      <div style={{ marginBottom: "32px" }}>
        <StatsSection tasks={tasks} />
      </div>

      {/* PROGRESS BAR */}
      <div style={{ marginBottom: "32px" }}>
        <ProgressBar percent={percent} />
      </div>

      {/* CONTROLS */}
      <div
        style={{
          marginBottom: "32px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          alignItems: "center",
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

      {/* TASK GRID */}
      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={setEditingTask}
      />

      {/* ADD TASK MODAL */}
      {showModal && (
        <TaskForm
          onAdd={addTask}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* EDIT TASK MODAL */}
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