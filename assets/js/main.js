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

  // Blog: sort posts newest-first using data-published (ISO date)
  const postsContainer = document.getElementById('posts');
  if(postsContainer){
    const posts = Array.from(postsContainer.querySelectorAll('.post'));
    posts.sort((a,b) => new Date(b.dataset.published) - new Date(a.dataset.published));
    posts.forEach(p => postsContainer.appendChild(p));
  }

  // Contact form: show success message if redirected with ?sent=1
  const params = new URLSearchParams(window.location.search);
  const formAlert = document.getElementById('form-alert');
  if(formAlert){
    if(params.get('sent') === '1'){
      formAlert.textContent = 'Thanks! Your message has been sent successfully.';
      formAlert.classList.add('alert-success');
      formAlert.hidden = false;
      try { history.replaceState({}, '', window.location.pathname); } catch(_){}
    }
  }
  // Copy-to-clipboard for elements with data-copy="#selector" (with robust fallback)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-copy]');
    if(!btn) return;
    const sel = btn.getAttribute('data-copy');
    const target = document.querySelector(sel);
    if(!target) return;
    const text = (target.textContent || target.innerText || '').trim();

    const showFeedback = () => {
      const prev = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = prev; }, 1500);
    };

    const fallbackCopy = () => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch(_) { ok = false; }
      document.body.removeChild(ta);
      if(ok) showFeedback();
      return ok;
    };

    if(navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText(text)
        .then(() => { showFeedback(); })
        .catch(() => { fallbackCopy(); });
    } else {
      fallbackCopy();
    }
  });
})();
