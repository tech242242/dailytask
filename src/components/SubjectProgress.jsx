import { useState } from "react";
import { SUBJECT_CONFIG } from "../data/scheduleData";

export default function SubjectProgress() {
  const [subjects, setSubjects] = useState(SUBJECT_CONFIG);

  const addProgress = () => {
    const subjectKeys = Object.keys(subjects);
    const randomSubject = subjectKeys[Math.floor(Math.random() * subjectKeys.length)];
    
    setSubjects(prev => {
      const updated = { ...prev };
      if (updated[randomSubject].completed < updated[randomSubject].totalUnits) {
        updated[randomSubject].completed++;
      }
      return updated;
    });
  };

  const resetProgress = () => {
    setSubjects(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(subject => {
        updated[subject].completed = 0;
      });
      return updated;
    });
  };

  const getColorClass = (color) => {
    const colorMap = {
      'bg-blue-500': 'text-blue-500',
      'bg-green-500': 'text-green-500', 
      'bg-red-500': 'text-red-500',
      'bg-yellow-500': 'text-yellow-500',
      'bg-purple-500': 'text-purple-500',
      'bg-indigo-500': 'text-indigo-500',
      'bg-rose-500': 'text-rose-500'
    };
    return colorMap[color] || 'text-gray-500';
  };

  const getBorderColor = (color) => {
    const colorMap = {
      'bg-blue-500': '#3b82f6',
      'bg-green-500': '#10b981',
      'bg-red-500': '#ef4444',
      'bg-yellow-500': '#f59e0b',
      'bg-purple-500': '#8b5cf6',
      'bg-indigo-500': '#6366f1',
      'bg-rose-500': '#f43f5e'
    };
    return colorMap[color] || '#6b7280';
  };

  return (
    <div className="ios-card p-6 mt-10 discipline-section fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-3 text-emerald-500">
          <path d="m16 18 6-6-6-6"/>
          <path d="M8 6v12"/>
        </svg>
        Subject Progress
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(subjects).map(([subject, config]) => {
          const percentage = Math.round((config.completed / config.totalUnits) * 100);
          const colorClass = getColorClass(config.color);
          
          return (
            <div 
              key={subject}
              className="stat-item subject-card p-4 rounded-xl border-l-4"
              style={{ borderLeftColor: getBorderColor(config.color) }}
              onClick={() => {
                if (config.completed < config.totalUnits) {
                  setSubjects(prev => ({
                    ...prev,
                    [subject]: { ...prev[subject], completed: prev[subject].completed + 1 }
                  }));
                }
              }}
            >
              <div className="flex items-center mb-3">
                <div className="stat-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                </div>
                <span className="text-base font-semibold">{subject}</span>
                <span className={`ml-auto text-lg font-bold ${colorClass}`}>
                  {percentage}%
                </span>
              </div>
              <div className="progress-bar mb-2">
                <div 
                  className="progress-bar-inner" 
                  style={{ 
                    width: `${percentage}%`,
                    backgroundColor: getBorderColor(config.color)
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{config.completed}</span>
                <span>/</span>
                <span>{config.totalUnits}</span>
                <span>lessons</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 flex justify-center space-x-4">
        <button 
          onClick={addProgress}
          className="syllabus-btn bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-5 py-2 rounded-full font-semibold transition duration-150 shadow-md flex items-center"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
            <path d="M12 5v14"/>
            <path d="M5 12h14"/>
          </svg>
          Add Progress
        </button>
        <button 
          onClick={resetProgress}
          className="syllabus-btn bg-gray-500 hover:bg-gray-600 text-white text-sm px-5 py-2 rounded-full font-semibold transition duration-150 shadow-md flex items-center"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
          </svg>
          Reset
        </button>
      </div>
    </div>
  );
}
