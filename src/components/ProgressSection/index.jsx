import React from "react";
import { useState } from "react";
import { Header } from "../Header";
import { useEffect } from "react";
export const ProgressSection = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [newTask, setNewTask] = useState("");
  const ontoggleclick = (e) => {
    setDarkMode(!darkMode);
  };
  useState(() => {
  if (<Header/>==darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
  return (
    <div className="mb-6">
      <p className="text-[14px] font-semibold text-[#5c729d] mb-2">
        0 of 0 completed
      </p>
      <div
        className={` ${!darkMode ? "h-[6px] w-full bg-[#f1f5f9] dark:bg-slate-800 rounded-full overflow-hidden" : "h-[6px] w-full bg-[#1d293d] dark:bg-slate-800 rounded-full overflow-hidden"}`}
      >
        <div
          className="h-full bg-[#4f67ff] rounded-full transition-all duration-500"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};
