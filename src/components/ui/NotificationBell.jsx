import { useState } from "react";
import { useNotifications } from "../../context/NotificationContext";

export default function NotificationBell() {

  const {
    notifications,
    markAllRead,
    clearNotifications,
  } = useNotifications();

  const [open, setOpen] = useState(false);

  const unread = notifications.filter(n => !n.read).length;

  return (
    <div style={{ position: "relative" }}>

      {/* BELL */}
      <button onClick={() => {
        setOpen(!open);
        markAllRead();
      }}>
        🔔
        {unread > 0 && (
          <span style={{
            background:"red",
            color:"white",
            borderRadius:"50%",
            padding:"2px 6px",
            fontSize:"12px",
            marginLeft:"4px"
          }}>
            {unread}
          </span>
        )}
      </button>

      {/* PANEL */}
      {open && (
        <div className="card" style={{
          position:"absolute",
          right:0,
          top:"40px",
          width:"280px",
          maxHeight:"300px",
          overflowY:"auto",
          padding:"12px",
          zIndex:1000
        }}>
          <h4>Notifications</h4>

          {notifications.length === 0 && (
            <p>No notifications</p>
          )}

          {notifications.map(n => (
            <div key={n.id}
              style={{
                borderBottom:"1px solid #1f2937",
                padding:"8px 0"
              }}>
              <p>{n.message}</p>
              <small>{n.time}</small>
            </div>
          ))}

          <button
            style={{marginTop:"10px"}}
            onClick={clearNotifications}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}