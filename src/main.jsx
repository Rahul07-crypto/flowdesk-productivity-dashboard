import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { TaskProvider } from "./context/TaskContext";
import { NotificationProvider } from "./context/NotificationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TaskProvider>
        <NotificationProvider>
          <App />

          {/* GLOBAL TOASTS */}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#111827",
                color: "#e5e7eb",
                border: "1px solid #1f2937",
              },
            }}
          />
        </NotificationProvider>
      </TaskProvider>
    </BrowserRouter>
  </React.StrictMode>
);