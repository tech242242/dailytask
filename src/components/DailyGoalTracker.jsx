import React, { useState, useEffect } from "react";
import { Flame, Target } from "lucide-react";

export default function DailyGoalTracker() {
  const [goal, setGoal] = useState(() => {
    return parseInt(localStorage.getItem("dailyGoal")) || 3;
  });
  const [completed, setCompleted] = useState(() => {
    return parseInt(localStorage.getItem("tasksDoneToday")) || 0;
  });
  const [streak, setStreak] = useState(() => {
    return parseInt(localStorage.getItem("streakDays")) || 0;
  });
  const [lastDate, setLastDate] = useState(() => {
    return localStorage.getItem("lastCompletionDate") || "";
  });

  // Reset or update streak each day
  useEffect(() => {
    const today = new Date().toDateString();
    if (lastDate && lastDate !== today && completed >= goal) {
      setStreak((prev) => prev + 1);
      setCompleted(0);
    } else if (lastDate && lastDate !== today) {
      // missed the day
      setStreak(0);
      setCompleted(0);
    }
    setLastDate(today);
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("dailyGoal", goal);
    localStorage.setItem("tasksDoneToday", completed);
    localStorage.setItem("streakDays", streak);
    localStorage.setItem("lastCompletionDate", lastDate);
  }, [goal, completed, streak, lastDate]);

  const addProgress = () => {
    if (completed < goal) {
      setCompleted(completed + 1);
      setLastDate(new Date().toDateString());
    }
  };

  return (
    <div className="p-5 rounded-2xl border border-white/20 backdrop-blur-lg bg-white/10 shadow-lg glass-move text-white relative overflow-hidden">
      <h2 className="text-lg font-semibold flex items-center gap-2 mb-2">
        <Target className="text-cyan-400" /> Daily Goal Tracker
      </h2>

      <div className="flex justify-between items-center mb-3">
        <div>
          <p className="text-sm opacity-80">Goal: {goal} tasks</p>
          <p className="text-sm opacity-80">Completed: {completed}</p>
        </div>
        <button
          onClick={addProgress}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1.5 rounded-lg text-sm transition-all"
        >
          + Progress
        </button>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-1 text-orange-400">
          <Flame size={18} />
          <span className="font-semibold">{streak} Day Streak</span>
        </div>
        <input
          type="number"
          min="1"
          max="20"
          value={goal}
          onChange={(e) => setGoal(parseInt(e.target.value) || 1)}
          className="bg-white/10 border border-white/20 rounded-md px-2 py-1 w-16 text-center text-white text-sm focus:outline-none"
        />
      </div>

      {/* internal CSS for glow + animation */}
      <style>{`
        .glass-move {
          transition: all 0.3s ease;
        }
        .glass-move:hover {
          background-color: rgba(255,255,255,0.15);
          box-shadow: 0 0 25px rgba(0,200,255,0.3);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
