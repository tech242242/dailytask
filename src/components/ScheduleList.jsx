import React from "react";
import schedule from "../data/schedule";
import {
  BookOpen,
  Coffee,
  Sun,
  Atom,
  Laptop,
  Feather,
  Moon,
  Home,
  Sunrise,
  Sunset,
  Utensils,
  Dumbbell,
  Sandwich,
  Bed,
} from "lucide-react";

export default function ScheduleList() {
  // Map each area to an icon
  const iconMap = {
    Math: <BookOpen className="w-5 h-5 text-blue-500" />,
    "Free / Mind Time (Morning)": <Coffee className="w-5 h-5 text-teal-500" />,
    College: <Sun className="w-5 h-5 text-purple-500" />,
    Physics: <Atom className="w-5 h-5 text-green-500" />,
    Computer: <Laptop className="w-5 h-5 text-red-500" />,
    English: <Feather className="w-5 h-5 text-yellow-500" />,
    Revision: <Moon className="w-5 h-5 text-indigo-500" />,
    "Free / Family Time": <Home className="w-5 h-5 text-teal-500" />,
    "Free / Exercise Time": <Dumbbell className="w-5 h-5 text-teal-500" />,
    "Free / Lunch Break": <Sandwich className="w-5 h-5 text-teal-500" />,
    "Dinner / Relax": <Utensils className="w-5 h-5 text-teal-500" />,
    "💤 Rest & Sleep": <Bed className="w-5 h-5 text-gray-500" />,
  };

  return (
    <div className="space-y-5">
      {schedule.map((item, index) => (
        <div key={index} className="schedule-card ios-card p-5 fade-in">
          <div className="flex items-start">
            <div className="task-icon mr-4 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md rounded-xl w-12 h-12">
              {iconMap[item.area] || <BookOpen className="w-5 h-5" />}
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
