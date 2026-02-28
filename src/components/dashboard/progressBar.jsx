export default function ProgressBar({ percent }) {
  return (
    <div className="card" style={{ padding: "16px", marginBottom:"24px" }}>
      <p>Productivity Progress</p>

      <div style={{
        background:"#1f2937",
        height:"8px",
        borderRadius:"6px",
        marginTop:"10px"
      }}>
        <div
          style={{
            width:`${percent}%`,
            background:"#6366f1",
            height:"100%",
            borderRadius:"6px",
            transition:"0.3s"
          }}
        />
      </div>

      <small>{percent}% completed</small>
    </div>
  );
}