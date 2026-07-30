const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const backToTop = document.querySelector('.back-to-top');

function onScroll() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 24);
  backToTop.classList.toggle('show', y > 650);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.classList.toggle('active', !open);
  nav.classList.toggle('open', !open);
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.classList.remove('active');
    nav.classList.remove('open');
  });
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
