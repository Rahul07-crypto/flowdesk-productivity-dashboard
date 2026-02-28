import { useState } from "react";

export default function UserModal({ onSave }) {
  const [name, setName] = useState("");

  return (
    <div style={{
      position:"fixed",
      inset:0,
      background:"rgba(0,0,0,0.6)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      zIndex:2000
    }}>
      <div className="card" style={{padding:"24px", width:"320px"}}>
        <h2>Welcome to FlowDesk 👋</h2>

        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={{width:"100%",marginTop:"16px",padding:"8px"}}
        />

        <button
          style={{marginTop:"16px",width:"100%"}}
          onClick={()=>onSave(name || "Guest")}
        >
          Start
        </button>
      </div>
    </div>
  );
}