import { useState } from "react";

export default function useUser() {
  const [name, setName] = useState(
    localStorage.getItem("flowdesk-user")
  );

  const saveName = (newName) => {
    localStorage.setItem("flowdesk-user", newName);
    setName(newName);
  };

  return { name, saveName };
}