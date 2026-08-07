document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13 });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const searchInput = document.querySelector("#site-search");
  const searchableCards = document.querySelectorAll(".searchable-grid article");
  const emptyMessage = document.querySelector("#search-empty");

  if (searchInput && searchableCards.length) {
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      searchableCards.forEach(card => {
        const content = `${card.textContent} ${card.dataset.search || ""}`.toLowerCase();
        const visible = !keyword || content.includes(keyword);
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      if (emptyMessage) emptyMessage.hidden = visibleCount > 0;
    });
  }

  const toast = document.querySelector("#toast");
  let toastTimer;

  document.querySelectorAll("[data-coming]").forEach(button => {
    button.addEventListener("click", () => {
      if (!toast) return;
      toast.textContent = button.dataset.coming || "資料準備中";
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
    });
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    const toggleButton = () => {
      backToTop.classList.toggle("show", window.scrollY > 650);
    };

    window.addEventListener("scroll", toggleButton, { passive: true });
    toggleButton();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
