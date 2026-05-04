(() => {
  const header = document.querySelector('.site-header');
  const revealItems = document.querySelectorAll('[data-reveal]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));

  const onScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 10);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
