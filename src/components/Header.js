import './header.css';
import logoImg from '../assets/logo.svg';
export function mountHeader(element) {
  element.innerHTML = `
    <div class="header-inner">
      <div class="header-container container">
        <a href="#" class="logo" aria-label="New Purpose Home">
          <img src="${logoImg}" alt="New Purpose Logo" class="logo-image" />
        </a>

        <button class="mobile-toggle" aria-label="Toggle Navigation" aria-expanded="false">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>

        <nav class="nav-menu" role="navigation" aria-label="Main navigation">
          <ul class="nav-list">
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#programs" class="nav-link">Programs</a></li>
            <li><a href="#team" class="nav-link">Team</a></li>
            <li><a href="#events" class="nav-link">Events</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
            <li><a href="#donate" class="btn btn-primary nav-cta">Donate</a></li>
          </ul>
        </nav>
      </div>
    </div>
  `;

  const toggle = element.querySelector('.mobile-toggle');
  const nav = element.querySelector('.nav-menu');
  const headerInner = element.querySelector('.header-inner');

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(!expanded));
  });

  element.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll behaviour: add scrolled class when past 60px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      headerInner.classList.add('scrolled');
    } else {
      headerInner.classList.remove('scrolled');
    }
  }, { passive: true });
}
