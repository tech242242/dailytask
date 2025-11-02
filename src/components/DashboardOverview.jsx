import React, { useEffect, useState } from "react";
import schedule from "../data/schedule";

export default function DashboardOverview() {
  const [time, setTime] = useState(new Date());
  const [currentTask, setCurrentTask] = useState({});
  const [progress, setProgress] = useState(0);
  const [nextTaskTime, setNextTaskTime] = useState("");

  // Helper: parse "5:00 AM – 6:30 AM" into Date objects
  const parseTimeRange = (range) => {
    const [startStr, endStr] = range.split("–").map((s) => s.trim());
    const today = new Date();
    
    const parse = (str) => {
      let [time, modifier] = str.split(" ");
      let [hours, minutes] = time.split(":").map(Number);
      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;
      return new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);
    };
    
    return [parse(startStr), parse(endStr)];
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);

      let foundTask = null;
      let nextTaskCountdown = "";

      for (let i = 0; i < schedule.length; i++) {
        const [start, end] = parseTimeRange(schedule[i].time);
        if (now >= start && now <= end) {
          foundTask = schedule[i];
          const totalDuration = end - start;
          const elapsed = now - start;
          setProgress(Math.floor((elapsed / totalDuration) * 100));
          break;
        } else if (now < start) {
          foundTask = schedule[i - 1] || schedule[0];
          const diff = start - now;
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          nextTaskCountdown = `${hours} hr ${minutes} min`;
          setProgress(foundTask ? 0 : 0);
          break;
        }
      }

      setCurrentTask(foundTask || schedule[schedule.length - 1]);
      setNextTaskTime(nextTaskCountdown);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dashboard-card fade-in">
      <div className="dashboard-header">
        <h2>📊 Daily Dashboard</h2>
        <p>
          {time.toLocaleDateString(undefined, {
            weekday: "long",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-item">
          <span className="label">Active Task</span>
          <span className="value">{currentTask.area} {currentTask.icon}</span>
        </div>

        <div className="dashboard-item">
          <span className="label">Overall Progress</span>
          <div className="progress-container">
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="progress-text">{progress}%</span>
          </div>
        </div>

        <div className="dashboard-item">
          <span className="label">Next Task Starts In</span>
          <span className="value glow-text">{nextTaskTime || "Now"}</span>
        </div>
      </div>

      <style>{`
        .dashboard-card {
          background: rgba(255, 255, 255, 0.85);
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          color: #000;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }
        .dashboard-card:hover {
          background: rgba(255, 255, 255, 0.95);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }
        .dashboard-header {
          text-align: center;
          margin-bottom: 1rem;
        }
        .dashboard-header h2 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0072ff;
        }
        .dashboard-header p {
          font-size: 0.9rem;
          color: rgba(0, 0, 0, 0.7);
        }
        .dashboard-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .dashboard-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.95rem;
        }
        .label {
          color: rgba(0, 0, 0, 0.7);
          font-weight: 500;
        }
        .value {
          font-weight: 600;
          color: #000;
        }
        .glow-text {
          color: #0072ff;
          text-shadow: 0 0 6px rgba(0, 114, 255, 0.3);
        }
        .progress-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex: 1;
        }
        .progress-track {
          flex: 1;
          height: 8px;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }
        .progress-fill {
          height: 8px;
          border-radius: 10px;
          background: linear-gradient(90deg,#00c6ff,#0072ff);
          transition: width 0.4s ease;
        }
        .progress-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #000;
        }
        .fade-in {
          animation: fadeIn 0.6s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
