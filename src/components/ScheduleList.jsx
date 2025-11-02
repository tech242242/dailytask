import { useState, useEffect } from "react";
import { schedule } from "../data/scheduleData";
import { timeToMinutes } from "../utils/timeHelpers";

export default function ScheduleList({ currentTime }) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  useEffect(() => {
    const currentMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();
    
    let currentIndex = null;
    schedule.forEach((item, index) => {
      let isCurrent = false;
      if (item.isOvernight) {
        if (currentMinutes >= item.startMinutes || currentMinutes < item.endMinutes) isCurrent = true;
      } else {
        if (currentMinutes >= item.startMinutes && currentMinutes < item.endMinutes) isCurrent = true;
      }
      if (isCurrent) {
        currentIndex = index;
      }
    });

    setCurrentTaskIndex(currentIndex);
  }, [currentTime]);

  return (
    <div className="space-y-5">
      {schedule.map((item, index) => (
        <div 
          key={index}
          className={`schedule-card ios-card p-5 ${currentTaskIndex === index ? 'current-task' : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start">
            <div className="task-icon mr-4">
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{item.area}</h3>
                <span className="time-badge">{item.time}</span>
              </div>
              <p className="text-gray-600">{item.note}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
