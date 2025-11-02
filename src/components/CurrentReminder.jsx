import React, { useEffect, useState } from "react";

export default function CurrentReminder() {
  const [time, setTime] = useState(new Date());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="current-reminder p-6 mb-10 bounce-in text-white">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm opacity-80">{time.toLocaleTimeString()}</p>
          <h2 className="text-2xl font-bold mb-2">Current Activity</h2>
          <p className="text-sm opacity-90">Stay focused and keep moving!</p>
        </div>
        <div className="flex items-center">
          <div className="status-indicator active-indicator"></div>
          <span className="text-xs font-medium ml-1">LIVE</span>
        </div>
      </div>

      <div className="live-progress-container">
        <p className="text-sm font-semibold mb-2 opacity-90">
          Progress: {progress}%
        </p>
        <div className="live-progress-bar">
          <div
            className="live-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <button className="notification-button flex items-center">
          <i data-lucide="bell" className="w-5 h-5 mr-2"></i>
          <span>Allow Notifications</span>
        </button>
        <p className="text-xs opacity-80">Notifications On</p>
      </div>
    </div>
  );
}
