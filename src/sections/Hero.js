import './hero.css';
import heroBg from '../assets/hero-bg.png';

export function mountHero(element) {
    element.innerHTML = `
    <div class="hero-background" style="background-image: url('${heroBg}')">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content container">
      <span class="hero-tag animate-fade-up">New Purpose Non-Profit Organization</span>
      <h1 class="hero-title animate-fade-up delay-1">
        Give. Gain.<br><span class="hero-title-accent">Transform Lives.</span>
      </h1>
      <p class="hero-subtitle animate-fade-up delay-2">
        We empower children, women, and families across Ohio through education,
        healthcare support, and community connection — because every life has purpose.
      </p>
      <div class="hero-actions animate-fade-up delay-3">
        <a href="#donate" class="btn btn-primary btn-large">Donate Now</a>
        <a href="#about" class="btn btn-outline-white btn-large">Learn More</a>
      </div>
      <div class="hero-trust animate-fade-up delay-4">
        <span class="hero-trust-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Ohio Registered Nonprofit
        </span>
        <span class="hero-trust-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          100% Volunteer-Driven
        </span>
        <span class="hero-trust-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Community First
        </span>
      </div>
    </div>
    <a href="#about" class="hero-scroll-down" aria-label="Scroll to content">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M12 5v14M5 12l7 7 7-7"/>
      </svg>
    </a>
  `;
}
