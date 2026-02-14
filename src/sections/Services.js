import './services.css';

const services = [
    {
        title: 'Therapeutic Support',
        description: 'Personalized occupational, physical, and speech therapy designed to help every child reach their developmental milestones.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3V4a1 1 0 0 1 1 1v5a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5V5a1 1 0 0 1 1-1h.8z"/><path d="M8 19v3"/><path d="M16 19v3"/><path d="M12 15v3"/></svg>'
    },
    {
        title: 'Inclusive Education',
        description: 'Educational programs that adapt to learning styles, ensuring that every student has the tools and environment they need to succeed.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'
    },
    {
        title: 'Family Community',
        description: 'A strong support network for parents and siblings, providing workshops, counseling, and community events.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
    }
];

export function mountServices(element) {
    element.innerHTML = `
    <div class="services-container container">
      <div class="services-header text-center">
        <h2 class="section-title">Our Programs</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">Comprehensive care tailored to individual needs.</p>
      </div>
      
      <div class="services-grid">
        ${services.map(service => `
          <div class="service-card">
            <div class="service-icon">${service.icon}</div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <a href="#" class="service-link">Learn More &rarr;</a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
