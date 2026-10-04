(() => {
  'use strict';
  const standalone = window.matchMedia('(display-mode: standalone)');
  function updateDisplayMode() {
    document.documentElement.classList.toggle('app-mode', standalone.matches || navigator.standalone === true);
  }
  updateDisplayMode();
  standalone.addEventListener('change', updateDisplayMode);
  const openedAt = new Date();
  let durationStartedAt = performance.now();
  const clock = document.getElementById('status-time');
  const checkin = document.getElementById('checkin-time');
  const duration = document.getElementById('duration');
  const zone = 'Europe/Berlin';
  const timeFormat = new Intl.DateTimeFormat('de-DE', { timeZone: zone, hour: '2-digit', minute: '2-digit' });
  const dateFormat = new Intl.DateTimeFormat('de-DE', { timeZone: zone, month: 'short', day: '2-digit' });
  const parts = dateFormat.formatToParts(openedAt);
  const month = parts.find(part => part.type === 'month').value;
  const day = parts.find(part => part.type === 'day').value;
  checkin.textContent = `${month} ${day}, ${timeFormat.format(openedAt)}`;
  checkin.dateTime = openedAt.toISOString();
  function update() {
    const now = new Date();
    clock.textContent = timeFormat.format(now);
    clock.dateTime = now.toISOString();
    const seconds = Math.max(0, Math.floor((performance.now() - durationStartedAt) / 1000));
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60) % 60;
    duration.textContent = `${hours} : ${String(minutes).padStart(2, '0')} : ${String(seconds % 60).padStart(2, '0')}`;
  }
  update();
  let timer = setInterval(update, 1000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) update(); });
  let toastTimer;
  function notify(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 3500);
  }
  document.getElementById('share').addEventListener('click', () => {
    durationStartedAt = performance.now();
    clearInterval(timer);
    update();
    timer = setInterval(update, 1000);
  });
  document.getElementById('close').addEventListener('click', () => {
    if (history.length > 1) history.back();
    else notify('Du kannst diese Ansicht über deinen Browser schließen.');
  });
})();
