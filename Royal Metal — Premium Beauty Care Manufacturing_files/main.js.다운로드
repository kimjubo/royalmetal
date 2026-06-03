/* ============================================================
   Royal Metal — main.js  (full rewrite)
   ============================================================ */

'use strict';

const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── Elements ─────────────────────────────────────────────────
const topBar         = qs('#top-bar');
const scrollProgress = qs('#scroll-progress');
const fabTop         = qs('#fab-top');
const hamburger      = qs('#hamburger');
const drawer         = qs('#drawer');
const drawerOverlay  = qs('#drawer-overlay');
const drawerClose    = qs('#drawer-close');

// ── Hero entrance animation ───────────────────────────────────
function triggerHeroAnimation() {
  document.body.classList.add('loaded');
  // also make hero bg settle
  const hero = qs('.hero');
  if (hero) hero.classList.add('loaded');
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => requestAnimationFrame(triggerHeroAnimation));
  });
} else {
  requestAnimationFrame(() => requestAnimationFrame(triggerHeroAnimation));
}

// ── Scroll reveal (IntersectionObserver) ─────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
);

qsa('.reveal').forEach(el => revealObserver.observe(el));

// Safety fallback: force-reveal after 2s if observer misses anything
setTimeout(() => {
  qsa('.reveal:not(.revealed)').forEach(el => el.classList.add('revealed'));
}, 2000);

// ── Scroll effects: progress bar, top-bar shadow, FAB ─────────
function onScroll() {
  const scrollY = window.scrollY;
  const docH    = document.documentElement.scrollHeight - window.innerHeight;

  // Progress bar
  if (scrollProgress) scrollProgress.style.width = (docH > 0 ? (scrollY / docH) * 100 : 0) + '%';

  // Top-bar shadow
  if (topBar) topBar.classList.toggle('scrolled', scrollY > 10);

  // FAB visibility
  if (fabTop) fabTop.classList.toggle('visible', scrollY > 400);

  // Scrollspy
  updateScrollSpy();
}

window.addEventListener('scroll', onScroll, { passive: true });

// ── Scrollspy navigation highlight ───────────────────────────
const sections  = qsa('section[id], div[id].stats-row');
const navLinks  = qsa('.nav-link[data-section]');
const drawerLinks = qsa('.drawer__link[data-section]');

function updateScrollSpy() {
  const scrollMid = window.scrollY + window.innerHeight * 0.35;
  let activeId = '';

  qsa('#home, #about, #products, #contact').forEach(sec => {
    if (sec && sec.offsetTop <= scrollMid) {
      activeId = sec.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === activeId);
  });
  drawerLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === activeId);
  });
}

// ── FAB: back to top ─────────────────────────────────────────
if (fabTop) {
  fabTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Hero scroll cue click ────────────────────────────────────
const scrollCue = qs('#hero-scroll-cue');
if (scrollCue) {
  scrollCue.addEventListener('click', () => {
    const about = qs('#about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  });
}

// ── Mobile drawer ────────────────────────────────────────────
function openDrawer() {
  drawer.classList.add('open');
  drawerOverlay.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (hamburger)     hamburger.addEventListener('click', openDrawer);
if (drawerClose)   drawerClose.addEventListener('click', closeDrawer);
if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

qsa('.drawer__link').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// ── Counter animation ─────────────────────────────────────────
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const fps      = 60;
  const steps    = Math.round(duration / (1000 / fps));
  let   step     = 0;
  const easeOut  = t => 1 - Math.pow(1 - t, 3);

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

// ── Product showcase (in-page drawer) ────────────────────────
const PRODUCTS = {
  clippers: {
    title: 'Nail Clippers',
    subtitle: 'Precision-engineered for professional & home use',
    items: [
      { name: 'Standard Nail Clipper',         img: 'https://royalmetal.co.kr/products/clippers/01.jpg' },
      { name: 'Large Nail Clipper',             img: 'https://royalmetal.co.kr/products/clippers/02.jpg' },
      { name: 'Professional Nail Clipper',      img: 'https://royalmetal.co.kr/products/clippers/03.jpg' },
      { name: 'Travel Nail Clipper Set',        img: 'https://royalmetal.co.kr/products/clippers/04.jpg' },
      { name: 'Curved Blade Clipper',           img: 'https://royalmetal.co.kr/products/clippers/05.jpg' },
      { name: 'Stainless Premium Clipper',      img: 'https://royalmetal.co.kr/products/clippers/06.jpg' },
    ]
  },
  manicure: {
    title: 'Manicure Implements',
    subtitle: 'Salon-quality precision tools for perfect nails',
    items: [
      { name: 'Cuticle Nipper',       img: 'https://royalmetal.co.kr/products/manicure/01.jpg' },
      { name: 'Nail File',            img: 'https://royalmetal.co.kr/products/manicure/02.jpg' },
      { name: 'Cuticle Pusher',       img: 'https://royalmetal.co.kr/products/manicure/03.jpg' },
      { name: 'Nail Cleaner',         img: 'https://royalmetal.co.kr/products/manicure/04.jpg' },
      { name: 'Manicure Scissors',    img: 'https://royalmetal.co.kr/products/manicure/05.jpg' },
      { name: 'Nail Buffer',          img: 'https://royalmetal.co.kr/products/manicure/06.jpg' },
    ]
  },
  pedicure: {
    title: 'Pedicure Tools',
    subtitle: 'Professional-grade pedicure instruments',
    items: [
      { name: 'Pedicure Nipper',      img: 'https://royalmetal.co.kr/products/pedicure/01.jpg' },
      { name: 'Foot File',            img: 'https://royalmetal.co.kr/products/pedicure/02.jpg' },
      { name: 'Callus Remover',       img: 'https://royalmetal.co.kr/products/pedicure/03.jpg' },
      { name: 'Toe Separator',        img: 'https://royalmetal.co.kr/products/pedicure/04.jpg' },
    ]
  },
  beauty: {
    title: 'Beauty Tools',
    subtitle: 'Innovative beauty instruments for modern care',
    items: [
      { name: 'Eyelash Curler',       img: 'https://royalmetal.co.kr/products/beauty/01.jpg' },
      { name: 'Eyebrow Trimmer',      img: 'https://royalmetal.co.kr/products/beauty/02.jpg' },
      { name: 'Blackhead Remover',    img: 'https://royalmetal.co.kr/products/beauty/03.jpg' },
      { name: 'Facial Roller',        img: 'https://royalmetal.co.kr/products/beauty/04.jpg' },
    ]
  },
  hair: {
    title: 'Hair Grooming',
    subtitle: 'Precision grooming tools for nose & ear hair',
    items: [
      { name: 'Nose Hair Trimmer',    img: 'https://royalmetal.co.kr/products/hair/01.jpg' },
      { name: 'Ear Hair Trimmer',     img: 'https://royalmetal.co.kr/products/hair/02.jpg' },
      { name: 'Eyebrow Scissors',     img: 'https://royalmetal.co.kr/products/hair/03.jpg' },
      { name: 'Beard Trimmer',        img: 'https://royalmetal.co.kr/products/hair/04.jpg' },
    ]
  },
  sets: {
    title: 'Manicure Sets',
    subtitle: 'Elegant gift-ready sets for complete nail care',
    items: [
      { name: '5-piece Manicure Set',   img: 'https://royalmetal.co.kr/products/sets/01.jpg' },
      { name: '7-piece Premium Set',    img: 'https://royalmetal.co.kr/products/sets/02.jpg' },
      { name: 'Travel Manicure Kit',    img: 'https://royalmetal.co.kr/products/sets/03.jpg' },
      { name: 'Deluxe Gift Set',        img: 'https://royalmetal.co.kr/products/sets/04.jpg' },
    ]
  }
};

const showcaseDrawer = qs('#showcase-drawer');
const showcaseGrid   = qs('#showcase-grid');
const showcaseTitle  = qs('#showcase-title');
const showcaseSub    = qs('#showcase-subtitle');
const showcaseClose  = qs('#showcase-close');
let   openCategory   = null;

function openShowcase(category) {
  const data = PRODUCTS[category];
  if (!data || !showcaseDrawer) return;

  openCategory = category;
  showcaseTitle.textContent = data.title;
  showcaseSub.textContent   = data.subtitle;

  showcaseGrid.innerHTML = data.items.map(item => `
    <div class="showcase-item">
      <div class="showcase-item__img-wrap">
        <img
          src="${item.img}"
          alt="${item.name}"
          loading="lazy"
          referrerpolicy="no-referrer"
          onerror="this.parentElement.style.background='var(--md-surface-2)';this.style.display='none'"
        />
      </div>
      <p class="showcase-item__name">${item.name}</p>
    </div>
  `).join('');

  showcaseDrawer.classList.add('open');
  showcaseDrawer.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => {
    showcaseDrawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

function closeShowcase() {
  if (!showcaseDrawer) return;
  showcaseDrawer.classList.remove('open');
  showcaseDrawer.setAttribute('aria-hidden', 'true');
  openCategory = null;
}

// Attach click to each product card
qsa('.product-card').forEach(card => {
  card.addEventListener('click', () => {
    const cat = card.dataset.category;
    if (openCategory === cat) {
      closeShowcase();
    } else {
      openShowcase(cat);
    }
  });
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });

  const btn = card.querySelector('.product-card__btn-view');
  if (btn) btn.addEventListener('click', e => e.stopPropagation());
});

// "View Items" buttons
qsa('.product-card__btn-view').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.product-card');
    if (card) {
      const cat = card.dataset.category;
      if (openCategory === cat) {
        closeShowcase();
      } else {
        openShowcase(cat);
      }
    }
  });
});

if (showcaseClose) showcaseClose.addEventListener('click', closeShowcase);

// ── Initial scroll sync ───────────────────────────────────────
onScroll();
