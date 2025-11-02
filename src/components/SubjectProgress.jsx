import React, { useState } from "react";

export default function SubjectProgress() {
  const subjects = {
    Math: { total: 60, color: "#007aff" },
    Physics: { total: 40, color: "#34c759" },
    Computer: { total: 20, color: "#ff3b30" },
    English: { total: 30, color: "#ffcc00" },
  };

  const [progress, setProgress] = useState({
    Math: 0,
    Physics: 0,
    Computer: 0,
    English: 0,
  });

  const increase = (subject) => {
    setProgress((prev) => ({
      ...prev,
      [subject]: Math.min(prev[subject] + 10, subjects[subject].total),
    }));
  };

  const reset = () =>
    setProgress({
      Math: 0,
      Physics: 0,
      Computer: 0,
      English: 0,
    });

  return (
    <div className="subject-progress-card fade-in">
      <h2 className="header">
        <i data-lucide="line-chart" className="icon"></i>
        Subject Progress Timeline
      </h2>

      <div className="subject-list">
        {Object.keys(subjects).map((subject) => {
          const total = subjects[subject].total;
          const completed = progress[subject];
          const percent = Math.min((completed / total) * 100, 100);
          const color = subjects[subject].color;

          return (
            <div key={subject} className="subject-item">
              <div className="subject-header">
                <span className="subject-name">{subject}</span>
                <span className="subject-days">
                  {completed}/{total} days
                </span>
              </div>

              <div className="timeline-bar">
                <div
                  className="timeline-fill"
                  style={{
                    width: `${percent}%`,
                    background: `linear-gradient(90deg, ${color}, ${color}90)`,
                  }}
                ></div>
              </div>

              <div className="timeline-labels">
                <span>Start</span>
                <span>Complete</span>
              </div>

              <button className="add-btn" onClick={() => increase(subject)}>
                + Add Progress
              </button>
            </div>
          );
        })}
      </div>

      <button onClick={reset} className="reset-btn">
        Reset All
      </button>

      <style>{`
        .subject-progress-card {
          background: #ffffff;
          border-radius: 18px;
          padding: 1.5rem;
          margin-top: 2.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .subject-progress-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 122, 255, 0.1);
        }

        .header {
          display: flex;
          align-items: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }

        .icon {
          width: 1.4rem;
          height: 1.4rem;
          color: #007aff;
          margin-right: 0.5rem;
        }

        .subject-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .subject-item {
          background: rgba(0, 0, 0, 0.02);
          border-radius: 14px;
          padding: 1rem;
          transition: all 0.3s ease;
        }

        .subject-item:hover {
          background: rgba(0, 122, 255, 0.05);
        }

        .subject-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .subject-name {
          font-weight: 600;
          color: #0f172a;
        }

        .subject-days {
          font-size: 0.85rem;
          color: #64748b;
        }

        .timeline-bar {
          position: relative;
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #e5e7eb 0%, #d1d5db 100%);
          overflow: hidden;
        }

        .timeline-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.6s ease;
          box-shadow: 0 0 8px rgba(0, 122, 255, 0.3);
        }

        .timeline-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #94a3b8;
          margin-top: 0.4rem;
        }

        .add-btn {
          margin-top: 0.7rem;
          background: linear-gradient(90deg, #007aff, #00c6ff);
          color: white;
          border: none;
          padding: 0.35rem 0.9rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .add-btn:hover {
          opacity: 0.9;
          transform: scale(1.05);
        }

        .reset-btn {
          margin-top: 1.8rem;
          display: block;
          width: 100%;
          text-align: center;
          background: #e2e8f0;
          color: #1e293b;
          font-weight: 600;
          padding: 0.6rem;
          border-radius: 12px;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .reset-btn:hover {
          background: #007aff;
          color: white;
        }

        .fade-in {
          animation: fadeIn 0.6s ease forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
