import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, closeSidebar }) {
  const linkStyle = {
    display: "block",
    padding: "10px 0",
    color: "#e5e7eb",
    textDecoration: "none",
  };

  const activeStyle = {
    color: "#6366f1",
    fontWeight: "600",
  };

  const handleClick = () => {
    // auto close sidebar on mobile
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <aside
      className={`sidebar ${isOpen ? "open" : ""}`}
      style={{
        width: "240px",
        background: "#111827",
        padding: "24px",
      }}
    >
      <h2 style={{ color: "#6366f1", marginBottom: "32px" }}>
        FlowDesk
      </h2>

      <nav>
        <NavLink to="/" style={linkStyle} onClick={handleClick}>
          {({ isActive }) => (
            <span style={isActive ? activeStyle : {}}>
              📊 Dashboard
            </span>
          )}
        </NavLink>

        <NavLink to="/tasks" style={linkStyle} onClick={handleClick}>
          {({ isActive }) => (
            <span style={isActive ? activeStyle : {}}>
              ✅ Tasks
            </span>
          )}
        </NavLink>

        <NavLink to="/analytics" style={linkStyle} onClick={handleClick}>
          {({ isActive }) => (
            <span style={isActive ? activeStyle : {}}>
              📈 Analytics
            </span>
          )}
        </NavLink>

        <NavLink to="/settings" style={linkStyle} onClick={handleClick}>
          {({ isActive }) => (
            <span style={isActive ? activeStyle : {}}>
              ⚙ Settings
            </span>
          )}
        </NavLink>
      </nav>
    </aside>
  );
}