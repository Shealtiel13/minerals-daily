/* ============================================
   Core Critical Metals — Landing Page Scripts
   ============================================ */

(function () {
  'use strict';

  /* --- Cookie Banner --- */
  function initCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    if (localStorage.getItem('cookie-consent')) {
      banner.classList.add('hidden');
      return;
    }

    banner.classList.remove('hidden');

    var acceptBtn = document.getElementById('cookie-accept');
    var essentialBtn = document.getElementById('cookie-essential');

    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        localStorage.setItem('cookie-consent', 'all');
        banner.classList.add('hidden');
      });
    }

    if (essentialBtn) {
      essentialBtn.addEventListener('click', function () {
        localStorage.setItem('cookie-consent', 'essential');
        banner.classList.add('hidden');
      });
    }
  }

  /* --- Mobile Menu Toggle --- */
  function initMobileMenu() {
    var toggle = document.getElementById('mobile-menu-toggle');
    var nav = document.getElementById('main-nav');
    var closeBtn = document.getElementById('mobile-nav-close');
    if (!toggle || !nav) return;

    function closeMenu() {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '\u2630';
      toggle.focus();
    }

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? '\u2715' : '\u2630';
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  /* --- Sticky Header Adjustment --- */
  function initStickyHeader() {
    var header = document.querySelector('.site-header');
    var legalBar = document.querySelector('.legal-bar');
    var hero = document.querySelector('.hero');
    if (!header || !legalBar) return;

    function adjustHeader() {
      var barHeight = legalBar.offsetHeight;
      header.style.top = barHeight + 'px';
      if (hero) hero.style.marginTop = barHeight + 'px';
    }

    adjustHeader();
    window.addEventListener('resize', adjustHeader, { passive: true });
  }

  /* --- Reading Progress Bar (optional enhancement) --- */
  function initReadingProgress() {
    var article = document.querySelector('.article-body');
    if (!article) return;

    var bar = document.createElement('div');
    bar.style.cssText =
      'position:fixed;top:0;left:0;height:3px;background:var(--color-primary);z-index:1002;transition:width 0.1s;width:0;pointer-events:none;';
    document.body.appendChild(bar);

    window.addEventListener(
      'scroll',
      function () {
        var rect = article.getBoundingClientRect();
        var scrolled = -rect.top;
        var total = rect.height - window.innerHeight;
        var pct = Math.min(Math.max(scrolled / total, 0), 1) * 100;
        bar.style.width = pct + '%';
      },
      { passive: true }
    );
  }

  /* --- Scroll to Top --- */
  function initScrollToTop() {
    var btn = document.getElementById('scroll-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 600) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --- Sidebar Widget Tabs --- */
  function initWidgetTabs() {
    var tabs = document.querySelectorAll('.widget-tab');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var parent = tab.closest('.sidebar-widget');
        if (!parent) return;

        parent.querySelectorAll('.widget-tab').forEach(function (t) {
          t.classList.remove('active');
        });
        parent.querySelectorAll('.widget-tab-content').forEach(function (c) {
          c.classList.remove('active');
        });

        tab.classList.add('active');
        var target = document.getElementById('tab-' + tab.getAttribute('data-tab'));
        if (target) target.classList.add('active');
      });
    });
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', function () {
    initCookieBanner();
    initMobileMenu();
    initStickyHeader();
    initReadingProgress();
    initScrollToTop();
    initWidgetTabs();
  });
})();
