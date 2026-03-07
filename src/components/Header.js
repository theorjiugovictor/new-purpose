import './header.css';

export function mountHeader(element) {
    element.innerHTML = `
    <div class="header-inner">
      <div class="header-container container">
        <a href="#" class="logo" aria-label="New Purpose Home">
          <svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M24 42s-18-10.5-18-22a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 11.5-18 22-18 22z" fill="#E8392A"/>
            <path d="M16 22 c0 0 2-4 4-4s4 2 4 4 c0 2-4 6-4 6s-4-4-4-6z" fill="white" opacity="0.7"/>
            <path d="M30 19 c-2-1-4 0-5 2 c-1-2-3-3-5-2" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none"/>
          </svg>
          <span class="logo-text">new<strong>purpose</strong></span>
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
