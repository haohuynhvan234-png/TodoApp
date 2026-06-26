import React from "react";
import { useState } from "react";
export const Screen = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const [darkMode, setDarkMode] = useState(false);

    const ontoggleclick = (e) => {
    setDarkMode(!darkMode);
    };
  return (
    <div className={` ${!darkMode ? "bg-slate-50 min-h-screen font-sans flex items-center justify-center p-4 selection:bg-[#4f67ff]/20 transition-colors duration-300" : "bg-[#121318] min-h-screen font-sans flex items-center justify-center p-4 selection:bg-[#4f67ff]/20 transition-colors duration-300"}`}>
      <div className={` ${!darkMode ? "w-full max-w-[480px] mx-auto rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden text-slate-900 border border-slate-100/60" : "w-full max-w-[480px] mx-auto bg-[#1a1c23] dark:bg-[#010101] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden text-slate-900 border border-slate-[#1a1c23]"} `}>
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#4f67ff] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(79,103,255,0.2)]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2 className={`${!darkMode ? "text-[22px] font-bold tracking-tight text-[#0f172a] dark:text-white" : "text-[22px] font-bold tracking-tight text-[#ffffff] dark:text-white"}`}>
                Mini Todo
              </h2>
            </div>
            <button
              className="text-slate-400 hover:text-slate-600 dark:text-slate-500 transition-colors"
              onClick={ontoggleclick}
            >
              {!darkMode ? (<svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
              </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" aria-hidden="true"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>)}
            </button>
          </div>
          <div className="mb-6">
            <p className="text-[14px] font-semibold text-[#5c729d] mb-2">
              0 of 0 completed
            </p>
            <div className={` ${!darkMode ? "h-[6px] w-full bg-[#f1f5f9] dark:bg-slate-800 rounded-full overflow-hidden" : "h-[6px] w-full bg-[#1d293d] dark:bg-slate-800 rounded-full overflow-hidden"}`}>
              <div
                className="h-full bg-[#4f67ff] rounded-full transition-all duration-500"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
          <form className="relative mb-5">
            <input
              placeholder="What needs to be done?"
              className={` ${!darkMode ? "w-full pl-5 pr-14 py-4 bg-[#f8fafc] dark:bg-slate-800/40 border border-[#f1f5f9] dark:border-slate-700 rounded-[16px] focus:outline-none text-[#1e293b] dark:text-slate-200 placeholder-[#94a3b8] text-[14px] font-medium" : "w-full pl-5 pr-14 py-4 bg-[#1c2330] dark:bg-slate-800/40 border border-[#222c3c] dark:border-slate-700 rounded-[16px] focus:outline-none text-[#1e293b] dark:text-slate-200 placeholder-[#94a3b8] text-[14px] font-medium"}`}
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
          <div className="flex gap-2.5 mb-14">
            <button className={` ${!darkMode ? "px-5 py-2 text-[14px] font-bold rounded-[10px] bg-[#1e2235] text-white" : "px-5 py-2 text-[14px] font-bold rounded-[10px] bg-[#4f67ff] text-white"}`}>
              All
            </button>
            <button className={` ${!darkMode ? "px-5 py-2 text-[14px] font-semibold rounded-[10px] bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] transition-colors" : "px-5 py-2 text-[14px] font-semibold rounded-[10px] bg-[#1c2330] text-[#94a3b8] hover:bg-[#2d3748] transition-colors"}`}>
              Active
            </button>
            <button className={` ${!darkMode ? "px-5 py-2 text-[14px] font-semibold rounded-[10px] bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0] transition-colors" : "px-5 py-2 text-[14px] font-semibold rounded-[10px] bg-[#1c2330] text-[#94a3b8] hover:bg-[#2d3748] transition-colors"}`}>
              Completed
            </button>
          </div>
          <div className="text-center py-6 text-[#94a3b8] text-[14.5px] font-medium tracking-normal">
            No tasks yet.Add one above!
          </div>
        </div>
      </div>
    </div>
  );
};
