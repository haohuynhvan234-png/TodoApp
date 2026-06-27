import React from "react";
import { useState } from "react";
export const AddTaskSection = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("all");
  
    const [darkMode, setDarkMode] = useState(false);
      const ontoggleclick = (e) => {
    setDarkMode(!darkMode);
    };
  return (
    <form className="relative mb-5">
      <input
        placeholder="What needs to be done?"
        className={` ${!darkMode ? "w-full pl-5 pr-14 py-4 bg-[#f8fafc] dark:bg-slate-800/40 border border-[#f1f5f9] dark:border-slate-700 rounded-[16px] focus:outline-none text-[#1e293b] dark:text-slate-200 placeholder-[#94a3b8] text-[14px] font-medium" : "w-full pl-5 pr-14 py-4 bg-[#1c2330] dark:bg-slate-800/40 border border-[#222c3c] dark:border-slate-700 rounded-[16px] focus:outline-none text-[#f4f4f5] dark:text-slate-200 placeholder-[#94a3b8] text-[14px] font-medium"}`}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-[#4f67ff]/50 text-white rounded-[12px] transition-colors "
        disabled={!newTask.trim()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5v14"></path>
        </svg>
      </button>
    </form>
  );
};
