import { useState } from "react";

export const FilterSection = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const onToggleClick = () => {
    setDarkMode((prevState) => !prevState);
  };

  const handleTabClick = (e) => {
    setActiveTab(e.currentTarget.dataset.tab);
  };

  const getButtonClass = (tab) => {
    const isActive = activeTab === tab;
    const baseClasses = "px-5 py-2 text-[14px] rounded-[10px] transition-colors";
    const activeClasses = !darkMode
      ? "font-bold bg-[#1e2235] text-white"
      : "font-bold bg-[#4f67ff] text-white";
    const inactiveClasses = !darkMode
      ? "font-semibold bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]"
      : "font-semibold bg-[#1c2330] text-[#94a3b8] hover:bg-[#2d3748]";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="flex gap-2.5 mb-14">
      <button
        data-tab="all"
        onClick={handleTabClick}
        className={getButtonClass("all")}
      >
        All
      </button>
      <button
        data-tab="active"
        onClick={handleTabClick}
        className={getButtonClass("active")}
      >
        Active
      </button>
      <button
        data-tab="completed"
        onClick={handleTabClick}
        className={getButtonClass("completed")}
      >
        Completed
      </button>
    </div>
  );
};
