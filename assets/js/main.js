/* main.js — minimal interactions: mobile nav toggle, year fill, smooth scroll, simple reveal */
(function(){
  // Mobile nav toggles (works for multiple pages with different IDs)
  function setupToggle(btnId, listId){
    const btn = document.getElementById(btnId);
    const list = document.getElementById(listId);
    if(!btn || !list) return;
    const closeMenu = () => {
      list.classList.remove('show');
      btn.setAttribute('aria-expanded', 'false');
    };
    const openMenu = () => {
      list.classList.add('show');
      btn.setAttribute('aria-expanded', 'true');
    };
    btn.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      if(expanded){
        closeMenu();
      } else {
        openMenu();
      }
    });
    // Close on Escape and outside click
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (e) => {
      const isClickInside = e.target === btn || btn.contains(e.target) || list.contains(e.target);
      if(!isClickInside) closeMenu();
    });
  }

  // try many header combos
  setupToggle('nav-toggle','nav-list');
  setupToggle('nav-toggle-2','nav-list-2');
  setupToggle('nav-toggle-3','nav-list-3');
  setupToggle('nav-toggle-4','nav-list-4');
  setupToggle('nav-toggle-5','nav-list-5');

  // Fill copyright years
  const years = ['year','year2','year3','year4','year5'];
  const y = new Date().getFullYear();
  years.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // Smooth scroll for internal links
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const href = a.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });

  // Simple reveal on scroll (respect reduced motion)
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced && 'IntersectionObserver' in window){
    const reveal = (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };
    const observer = new IntersectionObserver(reveal, {threshold:0.12});
    document.querySelectorAll('.card, .project-card, .post, .video-thumb').forEach(el => {
      el.classList.add('reveal-hidden');
      observer.observe(el);
    });
  }
})();
