import { useState, useEffect } from "react";
import { SYLLABUS_START_DATE, SYLLABUS_END_DATE } from "../data/scheduleData";
import { calculateProgress, getDaysRemaining } from "../utils/timeHelpers";

export default function SyllabusProgress({ currentTime }) {
  const [progress, setProgress] = useState(0);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const progressPercentage = calculateProgress(SYLLABUS_START_DATE, SYLLABUS_END_DATE, currentTime);
    const remainingDays = getDaysRemaining(SYLLABUS_END_DATE, currentTime);

    if (currentTime.getTime() < SYLLABUS_START_DATE.getTime()) {
      setMessage(`Syllabus starts in ${remainingDays} days`);
    } else if (currentTime.getTime() > SYLLABUS_END_DATE.getTime()) {
      setMessage("Congratulations! You've completed your syllabus!");
    } else {
      setMessage("Keep going! You're making great progress");
    }

    setProgress(progressPercentage);
    setDaysRemaining(remainingDays);
  }, [currentTime]);

  const circumference = 326.7;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="ios-card p-6 mb-8 text-center fade-in">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-3 text-indigo-600">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
        4-Month Syllabus Progress
      </h2>
      
      <div className="flex items-center justify-center mb-4">
        <div className="circular-progress mr-6">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle className="circular-bg" cx="60" cy="60" r="52"></circle>
            <circle 
              className="circular-fill" 
              cx="60" cy="60" r="52" 
              stroke="#007aff" 
              strokeDasharray="326.7" 
              strokeDashoffset={offset}
            ></circle>
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
            <span className="text-2xl font-bold text-gray-800">
              {Math.round(progress)}%
            </span>
            <span className="text-xs text-gray-500 mt-1">
              {progress === 100 ? 'Completed!' : `${daysRemaining} days left`}
            </span>
          </div>
        </div>
        
        <div className="text-left">
          <p className="text-sm text-gray-600 mb-2">120-Day Breakdown:</p>
          <div className="space-y-1">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm">60 Days - Long Questions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-sm">40 Days - Short Questions</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-sm">20 Days - MCQ Practice</span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mt-3 font-medium">{message}</p>
    </div>
  );
}
