import { useTasks } from "../context/TaskContext";
import StatsSection from "../components/dashboard/StatsSection";

export default function Analytics() {
  const { tasks } = useTasks();

  return (
    <>
      <h1 style={{ marginBottom: "24px" }}>
        Analytics Overview
      </h1>

      <StatsSection tasks={tasks} />
    </>
  );
}