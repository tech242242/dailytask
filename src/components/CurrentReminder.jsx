import { useState, useEffect } from "react";
import { schedule } from "../data/scheduleData";
import { timeToMinutes, formatTimeRemaining } from "../utils/timeHelpers";

export default function CurrentReminder({ currentTime, notificationPermission, onRequestNotification }) {
  const [activeItem, setActiveItem] = useState(null);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    
    let currentActiveItem = null;
    let currentProgress = 0;
    let remainingTime = "";

    schedule.forEach((item) => {
      let isCurrent = false;
      if (item.isOvernight) {
        if (currentMinutes >= item.startMinutes || currentMinutes < item.endMinutes) isCurrent = true;
      } else {
        if (currentMinutes >= item.startMinutes && currentMinutes < item.endMinutes) isCurrent = true;
      }
      
      if (isCurrent) {
        currentActiveItem = item;
        const { startMinutes, endMinutes, isOvernight } = item;

        let durationMinutes;
        let elapsedMinutes;
        
        if (isOvernight) {
          durationMinutes = (1440 - startMinutes) + endMinutes;
          elapsedMinutes = (currentMinutes >= startMinutes) ? currentMinutes - startMinutes : (1440 - startMinutes) + currentMinutes;
        } else {
          durationMinutes = endMinutes - startMinutes;
          elapsedMinutes = currentMinutes - startMinutes;
        }

        currentProgress = Math.min(100, Math.max(0, (elapsedMinutes / durationMinutes) * 100));
        const remainingMinutes = Math.max(0, durationMinutes - elapsedMinutes);
        remainingTime = formatTimeRemaining(remainingMinutes);
      }
    });

    setActiveItem(currentActiveItem);
    setProgressPercentage(currentProgress);
    setTimeRemaining(remainingTime || "Next task starting soon");
  }, [currentTime]);

  return (
    <div className="current-reminder p-6 mb-10 bounce-in">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm opacity-80">
            Current Time: {currentTime.toLocaleTimeString()}
          </p>
          <h2 className="text-2xl font-bold mb-2">
            {activeItem ? `▶️ ${activeItem.area}` : "Time for Transition!"}
          </h2>
          <p className="text-sm opacity-90">
            {activeItem ? `"${activeItem.note}"` : "Take a short break or prepare for your next session"}
          </p>
        </div>
        <div className="flex items-center">
          <div className="status-indicator active-indicator"></div>
          <span className="text-xs font-medium">LIVE</span>
        </div>
      </div>
      
      <div className="live-progress-container">
        <p className="text-sm font-semibold mb-2 opacity-90">
          {activeItem ? `Time Remaining in ${activeItem.area}: ${timeRemaining}` : "Transition Time"}
        </p>
        <div className="live-progress-bar">
          <div 
            className="live-progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="mt-5 flex justify-between items-center">
        <button 
          onClick={onRequestNotification}
          className="notification-button flex items-center"
          disabled={notificationPermission === "granted" || notificationPermission === "denied"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
          </svg>
          <span>
            {notificationPermission === "granted" ? "Notifications On" : 
             notificationPermission === "denied" ? "Notifications Blocked" : 
             "Allow Notifications"}
          </span>
        </button>
        <p className="text-xs opacity-80">
          {notificationPermission === "default" && "Allow notifications for reminders"}
        </p>
      </div>
    </div>
  );
}
