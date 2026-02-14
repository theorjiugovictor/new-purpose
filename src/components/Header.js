import './header.css';

export function mountHeader(element) {
    element.innerHTML = `
    <div class="header-container container">
      <div class="logo">
        <a href="#">New Purpose</a>
      </div>
      
      <button class="mobile-toggle" aria-label="Toggle Navigation">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav class="nav-menu">
        <ul class="nav-list">
          <li><a href="#mission" class="nav-link">Our Mission</a></li>
          <li><a href="#services" class="nav-link">Programs</a></li>
          <li><a href="#donate" class="btn btn-primary">Donate</a></li>
        </ul>
      </nav>
    </div>
  `;

    const toggle = element.querySelector('.mobile-toggle');
    const nav = element.querySelector('.nav-menu');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Close menu when link is clicked
    element.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
}
