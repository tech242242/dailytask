import React, { useEffect, useState } from "react";

export default function SyllabusProgress() {
  const [progress, setProgress] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const start = new Date(2025, 10, 2);
    const end = new Date(2026, 2, 2);
    const total = end - start;
    const now = new Date() - start;
    const percent = Math.min(100, (now / total) * 100);
    const days = Math.ceil((end - new Date()) / (1000 * 60 * 60 * 24));
    setProgress(percent);
    setDaysLeft(days);
  }, []);

  const circumference = 326.7;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="ios-card p-6 mb-8 text-center fade-in">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center">
        <i data-lucide="calendar-check" className="w-6 h-6 mr-3 text-indigo-600"></i>
        4-Month Syllabus Progress
      </h2>

      <div className="flex items-center justify-center mb-4">
        <div className="circular-progress mr-6 relative">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle className="circular-bg" cx="60" cy="60" r="52"></circle>
            <circle
              className="circular-fill"
              cx="60"
              cy="60"
              r="52"
              stroke="#007aff"
              strokeDasharray="326.7"
              strokeDashoffset={offset}
            ></circle>
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">
              {Math.round(progress)}%
            </span>
            <span className="text-xs text-gray-500 mt-1">
              {daysLeft > 0 ? `${daysLeft} days left` : "Completed!"}
            </span>
          </div>
        </div>

        <div className="text-left">
          <p className="text-sm text-gray-600 mb-2">You're making great progress!</p>
          <div className="space-y-1 text-sm">
            <p>Math: 40%</p>
            <p>Physics: 60%</p>
            <p>Computer: 30%</p>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-3 font-medium">
        Keep going! You're doing amazing.
      </p>
    </div>
  );
}
