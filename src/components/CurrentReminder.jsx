import React, { useEffect, useState } from "react";

export default function CurrentReminder() {
  const [time, setTime] = useState(new Date());
  const [progress, setProgress] = useState(0);

  // your schedule time ranges (in 24h format)
  const schedule = [
    { start: 5, end: 6.5, label: "Math", color: "#007aff" },
    { start: 6.5, end: 8, label: "Morning Free", color: "#5ac8fa" },
    { start: 8, end: 14, label: "College", color: "#af52de" },
    { start: 14, end: 14.5, label: "Lunch", color: "#ffcc00" },
    { start: 14.5, end: 16, label: "Physics", color: "#34c759" },
    { start: 16, end: 16.5, label: "Exercise", color: "#ff9500" },
    { start: 16.5, end: 18, label: "Computer", color: "#ff3b30" },
    { start: 18, end: 19, label: "Family Time", color: "#32ade6" },
    { start: 19, end: 20, label: "English", color: "#ffcc00" },
    { start: 20, end: 21, label: "Dinner", color: "#30b0c7" },
    { start: 21, end: 22.5, label: "Revision", color: "#007aff" },
    { start: 22.5, end: 24, label: "Sleep", color: "#8e8e93" },
  ];

  const getCurrentSlot = (hour) => {
    return schedule.find((slot) => hour >= slot.start && hour < slot.end);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setProgress((p) => (p >= 100 ? 0 : p + 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentHour = time.getHours() + time.getMinutes() / 60;
  const currentSlot = getCurrentSlot(currentHour);

  const percentOfDay = (currentHour / 24) * 100;
  const slotStartPercent = (currentSlot?.start / 24) * 100;
  const slotEndPercent = (currentSlot?.end / 24) * 100;

  return (
    <div className="ios-card p-6 mb-10 fade-in relative overflow-hidden text-gray-900">
      {/* gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10"></div>

      {/* header */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <p className="text-sm text-gray-800 font-medium">
            {time.toLocaleTimeString()}
          </p>
          <h2 className="text-2xl font-bold mb-1">Current Activity</h2>
          <p className="text-sm text-gray-700">
            {currentSlot
              ? `${currentSlot.label} — Stay focused and keep moving!`
              : "Free time or transition period"}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-700 mt-1 font-semibold">LIVE</span>
        </div>
      </div>

      {/* timeline graph */}
      <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden mb-4 shadow-inner">
        {/* full schedule segments */}
        {schedule.map((slot, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 opacity-70"
            style={{
              left: `${(slot.start / 24) * 100}%`,
              width: `${((slot.end - slot.start) / 24) * 100}%`,
              backgroundColor: slot.color,
            }}
            title={slot.label}
          ></div>
        ))}

        {/* highlight current slot */}
        {currentSlot && (
          <div
            className="absolute top-0 bottom-0 rounded-full glow"
            style={{
              left: `${slotStartPercent}%`,
              width: `${slotEndPercent - slotStartPercent}%`,
              background: `linear-gradient(90deg, ${currentSlot.color}, #ffffff40)`,
              boxShadow: `0 0 12px ${currentSlot.color}`,
            }}
          ></div>
        )}

        {/* marker for current time */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-black"
          style={{ left: `${percentOfDay}%` }}
        ></div>
      </div>

      {/* progress bar */}
      <div className="mb-5 relative z-10">
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Progress in this session: {progress}%
        </p>
        <div className="progress-bar">
          <div
            className="progress-bar-inner"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg,#00c6ff,#0072ff)",
            }}
          ></div>
        </div>
      </div>

      {/* buttons */}
      <div className="mt-5 flex justify-between items-center relative z-10">
        <button
          className="flex items-center px-4 py-2 rounded-lg text-white font-medium text-sm shadow-md"
          style={{
            background: "linear-gradient(90deg, #00c6ff, #0072ff)",
          }}
        >
          <i data-lucide="bell" className="w-4 h-4 mr-2"></i>
          Allow Notifications
        </button>
        <p className="text-xs text-gray-700 font-semibold">Notifications On</p>
      </div>
    </div>
  );
}
