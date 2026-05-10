(function () {
  "use strict";

  var nav = document.getElementById("site-nav");
  var toggle = document.getElementById("nav-toggle");
  var yearEl = document.getElementById("footer-year");

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function setNavOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNavOpen(false);
    });

    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("is-open")) return;
      var t = e.target;
      if (t === toggle || toggle.contains(t)) return;
      if (t !== nav && !nav.contains(t)) setNavOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) setNavOpen(false);
    });

    nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.innerWidth <= 768) setNavOpen(false);
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    var id = anchor.getAttribute("href");
    if (!id || id === "#") return;
    var target = document.querySelector(id);
    if (!target) return;

    anchor.addEventListener("click", function (e) {
      if (prefersReducedMotion()) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.replaceState) {
        history.replaceState(null, "", id);
      }
    });
  });

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
