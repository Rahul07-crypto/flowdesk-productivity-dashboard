import { ArrowUp } from "lucide-react";

export default function StatCard({ icon, number, label, trend }) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        border: "1px solid #1f2937",
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
      }}
    >
      {/* ICON */}
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "#1f2937",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>

      {/* TEXT */}
      <div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: "600",
            lineHeight: "1.2",
          }}
        >
          {number}
        </div>

        <div
          style={{
            fontSize: "14px",
            color: "#9ca3af",
            marginTop: "4px",
          }}
        >
          {label}
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            marginTop: "6px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <ArrowUp size={14} />
          {trend}
        </div>
      </div>
    </div>
  );
}