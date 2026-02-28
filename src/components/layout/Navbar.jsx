import NotificationBell from "../ui/NotificationBell";

export default function Navbar({ toggleSidebar }) {
  return (
    <div
      style={{
        height: "70px",
        borderBottom: "1px solid #1f2937",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        background: "#0f172a",
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          onClick={toggleSidebar}
          style={{
            fontSize: "20px",
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        <h3>FlowDesk</h3>
      </div>

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <NotificationBell />

        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "#6366f1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          👤
        </div>
      </div>
    </div>
  );
}