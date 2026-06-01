/* ============================================================
   RD Medcare – Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── DOM refs – declared first to avoid TDZ in closures ── */
  const navbar       = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTop');
  const hamburger    = document.getElementById('hamburger');
  const mobileMenu   = document.getElementById('mobileMenu');

  /* ── Navbar scroll effect ── */
  const onScroll = () => {
    navbar       && navbar.classList.toggle('scrolled', window.scrollY > 60);
    scrollTopBtn && scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Active nav link ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active',
      a.getAttribute('href') === currentPage ||
      a.getAttribute('href') === './' + currentPage
    );
  });

  /* ── Mobile menu ── */
  hamburger && hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu && mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  mobileMenu && mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger && hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── Intersection Observer (fade-up) ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Counter animation ── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el     = e.target;
        const target = +el.getAttribute('data-count');
        const suffix = el.getAttribute('data-suffix') || '';
        const step   = target / (1800 / 16);
        let current  = 0;
        const timer  = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = (target >= 1000
            ? Math.round(current).toLocaleString()
            : Math.round(current)) + suffix;
          if (current >= target) clearInterval(timer);
        }, 16);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  /* ── Scroll to top ── */
  scrollTopBtn && scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ── Product filter (products page) ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');
  if (filterBtns.length && productCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-filter');
        productCards.forEach(card => {
          const match = cat === 'all' || card.getAttribute('data-category') === cat;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* ── Contact form ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      btn.disabled = true;
      btn.textContent = '...';
      setTimeout(() => {
        btn.disabled = false;
        btn.setAttribute('data-i18n', 'contact_form_submit');
        if (typeof applyTranslations === 'function') applyTranslations();
        showToast(currentLang === 'th'
          ? 'ส่งข้อความสำเร็จ! เราจะติดต่อกลับเร็วๆ นี้'
          : 'Message sent! We\'ll get back to you soon.');
        contactForm.reset();
      }, 1200);
    });
  }

  /* ── Toast notification ── */
  window.showToast = function(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 3500);
  };

  /* ── Logo track duplication (infinite scroll) ── */
  const logoTrack = document.querySelector('.logo-track');
  if (logoTrack) {
    logoTrack.innerHTML += logoTrack.innerHTML;
  }

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

});
