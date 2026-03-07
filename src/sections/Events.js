import './events.css';

const events = [
  {
    month: 'MAR',
    day: '08',
    year: '2026',
    title: 'International Women\'s Day Celebration',
    description: 'Join us for an evening of inspiration, connection, and community. Celebrate the incredible women shaping our world — in partnership with New Purpose Non-Profit.',
    time: '4:00 PM – 8:00 PM',
    location: '5539 Eureka Dr, Hamilton Ohio',
    rsvp: 'RSVP via Zelle',
    contacts: [
      { name: 'Shiree', phone: '+1 (937) 566-9161' },
      { name: 'Kelly', phone: '+1 (513) 615-0033' }
    ],
    featured: true,
    tag: 'Upcoming'
  }
];

export function mountEvents(element) {
  element.innerHTML = `
    <div class="events-container container">
      <div class="events-header text-center reveal">
        <span class="section-label">Mark Your Calendar</span>
        <h2 class="section-title">Upcoming Events</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">Come together, connect, and be part of the change. Our events are open to all.</p>
      </div>

      <div class="events-list">
        ${events.map((evt, i) => `
          <div class="event-card ${evt.featured ? 'event-card--featured' : ''} reveal reveal-delay-${i + 1}">
            <div class="event-date-badge">
              <span class="event-month">${evt.month}</span>
              <span class="event-day">${evt.day}</span>
              <span class="event-year">${evt.year}</span>
            </div>
            <div class="event-details">
              <span class="event-tag">${evt.tag}</span>
              <h3 class="event-title">${evt.title}</h3>
              <p class="event-desc">${evt.description}</p>
              <div class="event-meta">
                <span class="event-meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  ${evt.time}
                </span>
                <span class="event-meta-item">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  ${evt.location}
                </span>
              </div>
            </div>
            <div class="event-action">
              <div class="event-rsvp">
                <p class="event-rsvp-title">${evt.rsvp}</p>
                ${evt.contacts.map(c => `
                  <a href="tel:${c.phone.replace(/\D/g, '')}" class="event-contact">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    ${c.name}: ${c.phone}
                  </a>
                `).join('')}
              </div>
              <a href="tel:9375669161" class="btn btn-primary">RSVP Now</a>
            </div>
          </div>
        `).join('')}
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
