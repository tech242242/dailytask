import React from "react";

export default function PerformanceSummary() {
  const stats = [
    { name: "Focus", percent: 85 },
    { name: "Hard Work", percent: 78 },
    { name: "Discipline", percent: 92 },
    { name: "Consistency", percent: 88 },
  ];

  return (
    <div className="ios-card fade-in p-5 mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center">
        <i data-lucide="award" className="w-6 h-6 mr-3 text-yellow-500"></i>
        Performance Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

      <style>{`
        .ios-card {
          background: rgba(255, 255, 255, 0.85);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          backdrop-filter: blur(15px);
          transition: all 0.3s ease;
        }
        .ios-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.6s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Stat progress bars */
        .progress-bar {
          width: 100%;
          height: 10px;
          background: rgba(0,0,0,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        .progress-bar-inner {
          height: 100%;
          background: linear-gradient(90deg, #00c6ff, #0072ff);
          border-radius: 8px;
          transition: width 1s ease-in-out;
          animation: fillBar 1s forwards;
        }
        @keyframes fillBar {
          from { width: 0; }
          to { width: var(--width); }
        }

        /* Stat item card hover */
        .stat-item {
          background: rgba(255,255,255,0.9);
          padding: 0.8rem 1rem;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .stat-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        /* Responsive */
        @media(max-width:640px) {
          .ios-card { padding: 1rem; }
          .stat-item { padding: 0.7rem 0.9rem; }
          .progress-bar { height: 8px; }
        }
      `}</style>
    </div>
  );
}
