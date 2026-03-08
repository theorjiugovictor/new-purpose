import './impact.css';

const stats = [
  { number: '500+', label: 'Families Reached', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
  { number: '3', label: 'Core Programs', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>' },
  { number: '100%', label: 'Volunteer-Driven', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' },
  { number: '2025', label: 'Year Founded', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' }
];

export function mountImpact(element) {
  element.innerHTML = `
    <div class="impact-container container">
      <div class="impact-header text-center reveal">
        <span class="section-label">Our Impact</span>
        <h2 class="section-title">Building Community,<br>One Life at a Time</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">From education programs to wellness workshops, every initiative we run creates lasting change in people's lives.</p>
      </div>

      <div class="impact-stats reveal reveal-delay-1">
        ${stats.map(stat => `
          <div class="impact-stat">
            <div class="impact-stat-icon">${stat.icon}</div>
            <span class="impact-stat-number">${stat.number}</span>
            <span class="impact-stat-label">${stat.label}</span>
          </div>
        `).join('')}
      </div>

      <div class="impact-cta reveal reveal-delay-3">
        <div class="impact-cta-text">
          <h3>Join Our Growing Community</h3>
          <p>Whether you volunteer, donate, or simply spread the word — you become part of the New Purpose family.</p>
        </div>
        <div class="impact-cta-actions">
          <a href="#donate" class="btn btn-primary">Make a Donation</a>
          <a href="#contact" class="btn btn-secondary">Volunteer</a>
        </div>
      </div>
    </div>
  `;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) el.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  element.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
