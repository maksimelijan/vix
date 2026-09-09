(() => {
  const nav = document.querySelector('.bottom-nav');
  if (!nav) return;

  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    const goingDown = y > lastY;
    const goingUp = y < lastY;

    if (goingDown && y > 60) nav.classList.add('nav-hidden');
    if (goingUp || y <= 60) nav.classList.remove('nav-hidden');

    lastY = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
