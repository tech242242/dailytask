export function timeToMinutes(timeStr) {
  const [time, period] = timeStr.split(' ');
  if (!time || !period) return -1;
  let [hours, minutes] = time.split(':').map(Number);
  if (period.toLowerCase() === 'pm' && hours !== 12) hours += 12;
  if (period.toLowerCase() === 'am' && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

export function calculateProgress(startDate, endDate, currentDate) {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const current = currentDate.getTime();
  
  if (current < start) return 0;
  if (current > end) return 100;
  
  const totalDuration = end - start;
  const elapsedDuration = current - start;
  return Math.min(100, Math.max(0, (elapsedDuration / totalDuration) * 100));
}

export function getDaysRemaining(endDate, currentDate) {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.ceil((endDate.getTime() - currentDate.getTime()) / msPerDay);
}

export function formatTimeRemaining(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return (hours > 0 ? `${hours} hr ` : '') + `${mins} min`;
}