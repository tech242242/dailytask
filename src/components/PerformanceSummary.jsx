export default function PerformanceSummary() {
  const stats = [
    { icon: "brain", label: "Focus", value: 85, color: "text-indigo-500" },
    { icon: "zap", label: "Hard Work", value: 78, color: "text-yellow-500" },
    { icon: "target", label: "Discipline", value: 92, color: "text-green-500" },
    { icon: "repeat", label: "Consistency", value: 88, color: "text-blue-500" }
  ];

  const getIcon = (iconName) => {
    const icons = {
      brain: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/>
        </svg>
      ),
      zap: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      target: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      ),
      repeat: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m17 2 4 4-4 4"/>
          <path d="M3 11v-1a4 4 0 0 1 4-4h14"/>
          <path d="m7 22-4-4 4-4"/>
          <path d="M21 13v1a4 4 0 0 1-4 4H3"/>
        </svg>
      )
    };
    return icons[iconName];
  };

  return (
    <div className="ios-card p-6 mt-10 fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-5 flex items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-3 text-yellow-500">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
        Performance Summary
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="flex items-center mb-2">
              <div className="stat-icon">
                {getIcon(stat.icon)}
              </div>
              <span className="text-sm font-medium">{stat.label}</span>
              <span className={`ml-auto text-sm font-bold ${stat.color}`}>{stat.value}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-bar-inner" 
                style={{ width: `${stat.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
