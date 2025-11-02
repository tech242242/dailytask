import React, { useState } from "react";

export default function SubjectProgress() {
  const [progress, setProgress] = useState({
    Math: 0,
    Physics: 0,
    Computer: 0,
    English: 0,
  });

  const increase = (subject) => {
    setProgress((prev) => ({
      ...prev,
      [subject]: Math.min(prev[subject] + 10, 100),
    }));
  };

  const reset = () =>
    setProgress({ Math: 0, Physics: 0, Computer: 0, English: 0 });

  return (
    <div className="ios-card p-6 mt-10 fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center">
        <i data-lucide="list-checks" className="w-6 h-6 mr-3 text-emerald-500"></i>
        Subject Progress
      </h2>

      {Object.keys(progress).map((subject) => (
        <div key={subject} className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="font-medium">{subject}</span>
            <span className="text-sm font-bold">{progress[subject]}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-inner"
              style={{
                width: `${progress[subject]}%`,
                backgroundColor: "#007aff",
              }}
            ></div>
          </div>
          <button
            className="mt-2 text-xs bg-blue-500 text-white rounded-full px-3 py-1"
            onClick={() => increase(subject)}
          >
            + Add Progress
          </button>
        </div>
      ))}

      <button
        onClick={reset}
        className="mt-4 bg-gray-500 text-white text-sm px-5 py-2 rounded-full font-semibold"
      >
        Reset All
      </button>
    </div>
  );
}
