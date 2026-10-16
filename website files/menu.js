(() => {
  const menuToggle = document.getElementById('navToggle');
  const menuLinks = document.getElementById('navLinks');
  const collectionMenu = document.querySelector('.collection-menu');
  const collectionTrigger = document.querySelector('.collection-trigger');

  if (menuToggle && menuLinks) {
    const closeMenu = () => {
      menuLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = 'menu';
      collectionMenu?.classList.remove('open');
      collectionTrigger?.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', menuLinks.classList.contains('open'));
    });

    document.addEventListener('click', event => {
      if (
        !menuLinks.classList.contains('open') ||
        menuLinks.contains(event.target) ||
        menuToggle.contains(event.target)
      ) return;

      closeMenu();
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape' || !menuLinks.classList.contains('open')) return;

      closeMenu();
      menuToggle.focus();
    });
  }
})();