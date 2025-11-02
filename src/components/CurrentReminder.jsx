import React, { useEffect, useState } from "react";

export default function CurrentReminder() {
  const [time, setTime] = useState(new Date());
  const [progress, setProgress] = useState(0);
  const [timeline, setTimeline] = useState([]);

  // update time & progress
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));

      // generate a simple wave pattern for the timeline
      setTimeline((prev) => {
        const nextValue = Math.floor(Math.random() * 60) + 20; // random 20–80 height
        const updated = [...prev, nextValue].slice(-25); // keep last 25 points
        return updated;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="current-reminder ios-card p-6 mb-10 fade-in relative overflow-hidden">
      {/* background light effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 pointer-events-none"></div>

      {/* Header row */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <p className="text-sm text-gray-900/70 font-medium">
            {time.toLocaleTimeString()}
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Current Activity
          </h2>
          <p className="text-sm text-gray-700">Stay focused and keep moving!</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-gray-700 mt-1">LIVE</span>
        </div>
      </div>

      {/* timeline mini graph */}
      <div className="timeline-graph mb-4">
        <svg width="100%" height="60" viewBox="0 0 100 60" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="url(#grad)"
            strokeWidth="2"
            points={timeline
              .map((val, i) => `${(i / 24) * 100},${60 - (val / 100) * 60}`)
              .join(" ")}
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00c6ff" />
              <stop offset="100%" stopColor="#0072ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* progress bar */}
      <div className="mb-5 relative z-10">
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Progress: {progress}%
        </p>
        <div className="progress-bar">
          <div
            className="progress-bar-inner"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #00c6ff, #0072ff)",
            }}
          ></div>
        </div>
      </div>

      {/* buttons */}
      <div className="mt-5 flex justify-between items-center relative z-10">
        <button className="notification-button flex items-center px-4 py-2 rounded-lg text-white font-medium text-sm shadow-md transition-all"
          style={{
            background: "linear-gradient(90deg, #00c6ff, #0072ff)",
          }}
        >
          <i data-lucide="bell" className="w-4 h-4 mr-2"></i>
          Allow Notifications
        </button>
        <p className="text-xs text-gray-700 font-semibold">
          Notifications On
        </p>
      </div>
    </div>
  );
}
