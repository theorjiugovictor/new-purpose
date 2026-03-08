import './services.css';

import educationImg from '../assets/services/education.png';
import healthImg from '../assets/services/health.png';
import communityImg from '../assets/services/community.png';
import digitalImg from '../assets/services/digital.png';

const programs = [
  {
    title: 'Education Outreach',
    description: 'We provide tutoring, school supplies, learning resources, and mentorship programs to ensure every child has the educational foundation they need to succeed.',
    image: educationImg,
    tag: 'Education',
    span: 'wide'
  },
  {
    title: 'Healthcare & Wellness',
    description: 'Connecting families to medical resources, health literacy workshops, and bridging access to quality healthcare across the US.',
    image: healthImg,
    tag: 'Health',
    span: 'square'
  },
  {
    title: 'Digital Empowerment',
    description: 'Equipping special needs children with tablets, digital gadgets, and essential tech skills to foster learning and independence.',
    image: digitalImg,
    tag: 'Technology',
    span: 'square'
  },
  {
    title: 'Community Building',
    description: 'Through events, mentoring, and inclusive family networking, we create a connected community where everyone belongs.',
    image: communityImg,
    tag: 'Community',
    span: 'wide'
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
        <p class="section-subtitle">Comprehensive support designed to uplift individuals, strengthen families, and build thriving communities.</p>
      </div>

      <div class="bento-grid">
        ${programs.map((p, i) => `
          <div class="bento-card bento-${p.span} reveal reveal-delay-${i + 1}">
            <div class="bento-image-wrapper">
              <img src="${p.image}" alt="${p.title}" class="bento-image" loading="lazy">
              <div class="bento-overlay"></div>
            </div>
            <div class="bento-content">
              <span class="service-tag">${p.tag}</span>
              <h3 class="bento-title">${p.title}</h3>
              <p class="bento-description">${p.description}</p>
              <a href="#contact" class="bento-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="bento-arrow" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
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
