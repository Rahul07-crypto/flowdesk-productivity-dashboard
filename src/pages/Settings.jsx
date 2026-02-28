import { useTasks } from "../context/TaskContext";
import toast from "react-hot-toast";

export default function Settings(){

  const {tasks,setTasks}=useTasks();

  const clearAll=()=>{
    if(!window.confirm("Clear all tasks?")) return;
    setTasks([]);
    toast.success("All tasks cleared");
  };

  const exportData=()=>{
    const blob=new Blob(
      [JSON.stringify(tasks,null,2)],
      {type:"application/json"}
    );

    const link=document.createElement("a");
    link.href=URL.createObjectURL(blob);
    link.download="flowdesk-data.json";
    link.click();

    toast.success("Data exported");
  };

  return(
    <>
      <h1>Settings</h1>

      <div className="card" style={{padding:"24px",marginTop:"20px"}}>
        <h3>Data Management</h3>

        <button onClick={exportData}>Export Tasks</button>
        <button onClick={clearAll} style={{marginLeft:"10px"}}>
          Clear All Tasks
        </button>
      </div>
    </>
  );
}