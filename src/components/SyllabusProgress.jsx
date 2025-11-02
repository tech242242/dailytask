import React, { useEffect, useState } from "react";

export default function SyllabusProgress() {
  const [progress, setProgress] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const start = new Date(2025, 10, 2);
    const end = new Date(2026, 2, 2);
    const total = end - start;
    const now = new Date() - start;
    const percent = Math.min(100, (now / total) * 100);
    const days = Math.ceil((end - new Date()) / (1000 * 60 * 60 * 24));
    setProgress(percent);
    setDaysLeft(days);
  }, []);

  const circumference = 326.7;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="syllabus-card fade-in">
      <h2 className="title">
        <i data-lucide="calendar-check" className="icon"></i>
        4-Month Syllabus Progress
      </h2>

      <div className="content">
        {/* Circular Progress */}
        <div className="progress-wrapper">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle className="progress-bg" cx="60" cy="60" r="52"></circle>
            <circle
              className="progress-fill"
              cx="60"
              cy="60"
              r="52"
              strokeDasharray="326.7"
              strokeDashoffset={offset}
            ></circle>
          </svg>

          <div className="progress-text">
            <span className="percent">{Math.round(progress)}%</span>
            <span className="days">
              {daysLeft > 0 ? `${daysLeft} days left` : "Completed!"}
            </span>
          </div>
        </div>

        {/* Text Info */}
        <div className="details">
          <p className="subtitle">You're making great progress!</p>
          <div className="bars">
            <div className="bar-item">
              <span>Math</span>
              <div className="bar">
                <div className="fill blue" style={{ width: "40%" }}></div>
              </div>
              <span className="percent-text">40%</span>
            </div>
            <div className="bar-item">
              <span>Physics</span>
              <div className="bar">
                <div className="fill green" style={{ width: "60%" }}></div>
              </div>
              <span className="percent-text">60%</span>
            </div>
            <div className="bar-item">
              <span>Computer</span>
              <div className="bar">
                <div className="fill purple" style={{ width: "30%" }}></div>
              </div>
              <span className="percent-text">30%</span>
            </div>
          </div>
        </div>
      </div>

      <p className="footer-text">Keep going — you're doing amazing! 💪</p>

      {/* Component-specific CSS */}
      <style>{`
        .syllabus-card {
          background: white;
          border-radius: 18px;
          padding: 1.5rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }
        .syllabus-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0,122,255,0.15);
        }

        .title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .icon {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.5rem;
          color: #007aff;
        }

        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        /* Circular progress */
        .progress-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
        }
        svg {
          transform: rotate(-90deg);
        }
        .progress-bg {
          fill: none;
          stroke: #e5e7eb;
          stroke-width: 8;
        }
        .progress-fill {
          fill: none;
          stroke-width: 8;
          stroke-linecap: round;
          stroke: url(#gradient);
          stroke: linear-gradient(90deg, #007aff, #5ac8fa);
          stroke: #007aff;
          transition: stroke-dashoffset 0.6s ease;
          animation: pulseGlow 2s infinite alternate;
        }
        @keyframes pulseGlow {
          from { filter: drop-shadow(0 0 4px rgba(0,122,255,0.4)); }
          to { filter: drop-shadow(0 0 10px rgba(0,122,255,0.8)); }
        }

        .progress-text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .percent {
          font-size: 1.6rem;
          font-weight: 700;
          color: #007aff;
        }
        .days {
          font-size: 0.8rem;
          color: #64748b;
          margin-top: 0.2rem;
        }

        /* Subject bars */
        .details {
          flex: 1;
          text-align: left;
          min-width: 180px;
        }
        .subtitle {
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        .bars {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .bar-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .bar-item span:first-child {
          width: 70px;
          font-size: 0.85rem;
          color: #1e293b;
          font-weight: 500;
        }
        .bar {
          flex: 1;
          height: 8px;
          background: #e2e8f0;
          border-radius: 6px;
          overflow: hidden;
          position: relative;
        }
        .fill {
          height: 100%;
          border-radius: 6px;
          transition: width 0.5s ease;
        }
        .fill.blue { background: linear-gradient(90deg,#007aff,#5ac8fa); }
        .fill.green { background: linear-gradient(90deg,#34c759,#5ac8fa); }
        .fill.purple { background: linear-gradient(90deg,#7c3aed,#a78bfa); }
        .percent-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
          width: 35px;
          text-align: right;
        }

        .footer-text {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }

        .fade-in {
          animation: fadeIn 0.6s ease forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
