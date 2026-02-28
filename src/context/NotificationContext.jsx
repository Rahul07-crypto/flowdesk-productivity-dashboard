import { createContext, useContext, useState, useEffect } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem("flowdesk-notifications");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "flowdesk-notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  // ADD NOTIFICATION
  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
      read: false,
      time: new Date().toLocaleTimeString(),
    };

    setNotifications((prev) => [newNotification, ...prev]);
  };

  // MARK ALL READ
  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    );
  };

  // CLEAR ALL
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        addNotification,
        markAllRead,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () =>
  useContext(NotificationContext);