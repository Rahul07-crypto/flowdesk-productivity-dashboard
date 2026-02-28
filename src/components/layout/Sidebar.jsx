import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const baseStyle = {
    padding: "16px",
    borderRadius: "8px",
    textDecoration: "none",
    color: "#e5e7eb",
    display: "block",
    transition: "all 0.2s ease",
  };

  return (
    <div
      style={{
        width: "240px",
        padding: "24px 16px",
        borderRight: "1px solid #1f2937",
        background: "#0f172a",
      }}
    >
      <h2 style={{ marginBottom: "32px" }}>FlowDesk</h2>

      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...baseStyle,
          background: isActive ? "#1f2937" : "transparent",
        })}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/tasks"
        style={({ isActive }) => ({
          ...baseStyle,
          background: isActive ? "#1f2937" : "transparent",
        })}
      >
        Tasks
      </NavLink>

      <NavLink
        to="/analytics"
        style={({ isActive }) => ({
          ...baseStyle,
          background: isActive ? "#1f2937" : "transparent",
        })}
      >
        Analytics
      </NavLink>

      <NavLink
        to="/settings"
        style={({ isActive }) => ({
          ...baseStyle,
          background: isActive ? "#1f2937" : "transparent",
        })}
      >
        Settings
      </NavLink>
    </div>
  );
}