/* main.js — minimal interactions: mobile nav toggle, year fill, smooth scroll, simple reveal */
(function(){
  // Mobile nav toggles (works for multiple pages with different IDs)
  function setupToggle(btnId, listId){
    const btn = document.getElementById(btnId);
    const list = document.getElementById(listId);
    if(!btn || !list) return;
    btn.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      list.classList.toggle('show');
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

  // Simple reveal on scroll
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
})();
