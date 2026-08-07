
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.13 });
    items.forEach(item => observer.observe(item));
  } else {
    items.forEach(item => item.classList.add("visible"));
  }

  const stage = document.querySelector(".parallax-stage");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (stage && !reduceMotion && window.matchMedia("(pointer:fine)").matches) {
    stage.addEventListener("mousemove", event => {
      const box = stage.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      stage.style.transform = `perspective(900px) rotateX(${y * -3}deg) rotateY(${x * 4}deg)`;
      stage.querySelectorAll(".parallax-item").forEach(item => {
        const depth = Number(item.dataset.depth || 15);
        item.style.marginLeft = `${x * depth}px`;
        item.style.marginTop = `${y * depth}px`;
      });
    });
    stage.addEventListener("mouseleave", () => {
      stage.style.transform = "";
      stage.querySelectorAll(".parallax-item").forEach(item => {
        item.style.marginLeft = "";
        item.style.marginTop = "";
      });
    });
  }

  document.querySelectorAll(".spotlight-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const box = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - box.left}px`);
      card.style.setProperty("--my", `${event.clientY - box.top}px`);
    });
  });

  document.querySelectorAll(".ripple").forEach(button => {
    button.addEventListener("click", event => {
      const dot = document.createElement("span");
      const box = button.getBoundingClientRect();
      const size = Math.max(box.width, box.height);
      dot.className = "ripple-dot";
      dot.style.width = dot.style.height = `${size}px`;
      dot.style.left = `${event.clientX - box.left - size / 2}px`;
      dot.style.top = `${event.clientY - box.top - size / 2}px`;
      button.appendChild(dot);
      setTimeout(() => dot.remove(), 700);
    });
  });

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    const toggle = () => backToTop.classList.toggle("show", window.scrollY > 600);
    window.addEventListener("scroll", toggle, { passive: true });
    toggle();
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
});
