import React from "react";
import { useState } from "react";
export const FilterSection = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const [darkMode, setDarkMode] = useState(false);

  const ontoggleclick = (e) => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="flex gap-2.5 mb-14">
      <button
        className={` ${!darkMode ? "px-5 py-2 text-[14px] font-bold rounded-[10px] bg-[#1e2235] text-white" : "px-5 py-2 text-[14px] font-bold rounded-[10px] bg-[#4f67ff] text-white"}`}
      >
        All
      </button>
      <button
        className={` ${!darkMode ? "px-5 py-2 text-[14px] font-semibold rounded-[10px] bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] transition-colors" : "px-5 py-2 text-[14px] font-semibold rounded-[10px] bg-[#1c2330] text-[#94a3b8] hover:bg-[#2d3748] transition-colors"}`}
      >
        Active
      </button>
      <button
        className={` ${!darkMode ? "px-5 py-2 text-[14px] font-semibold rounded-[10px] bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] transition-colors" : "px-5 py-2 text-[14px] font-semibold rounded-[10px] bg-[#1c2330] text-[#94a3b8] hover:bg-[#2d3748] transition-colors"}`}
      >
        Completed
      </button>
    </div>
  );
};
