import React from "react";
import { useState } from "react";
import { Screen } from "@/components/Screen";
import { Header } from "@/components/Header";
import { ProgressSection } from "@/components/ProgressSection";
import { AddTaskSection } from "@/components/AddTaskSection";
import { TaskListSection } from "@/components/TaskListSection";
import { FilterSection } from "@/components/FilterSection";
export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const [darkMode, setDarkMode] = useState(false);

    const ontoggleclick = (e) => {
    setDarkMode(!darkMode);
    };
  return (
    <div
      className={` ${!darkMode ? "bg-slate-50 min-h-screen font-sans flex items-center justify-center p-4 selection:bg-[#4f67ff]/20 transition-colors duration-300" : "bg-[#121318] min-h-screen font-sans flex items-center justify-center p-4 selection:bg-[#4f67ff]/20 transition-colors duration-300"}`}
    >
      <div
        className={` ${!darkMode ? "w-full max-w-[480px] mx-auto rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden text-slate-900 border border-slate-100/60" : "w-full max-w-[480px] mx-auto bg-[#1a1c23] dark:bg-[#010101] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden text-slate-900 border border-slate-[#1a1c23]"} `}
      >
        <div className="p-8">
          <Header />
          <ProgressSection />
          <AddTaskSection />
          <FilterSection />
          <TaskListSection />
        </div>
      </div>

      {/* <Screen /> */}
    </div>
  );
};
