<!-- Current Activity Timeline Card -->
<div class="current-reminder p-6 mb-10 bounce-in">
  <div class="flex justify-between items-start mb-3">
    <div>
      <p class="text-sm opacity-80" id="current-time-display">Loading...</p>
      <h2 class="text-2xl font-bold mb-2" id="current-activity-area">Loading Schedule...</h2>
      <p class="text-sm opacity-90" id="current-activity-note">Stay focused and keep moving forward!</p>
    </div>
    <div class="flex items-center">
      <div class="status-indicator active-indicator"></div>
      <span class="text-xs font-medium">LIVE</span>
    </div>
  </div>

  <!-- Time Timeline Graph -->
  <div class="timeline-container mt-6 relative">
    <div class="timeline-bar"></div>
    <div id="timeline-current" class="timeline-current"></div>
    <div id="timeline-start-label" class="timeline-label left-0">5:00 AM</div>
    <div id="timeline-end-label" class="timeline-label right-0">10:30 PM</div>
  </div>

  <div class="mt-4 text-center text-sm font-medium opacity-90" id="timeline-status">
    Tracking your active study period...
  </div>

  <div class="mt-5 flex justify-between items-center">
    <button id="notification-button" class="notification-button flex items-center">
      <i data-lucide="bell" class="w-5 h-5 mr-2"></i>
      <span>Allow Notifications</span>
    </button>
    <p id="notification-status" class="text-xs opacity-80"></p>
  </div>
</div>
