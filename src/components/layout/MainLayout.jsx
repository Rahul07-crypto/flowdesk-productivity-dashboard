import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        isOpen={isOpen}
        closeSidebar={() => setIsOpen(false)}
      />

      <div style={{ flex: 1 }}>
        <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

        <main style={{ padding: "24px" }}>
          {/* PAGE CONTENT APPEARS HERE */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}