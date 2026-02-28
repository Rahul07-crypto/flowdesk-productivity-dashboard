export default function StatCard({ title, value, subtitle }) {
  return (
    <div
      className="card"
      style={{
        padding: "20px",
        flex: 1,
      }}
    >
      <p style={{ color: "#9ca3af", fontSize: "14px" }}>
        {title}
      </p>

      <h2 style={{ margin: "8px 0" }}>{value}</h2>

      <small style={{ color: "#9ca3af" }}>
        {subtitle}
      </small>
    </div>
  );
}