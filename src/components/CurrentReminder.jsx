import React, { useEffect, useState } from "react";

export default function CurrentReminder() {
  const [time, setTime] = useState(new Date());
  const [progress, setProgress] = useState(0);

  // Define your time periods (timeline hours)
  const schedule = [
    { label: "5 AM", minutes: 300 },
    { label: "8 AM", minutes: 480 },
    { label: "11 AM", minutes: 660 },
    { label: "2 PM", minutes: 840 },
    { label: "5 PM", minutes: 1020 },
    { label: "8 PM", minutes: 1200 },
    { label: "11 PM", minutes: 1380 },
    { label: "2 AM", minutes: 120 },
  ];

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculate progress of the day
  const minutes = time.getHours() * 60 + time.getMinutes();
  const dayProgress = (minutes / 1440) * 100;

  return (
    <div className="current-reminder p-6 mb-10 bounce-in text-white relative overflow-hidden">
      {/* Top Info */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm opacity-90">{time.toLocaleTimeString()}</p>
          <h2 className="text-2xl font-bold mb-1">Current Activity</h2>
          <p className="text-sm opacity-90">Stay focused and keep moving!</p>
        </div>
        <div className="flex items-center">
          <div className="status-indicator active-indicator"></div>
          <span className="text-xs font-medium ml-1">LIVE</span>
        </div>
      </div>

      {/* Timeline Graph */}
      <div className="timeline-container mt-4 mb-6">
        <div className="timeline-bar"></div>
        <div
          className="timeline-current"
          style={{ left: `${dayProgress}%` }}
        ></div>
        {schedule.map((mark, i) => (
          <span
            key={i}
            className="timeline-label"
            style={{ left: `${(mark.minutes / 1440) * 100}%` }}
          >
            {mark.label}
          </span>
        ))}
      </div>

      {/* Notification Controls */}
      <div className="mt-5 flex justify-between items-center">
        <button className="notification-button flex items-center">
          <i data-lucide="bell" className="w-5 h-5 mr-2"></i>
          <span>Allow Notifications</span>
        </button>
        <p className="text-xs opacity-90">Notifications On</p>
      </div>
    </div>
  );
}
