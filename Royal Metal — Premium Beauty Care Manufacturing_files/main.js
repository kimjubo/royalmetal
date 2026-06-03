/* ============================================================
   Royal Metal — main.js
   ============================================================ */

'use strict';

const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── Elements ─────────────────────────────────────────────────
const topBar        = qs('#top-bar');
const scrollProgress= qs('#scroll-progress');
const fabTop        = qs('#fab-top');
const hamburger     = qs('#hamburger');
const drawer        = qs('#drawer');
const drawerOverlay = qs('#drawer-overlay');
const drawerClose   = qs('#drawer-close');

// ── Hero entrance animation (triggers on page load) ───────────
// Add .loaded to body → CSS transitions play on .hero-animate elements
function triggerHeroAnimation() {
  document.body.classList.add('loaded');
}
// Trigger immediately on DOM ready (or after a small delay for effect)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => requestAnimationFrame(triggerHeroAnimation));
  });
} else {
  requestAnimationFrame(() => requestAnimationFrame(triggerHeroAnimation));
}

// ── Scroll-based effects ──────────────────────────────────────
function onScroll() {
  const scrollY   = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress  = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

  if (scrollProgress) scrollProgress.style.width = `${progress}%`;
  if (topBar) topBar.classList.toggle('scrolled', scrollY > 20);
  if (fabTop) fabTop.classList.toggle('visible', scrollY > 400);

  updateActiveNav();
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Active nav highlight ──────────────────────────────────────
const sections = qsa('section[id]');
const navLinks  = qsa('.nav-link[data-section]');

function updateActiveNav() {
  const scrollMid = window.scrollY + window.innerHeight * 0.4;
  let current = '';
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollMid) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}

// ── Smooth anchor scroll ──────────────────────────────────────
qsa('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = qs(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    closeDrawer();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Product card click-through ────────────────────────────────
qsa('.product-card[data-href]').forEach(card => {
  card.addEventListener('click', e => {
    if (!e.target.closest('a')) {
      window.open(card.dataset.href, '_blank', 'noopener');
    }
  });
});

// ── FAB back to top ───────────────────────────────────────────
fabTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Mobile Drawer ─────────────────────────────────────────────
function openDrawer() {
  drawer?.classList.add('open');
  drawerOverlay?.classList.add('open');
  drawer?.removeAttribute('aria-hidden');
  hamburger?.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawer?.classList.remove('open');
  drawerOverlay?.classList.remove('open');
  drawer?.setAttribute('aria-hidden', 'true');
  hamburger?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
hamburger?.addEventListener('click', openDrawer);
drawerClose?.addEventListener('click', closeDrawer);
drawerOverlay?.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

// ── Reveal on Scroll (IntersectionObserver) ───────────────────
// Use very low threshold + no negative rootMargin so elements reveal reliably
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.05,        // trigger as soon as 5% is visible
    rootMargin: '0px 0px 0px 0px'
  }
);

qsa('.reveal').forEach(el => revealObserver.observe(el));

// Safety fallback: force-reveal all remaining elements after 1.5s
// (covers edge cases where observer doesn't fire)
setTimeout(() => {
  qsa('.reveal:not(.revealed)').forEach(el => el.classList.add('revealed'));
}, 1500);

// ── Counter Animation ─────────────────────────────────────────
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const fps      = 60;
  const steps    = Math.round(duration / (1000 / fps));
  let   step     = 0;

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const tick = () => {
    step++;
    const progress = easeOut(Math.min(step / steps, 1));
    el.textContent = Math.round(progress * target).toLocaleString();
    if (step < steps) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

qsa('.stat__num[data-target]').forEach(el => counterObserver.observe(el));
