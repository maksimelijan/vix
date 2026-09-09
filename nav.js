(() => {
  const nav = document.querySelector('.bottom-nav');
  if (!nav) return;

  const style = document.createElement('style');
  style.textContent = `
    .bottom-nav {
      position: fixed !important;
      left: 50% !important;
      bottom: 17px !important;
      z-index: 9999 !important;
      width: min(420px, 92%) !important;
      display: flex !important;
      justify-content: space-around !important;
      align-items: center !important;
      padding: 9px !important;
      border: 1px solid rgba(255,255,255,.08) !important;
      background: rgba(17,11,24,.88) !important;
      backdrop-filter: blur(22px) !important;
      -webkit-backdrop-filter: blur(22px) !important;
      border-radius: 22px !important;
      box-shadow: 0 15px 50px rgba(0,0,0,.5) !important;
      transform: translate3d(-50%, 0, 0) !important;
      opacity: 1 !important;
      transition: transform .8s cubic-bezier(.16,1,.3,1), opacity .75s cubic-bezier(.16,1,.3,1) !important;
      will-change: transform, opacity !important;
    }
    .bottom-nav.nav-hidden {
      transform: translate3d(-50%, calc(100% + 35px), 0) !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
    .bottom-nav .nav-item {
      display: flex !important;
      flex: 1 !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 3px !important;
      padding: 7px 5px !important;
      color: #9b94a7 !important;
      text-decoration: none !important;
      border-radius: 15px !important;
      transition: color .25s ease, background .25s ease !important;
    }
    .bottom-nav .nav-item span { font-size: 21px !important; line-height: 1 !important; }
    .bottom-nav .nav-item small { font-size: 10px !important; line-height: 1.2 !important; }
    .bottom-nav .nav-item.active { color: #fff !important; background: rgba(139,53,255,.22) !important; }
  `;
  document.head.appendChild(style);

  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    const delta = y - lastY;
    if (y <= 20) nav.classList.remove('nav-hidden');
    else if (delta > 3) nav.classList.add('nav-hidden');
    else if (delta < -3) nav.classList.remove('nav-hidden');
    lastY = y;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
