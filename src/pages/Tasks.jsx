import { useTasks } from "../context/TaskContext";
import TaskList from "../components/tasks/TaskList";

export default function Tasks() {
  const { tasks, setTasks } = useTasks();

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    if (!window.confirm("Delete this task?")) return;
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <>
      <h1 style={{ marginBottom: "24px" }}>All Tasks</h1>

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={() => {}}
      />
    </>
  );
}