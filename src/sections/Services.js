import './services.css';

const programs = [
    {
        title: 'Child Education Support',
        description: 'We provide tutoring, school supplies, learning resources, and mentorship programs to ensure every child has the educational foundation they need to succeed — no matter their background.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
        tag: 'Education'
    },
    {
        title: 'Healthcare & Wellness',
        description: 'We connect families to medical and therapeutic resources, support health literacy workshops, and help bridge gaps in access to quality healthcare and wellness services across Ohio.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
        tag: 'Health'
    },
    {
        title: 'Community Building',
        description: 'Through events, mentorship circles, family networking, and skill-building workshops, we create a strong, connected community where everyone belongs and everyone contributes.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        tag: 'Community'
    }
];

export function mountServices(element) {
    element.id = 'programs';
    element.innerHTML = `
    <div class="services-container container">
      <div class="services-header text-center reveal">
        <span class="section-label">What We Do</span>
        <h2 class="section-title">Our Programs</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">Three pillars of support designed to uplift individuals, strengthen families, and build thriving communities.</p>
      </div>

      <div class="services-grid">
        ${programs.map((p, i) => `
          <div class="service-card reveal reveal-delay-${i + 1}">
            <div class="service-card-top">
              <span class="service-tag">${p.tag}</span>
              <div class="service-icon">${p.icon}</div>
            </div>
            <h3 class="service-title">${p.title}</h3>
            <p class="service-description">${p.description}</p>
            <a href="#contact" class="service-link">
              Get Involved
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            if (el.isIntersecting) {
                el.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    element.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
