import React from "react";

export const TaskListSection = ({ darkMode, listTask }) => {
  return (
    <div class="space-y-3 mb-8 min-h-[140px]">
      {listTask.map((task) => (
        <div
          key={task.id}
          class="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all hover:border-slate-200 dark:hover:border-slate-700 gap-3 sm:gap-4"
        >
          <div class="flex items-center gap-4 flex-1">
            <button class="flex-shrink-0 transition-colors focus:outline-none">
              <div class="w-[22px] h-[22px] rounded-full border-2 border-slate-300 dark:border-slate-600"></div>
            </button>
            <span class="text-[15px] flex-1 truncate transition-all duration-300 text-slate-700 dark:text-slate-200">
              {task.text}
            </span>
          </div>
          <div class="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
            <button
              class="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
              title="Edit task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-pencil"
                aria-hidden="true"
              >
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                <path d="m15 5 4 4"></path>
              </svg>
            </button>
            <button
              class="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors focus:outline-none"
              title="Delete task"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trash2 lucide-trash-2"
                aria-hidden="true"
              >
                <path d="M10 11v6"></path>
                <path d="M14 11v6"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                <path d="M3 6h18"></path>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
