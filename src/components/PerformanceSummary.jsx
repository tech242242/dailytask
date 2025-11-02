import React from "react";

export default function PerformanceSummary() {
  const stats = [
    { name: "Focus", percent: 85 },
    { name: "Hard Work", percent: 78 },
    { name: "Discipline", percent: 92 },
    { name: "Consistency", percent: 88 },
  ];

  return (
    <div className="ios-card p-6 mt-10 fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center">
        <i data-lucide="award" className="w-6 h-6 mr-3 text-yellow-500"></i>
        Performance Summary
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-sm">{stat.name}</span>
              <span className="text-sm font-bold">{stat.percent}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-inner"
                style={{ width: `${stat.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
