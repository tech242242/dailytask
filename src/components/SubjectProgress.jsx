import React, { useState } from "react";

export default function SubjectProgress() {
  const [progress, setProgress] = useState({
    Math: 60,
    Physics: 40,
    Computer: 20,
    English: 30,
  });

  const totalDays = {
    Math: 60,
    Physics: 40,
    Computer: 20,
    English: 30,
  };

  const increase = (subject) => {
    setProgress((prev) => ({
      ...prev,
      [subject]: Math.min(prev[subject] + 10, totalDays[subject]),
    }));
  };

  const reset = () =>
    setProgress({ Math: 0, Physics: 0, Computer: 0, English: 0 });

  return (
    <div className="subject-card fade-in">
      <h2 className="header">
        <i data-lucide="line-chart" className="icon"></i>
        Subject Progress Timeline
      </h2>

      <div className="timeline-container">
        {Object.keys(progress).map((subject) => {
          const percent = (progress[subject] / totalDays[subject]) * 100;
          return (
            <div key={subject} className="subject-row">
              <div className="subject-header">
                <span className="subject-name">{subject}</span>
                <span className="subject-days">
                  {progress[subject]}/{totalDays[subject]} days
                </span>
              </div>

              <div className="timeline">
                <div
                  className="timeline-fill"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              <div className="timeline-marks">
                <span className="mark start">Start</span>
                <span className="mark end">Complete</span>
              </div>

              <button
                className="add-btn"
                onClick={() => increase(subject)}
              >
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
        .subject-card {
          background: white;
          border-radius: 18px;
          padding: 1.5rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .subject-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0,122,255,0.1);
        }

        .header {
          display: flex;
          align-items: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
        }
        .icon {
          width: 1.4rem;
          height: 1.4rem;
          color: #007aff;
          margin-right: 0.5rem;
        }

        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .subject-row {
          position: relative;
          background: rgba(0,0,0,0.02);
          padding: 1rem;
          border-radius: 14px;
          transition: all 0.3s ease;
        }
        .subject-row:hover {
          background: rgba(0,122,255,0.05);
        }

        .subject-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.6rem;
        }
        .subject-name {
          font-weight: 600;
          color: #0f172a;
        }
        .subject-days {
          font-size: 0.8rem;
          color: #64748b;
        }

        /* Timeline styling */
        .timeline {
          position: relative;
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #e2e8f0 0%, #cbd5e1 100%);
          overflow: hidden;
        }
        .timeline-fill {
          height: 100%;
          border-radius: 9999px;
          background: linear-gradient(90deg, #007aff, #00c6ff);
          transition: width 0.5s ease;
          box-shadow: 0 0 8px rgba(0,122,255,0.4);
        }

        /* Timeline labels */
        .timeline-marks {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #94a3b8;
          margin-top: 0.4rem;
        }
        .mark {
          font-weight: 500;
        }

        /* Buttons */
        .add-btn {
          margin-top: 0.7rem;
          background: linear-gradient(90deg, #007aff, #00c6ff);
          color: white;
          border: none;
          padding: 0.3rem 0.9rem;
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
          margin-top: 1.5rem;
          display: block;
          width: 100%;
          text-align: center;
          background: #e2e8f0;
          color: #1e293b;
          font-weight: 600;
          padding: 0.6rem;
          border-radius: 12px;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .reset-btn:hover {
          background: #007aff;
          color: white;
        }

        /* Animation */
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
