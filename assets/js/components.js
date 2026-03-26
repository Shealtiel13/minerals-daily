/* ============================================
   Shared Components — Single source of truth
   Edit here to update all pages at once.
   ============================================ */

var SiteComponents = (function () {
  'use strict';

  /* --- Configuration (edit these to update globally) --- */
  var CONFIG = {
    siteName: 'Minerals Daily',
    logoSrc: 'assets/images/logo-white.svg',
    contactEmail: 'contact@example.com',
    companyName: '[Company Name]',
    navItems: [
      { label: 'Markets', href: '#' },
      { label: 'Mining', href: '#' },
      { label: 'Economy', href: '#' },
      { label: 'Technology', href: '#' },
      { label: 'Commentary', href: '#' }
    ],
    footerLinks: [
      { label: 'Impressum', href: 'impressum.html' },
      { label: 'Datenschutz', href: 'datenschutz.html' },
      { label: 'Disclaimer', href: 'index.html#disclaimer' },
      { label: 'Contact', href: 'mailto:contact@example.com' }
    ]
  };

  /* --- Resolve paths relative to current page depth --- */
  function resolvePath(path) {
    /* If the page sets a base path via data attribute, prepend it */
    var root = document.documentElement.getAttribute('data-base') || '';
    if (root && !root.endsWith('/')) root += '/';
    /* Don't prefix absolute URLs, anchors, or mailto */
    if (/^(https?:|mailto:|#)/.test(path)) return path;
    return root + path;
  }

  /* --- Legal Disclaimer Bar --- */
  function renderLegalBar() {
    var lang = document.documentElement.lang || 'en';
    var isGerman = lang === 'de';

    var html = '<div class="legal-bar" role="banner">';
    if (isGerman) {
      html += '<strong>WERBUNG</strong> &mdash; Dieser Inhalt ist gesponsert und stellt keine Anlageberatung dar. Kapitalverlustrisiko. ';
      html += 'Siehe <a href="' + resolvePath('index.html#disclaimer') + '">vollst\u00e4ndigen Haftungsausschluss</a>. | ';
      html += '<a href="' + resolvePath('impressum.html') + '">Impressum</a>';
    } else {
      html += '<strong>ADVERTISEMENT</strong> &mdash; This content is sponsored and does not constitute investment advice. Capital at risk. ';
      html += 'See <a href="' + resolvePath('index.html#disclaimer') + '">full disclaimer</a> below. | ';
      html += '<a href="' + resolvePath('impressum.html') + '">Impressum</a>';
    }
    html += '</div>';
    return html;
  }

  /* --- Site Header --- */
  function renderHeader() {
    var lang = document.documentElement.lang || 'en';
    var isGerman = lang === 'de';
    var homeHref = resolvePath('index.html');
    var logoSrc = resolvePath(CONFIG.logoSrc);

    var html = '<header class="site-header">';
    html += '<div class="header-inner">';

    /* Logo */
    html += '<a href="' + homeHref + '" class="site-logo" aria-label="' + (isGerman ? 'Startseite' : 'Home') + '">';
    html += '<img src="' + logoSrc + '" alt="' + CONFIG.siteName + '" width="160" height="36">';
    html += '</a>';

    /* Nav */
    html += '<nav><ul class="main-nav" id="main-nav" role="menubar">';

    /* Close button (visible only in mobile overlay) */
    html += '<li class="mobile-nav-close-item"><button class="mobile-nav-close" id="mobile-nav-close" ';
    html += 'aria-label="' + (isGerman ? 'Men\u00fc schlie\u00dfen' : 'Close menu') + '">';
    html += '\u2715</button></li>';

    if (isGerman) {
      /* German pages get a back link */
      html += '<li><a href="' + homeHref + '" role="menuitem">Zur\u00fcck zum Artikel</a></li>';
    } else {
      for (var i = 0; i < CONFIG.navItems.length; i++) {
        var item = CONFIG.navItems[i];
        html += '<li><a href="' + resolvePath(item.href) + '" role="menuitem">' + item.label + '</a></li>';
      }
    }

    html += '</ul></nav>';

    /* Mobile toggle */
    html += '<button class="mobile-menu-toggle" id="mobile-menu-toggle" ';
    html += 'aria-label="' + (isGerman ? 'Men\u00fc \u00f6ffnen' : 'Open menu') + '" ';
    html += 'aria-expanded="false">&#9776;</button>';

    html += '</div></header>';
    return html;
  }

  /* --- Site Footer (3-column) --- */
  function renderFooter() {
    var lang = document.documentElement.lang || 'en';
    var isGerman = lang === 'de';
    var logoSrc = resolvePath(CONFIG.logoSrc);

    var html = '<footer class="site-footer">';

    /* Top area — 3 columns */
    html += '<div class="footer-top"><div class="footer-grid">';

    /* Column 1: Latest Articles */
    html += '<div class="footer-col">';
    html += '<h4 class="footer-col-title">' + (isGerman ? 'Neueste Artikel' : 'Latest Articles') + '</h4>';
    html += '<ul class="footer-article-list">';
    html += '<li><a href="#">' + (isGerman ? 'Globale Kupfernachfrage steigt bei Lieferkettenspannungen' : 'Global Copper Demand Surges as Supply Chain Tensions Rise') + '</a></li>';
    html += '<li><a href="#">' + (isGerman ? 'Pentagon beschleunigt Beschaffungsstrategie f\u00fcr Seltene Erden' : 'Pentagon Accelerates Rare Earth Procurement Strategy') + '</a></li>';
    html += '<li><a href="#">' + (isGerman ? 'Kritische Mineralien ETFs verzeichnen Rekordzufl\u00fcsse' : 'Critical Minerals ETFs See Record Inflows Amid Supply Fears') + '</a></li>';
    html += '</ul></div>';

    /* Column 2: Categories */
    html += '<div class="footer-col">';
    html += '<h4 class="footer-col-title">' + (isGerman ? 'Kategorien' : 'Categories') + '</h4>';
    html += '<ul class="footer-cat-list">';
    var cats = isGerman
      ? ['Wirtschaft', 'M\u00e4rkte', 'Bergbau', 'Technologie', 'Finanzen', 'Kommentar']
      : ['Economy', 'Markets', 'Mining', 'Technology', 'Finance', 'Commentary'];
    for (var c = 0; c < cats.length; c++) {
      html += '<li><a href="#">' + cats[c] + '</a></li>';
    }
    html += '</ul></div>';

    /* Column 3: Tags */
    html += '<div class="footer-col">';
    html += '<h4 class="footer-col-title">' + (isGerman ? 'Schlagw\u00f6rter' : 'Tags') + '</h4>';
    html += '<div class="footer-tags">';
    var tags = isGerman
      ? ['Kupfer', 'Seltene Erden', 'Wolfram', 'Lithium', 'Bergbau', 'Exploration', 'Kanada', 'British Columbia', 'Pentagon', 'Lieferkette']
      : ['Copper', 'Rare Earths', 'Tungsten', 'Lithium', 'Mining', 'Exploration', 'Canada', 'British Columbia', 'Pentagon', 'Supply Chain'];
    for (var t = 0; t < tags.length; t++) {
      html += '<a href="#" class="footer-tag">' + tags[t] + '</a>';
    }
    html += '</div></div>';

    html += '</div></div>';

    /* Bottom area — logo, social, copyright */
    html += '<div class="footer-inner">';

    /* Logo */
    html += '<div class="footer-logo">';
    html += '<img src="' + logoSrc + '" alt="' + CONFIG.siteName + '" width="160" height="36" loading="lazy">';
    html += '</div>';

    /* Social icons */
    html += '<div class="footer-social">';
    html += '<a href="#" aria-label="Facebook">f</a>';
    html += '<a href="#" aria-label="X (Twitter)">X</a>';
    html += '<a href="#" aria-label="LinkedIn">in</a>';
    html += '<a href="#" aria-label="Instagram">ig</a>';
    html += '</div>';

    /* Links */
    html += '<ul class="footer-links">';
    for (var i = 0; i < CONFIG.footerLinks.length; i++) {
      var link = CONFIG.footerLinks[i];
      html += '<li><a href="' + resolvePath(link.href) + '">' + link.label + '</a></li>';
    }
    html += '</ul>';

    /* Copyright */
    html += '<hr class="footer-divider">';
    html += '<p class="footer-copyright">';
    html += '&copy; 2025 ' + CONFIG.companyName + '. ';
    html += (isGerman ? 'Alle Rechte vorbehalten.' : 'All rights reserved.') + '<br>';
    html += (isGerman
      ? 'Dies ist bezahlte Werbung. Keine Anlageberatung. Kapitalverlustrisiko.'
      : 'This is paid advertising. Not investment advice. Capital at risk.');
    html += '</p>';

    html += '</div></footer>';
    return html;
  }

  /* --- Cookie Banner --- */
  function renderCookieBanner() {
    var lang = document.documentElement.lang || 'en';
    var isGerman = lang === 'de';
    var privacyHref = resolvePath('datenschutz.html');

    var html = '<div class="cookie-banner hidden" id="cookie-banner" role="dialog" ';
    html += 'aria-label="' + (isGerman ? 'Cookie-Einwilligung' : 'Cookie consent') + '" ';
    html += 'aria-describedby="cookie-desc">';
    html += '<div class="cookie-inner">';

    /* Text */
    html += '<p class="cookie-text" id="cookie-desc">';
    if (isGerman) {
      html += 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. ';
      html += 'Notwendige Cookies sind f\u00fcr die Funktion der Website erforderlich. ';
      html += 'Analyse-Cookies helfen uns zu verstehen, wie Besucher mit unseren Inhalten interagieren. ';
      html += 'Mit Klick auf \u201eAlle akzeptieren\u201c stimmen Sie allen Cookies zu. ';
      html += 'Siehe unsere <a href="' + privacyHref + '">Datenschutzerkl\u00e4rung</a> f\u00fcr Details.';
    } else {
      html += 'We use cookies to enhance your experience on our site. ';
      html += 'Essential cookies are required for the site to function. ';
      html += 'Analytics cookies help us understand how visitors interact with our content. ';
      html += 'By clicking \u201cAccept All,\u201d you consent to all cookies. ';
      html += 'See our <a href="' + privacyHref + '">Privacy Policy</a> for details.';
    }
    html += '</p>';

    /* Buttons */
    html += '<div class="cookie-buttons">';
    html += '<button class="btn-cookie-accept" id="cookie-accept">' + (isGerman ? 'Alle akzeptieren' : 'Accept All') + '</button>';
    html += '<button class="btn-cookie-essential" id="cookie-essential">' + (isGerman ? 'Nur notwendige' : 'Essential Only') + '</button>';
    html += '</div>';

    html += '</div></div>';
    return html;
  }

  /* --- Mount all components into the page --- */
  function mount() {
    var legalSlot = document.getElementById('component-legal-bar');
    var headerSlot = document.getElementById('component-header');
    var footerSlot = document.getElementById('component-footer');
    var cookieSlot = document.getElementById('component-cookie');

    if (legalSlot) legalSlot.outerHTML = renderLegalBar();
    if (headerSlot) headerSlot.outerHTML = renderHeader();
    if (footerSlot) footerSlot.outerHTML = renderFooter();
    if (cookieSlot) cookieSlot.outerHTML = renderCookieBanner();
  }

  /* --- Public API --- */
  return {
    mount: mount,
    CONFIG: CONFIG
  };
})();

/* Auto-mount on DOMContentLoaded */
document.addEventListener('DOMContentLoaded', function () {
  SiteComponents.mount();
});
