(() => {
  const nav = document.querySelector('.bottom-nav');
  const player = document.querySelector('.player-bar');
  if (!nav) return;

  let lastY = window.scrollY;
  let ticking = false;

  nav.style.transition = 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s ease';
  if (player) player.style.transition = 'bottom 1.2s cubic-bezier(0.22, 1, 0.36, 1)';

  const update = () => {
    const y = window.scrollY;
    const delta = y - lastY;

    if (y <= 20 || delta < -4) {
      nav.classList.remove('nav-hidden');
      if (player) player.classList.remove('player-docked');
    } else if (delta > 4) {
      nav.classList.add('nav-hidden');
      if (player) player.classList.add('player-docked');
    }

    lastY = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
})();
