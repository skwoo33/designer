(function () {
  "use strict";

  var HERO_STORAGE_KEY = "designerHeroImageIndex";

  var heroVariants = [
    {
      src: "https://images.unsplash.com/photo-1753164597336-1456a966e01f?auto=format&fit=crop&w=960&q=82",
      alt:
        "여성복 패션 디자이너가 작업실에서 의상 스케치를 그리며 라인을 설계하는 장면",
    },
    {
      src: "https://images.unsplash.com/photo-1753162657546-fe4f94c65192?auto=format&fit=crop&w=960&q=82",
      alt:
        "여성복 의상 스케치를 종이에 연필로 그리며 디자인을 구체화하는 장면",
    },
  ];

  var heroImg = document.getElementById("hero-image");
  if (heroImg && heroVariants.length > 0) {
    try {
      var prev = parseInt(window.localStorage.getItem(HERO_STORAGE_KEY) || "-1", 10);
      if (Number.isNaN(prev)) prev = -1;
      var next = (prev + 1) % heroVariants.length;
      window.localStorage.setItem(HERO_STORAGE_KEY, String(next));
      heroImg.src = heroVariants[next].src;
      heroImg.alt = heroVariants[next].alt;
    } catch (e) {
      /* private 모드·스토리지 차단 시 HTML 기본 이미지 유지 */
    }
  }

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
