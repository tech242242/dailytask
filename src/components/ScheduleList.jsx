import React, { useEffect } from "react";
import schedule from "../data/schedule";

export default function ScheduleList() {
  useEffect(() => {
    import("lucide").then(({ createIcons }) => createIcons());
  }, []);

  return (
    <div className="space-y-5">
      {schedule.map((item, index) => (
        <div key={index} className="schedule-card ios-card p-5 fade-in">
          <div className="flex items-start">
            <div className="task-icon mr-4">{item.icon}</div>
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
