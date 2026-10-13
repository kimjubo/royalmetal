/* ============================================================
   Royal Metal — main.js
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

setTimeout(() => {
  qsa('.reveal:not(.revealed)').forEach(el => el.classList.add('revealed'));
}, 2000);

// ── Scroll effects ─────────────────────────────────────────────
function onScroll() {
  const scrollY = window.scrollY;
  const docH    = document.documentElement.scrollHeight - window.innerHeight;

  if (scrollProgress) scrollProgress.style.width = (docH > 0 ? (scrollY / docH) * 100 : 0) + '%';
  if (topBar) topBar.classList.toggle('scrolled', scrollY > 10);
  if (fabTop) fabTop.classList.toggle('visible', scrollY > 400);

  updateScrollSpy();
}

window.addEventListener('scroll', onScroll, { passive: true });

// ── Scrollspy ─────────────────────────────────────────────────
const navLinks    = qsa('.nav-link[data-section]');
const drawerLinks = qsa('.drawer__link[data-section]');

function updateScrollSpy() {
  const scrollMid = window.scrollY + window.innerHeight * 0.35;
  let activeId = '';

  qsa('#home, #about, #craft, #products, #oem, #contact').forEach(sec => {
    if (sec && sec.offsetTop <= scrollMid) activeId = sec.id;
  });

  navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === activeId));
  drawerLinks.forEach(link => link.classList.toggle('active', link.dataset.section === activeId));
}

// ── FAB ───────────────────────────────────────────────────────
if (fabTop) {
  fabTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Hero scroll cue ───────────────────────────────────────────
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
qsa('.drawer__link').forEach(link => link.addEventListener('click', closeDrawer));

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

// ── Product showcase — per-card accordion ─────────────────────
const PRODUCTS = {
  clippers: {
    title: 'Nail Clippers',
    subtitle: 'Professional and home use',
    items: [
      { name: 'Standard Nail Clipper',    img: 'https://royalmetal.co.kr/products/clippers/01.jpg' },
      { name: 'Large Nail Clipper',       img: 'https://royalmetal.co.kr/products/clippers/02.jpg' },
      { name: 'Professional Nail Clipper',img: 'https://royalmetal.co.kr/products/clippers/03.jpg' },
      { name: 'Travel Nail Clipper Set',  img: 'https://royalmetal.co.kr/products/clippers/04.jpg' },
      { name: 'Curved Blade Clipper',     img: 'https://royalmetal.co.kr/products/clippers/05.jpg' },
      { name: 'Stainless Premium Clipper',img: 'https://royalmetal.co.kr/products/clippers/06.jpg' },
    ]
  },
  manicure: {
    title: 'Manicure Implements',
    subtitle: 'Salon-quality nail care',
    items: [
      { name: 'Cuticle Nipper',    img: 'https://royalmetal.co.kr/products/manicure/01.jpg' },
      { name: 'Nail File',         img: 'https://royalmetal.co.kr/products/manicure/02.jpg' },
      { name: 'Cuticle Pusher',    img: 'https://royalmetal.co.kr/products/manicure/03.jpg' },
      { name: 'Nail Cleaner',      img: 'https://royalmetal.co.kr/products/manicure/04.jpg' },
      { name: 'Manicure Scissors', img: 'https://royalmetal.co.kr/products/manicure/05.jpg' },
      { name: 'Nail Buffer',       img: 'https://royalmetal.co.kr/products/manicure/06.jpg' },
    ]
  },
  pedicure: {
    title: 'Pedicure Tools',
    subtitle: 'Foot care instruments',
    items: [
      { name: 'Pedicure Nipper', img: 'https://royalmetal.co.kr/products/pedicure/01.jpg' },
      { name: 'Foot File',       img: 'https://royalmetal.co.kr/products/pedicure/02.jpg' },
      { name: 'Callus Remover',  img: 'https://royalmetal.co.kr/products/pedicure/03.jpg' },
      { name: 'Toe Separator',   img: 'https://royalmetal.co.kr/products/pedicure/04.jpg' },
    ]
  },
  beauty: {
    title: 'Beauty Tools',
    subtitle: 'Everyday beauty tools',
    items: [
      { name: 'Eyelash Curler',    img: 'https://royalmetal.co.kr/products/beauty/01.jpg' },
      { name: 'Eyebrow Trimmer',   img: 'https://royalmetal.co.kr/products/beauty/02.jpg' },
      { name: 'Blackhead Remover', img: 'https://royalmetal.co.kr/products/beauty/03.jpg' },
      { name: 'Facial Roller',     img: 'https://royalmetal.co.kr/products/beauty/04.jpg' },
    ]
  },
  hair: {
    title: 'Hair Grooming',
    subtitle: 'Nose, ear, and brow',
    items: [
      { name: 'Nose Hair Trimmer', img: 'https://royalmetal.co.kr/products/hair/01.jpg' },
      { name: 'Ear Hair Trimmer',  img: 'https://royalmetal.co.kr/products/hair/02.jpg' },
      { name: 'Eyebrow Scissors',  img: 'https://royalmetal.co.kr/products/hair/03.jpg' },
      { name: 'Beard Trimmer',     img: 'https://royalmetal.co.kr/products/hair/04.jpg' },
    ]
  },
  sets: {
    title: 'Manicure Sets',
    subtitle: 'Gift and travel cases',
    items: [
      { name: '5-piece Manicure Set', img: 'https://royalmetal.co.kr/products/sets/01.jpg' },
      { name: '7-piece Premium Set',  img: 'https://royalmetal.co.kr/products/sets/02.jpg' },
      { name: 'Travel Manicure Kit',  img: 'https://royalmetal.co.kr/products/sets/03.jpg' },
      { name: 'Deluxe Gift Set',      img: 'https://royalmetal.co.kr/products/sets/04.jpg' },
    ]
  }
};

// Build per-card accordion drawers and inject into each card
qsa('.product-card').forEach(card => {
  const cat  = card.dataset.category;
  const data = PRODUCTS[cat];
  if (!data) return;

  // Create drawer element
  const acc = document.createElement('div');
  acc.className = 'card-accordion';
  acc.setAttribute('aria-hidden', 'true');
  acc.innerHTML = `
    <div class="card-accordion__inner">
      <div class="card-accordion__header">
        <div>
          <p class="card-accordion__title" data-i18n="card.${cat}.title">${data.title}</p>
          <p class="card-accordion__sub" data-i18n="cat.${cat}.sub">${data.subtitle}</p>
        </div>
        <button class="card-accordion__close" aria-label="Close">
          <span class="material-icons-round">close</span>
        </button>
      </div>
      <div class="card-accordion__grid">
        ${data.items.map((item, index) => `
          <div class="showcase-item">
            <div class="showcase-item__img-wrap">
              <img src="${item.img}" alt="${item.name}" loading="lazy" referrerpolicy="no-referrer"
                onerror="this.parentElement.style.background='var(--md-surface-2)';this.style.display='none'" />
            </div>
            <p class="showcase-item__name" data-i18n="item.${cat}.${index + 1}">${item.name}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  card.appendChild(acc);

  // Toggle
  function toggle(e) {
    const isOpen = card.classList.contains('card-open');

    qsa('.product-card.card-open').forEach(other => {
      other.classList.remove('card-open');
      const panel = qs('.card-accordion', other);
      if (panel) panel.setAttribute('aria-hidden', 'true');
    });

    if (!isOpen) {
      card.classList.add('card-open');
      acc.setAttribute('aria-hidden', 'false');
      requestAnimationFrame(() => {
        acc.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  }

  // Close button inside accordion
  qs('.card-accordion__close', acc).addEventListener('click', (e) => {
    e.stopPropagation();
    card.classList.remove('card-open');
    acc.setAttribute('aria-hidden', 'true');
  });

  // Click on card body (excluding close btn)
  card.addEventListener('click', (e) => {
    if (e.target.closest('.card-accordion__close')) return;
    toggle(e);
  });

  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

// ── Category filter (catalogue tabs) ─────────────────────────
function applyFilter(filter) {
  qsa('.filter-chip').forEach(btn => {
    const on = btn.dataset.filter === filter;
    btn.classList.toggle('is-active', on);
    btn.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  qsa('.product-card').forEach(card => {
    const show = filter === 'all' || card.dataset.category === filter;
    card.hidden = !show;
    if (!show) {
      card.classList.remove('card-open');
      const panel = qs('.card-accordion', card);
      if (panel) panel.setAttribute('aria-hidden', 'true');
    }
  });
}

qsa('.filter-chip').forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
});

qsa('[data-jump]').forEach(card => {
  card.addEventListener('click', () => {
    applyFilter(card.dataset.jump);
    const filters = qs('.filters');
    if (filters) filters.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Quotation form → export mailbox ──────────────────────────
const inquiryForm = qs('#inquiry');
const inquiryStatus = qs('#inquiry-status');

function showInquiryStatus(key, isError) {
  if (!inquiryStatus) return;
  inquiryStatus.hidden = false;
  inquiryStatus.classList.toggle('is-error', Boolean(isError));
  inquiryStatus.setAttribute('data-i18n', key);
  const lang = localStorage.getItem('rm_lang') || 'en';
  if (window.applyTranslation) window.applyTranslation(lang);
}

if (inquiryForm) {
  inquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(inquiryForm);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const company = String(data.get('company') || '').trim();
    const interest = String(data.get('interest') || '').trim();

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showInquiryStatus('inquiry.invalid', true);
      inquiryForm.reportValidity();
      return;
    }

    const subject = encodeURIComponent(`Royal Metal inquiry — ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company || '-'}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`
    );
    window.location.href = `mailto:master@royalmetal.co.kr?subject=${subject}&body=${body}`;
    showInquiryStatus('inquiry.sent', false);
  });
}

if (window.applyTranslation) {
  window.applyTranslation(localStorage.getItem('rm_lang') || 'en');
}

// ── Initial scroll sync ───────────────────────────────────────
onScroll();
