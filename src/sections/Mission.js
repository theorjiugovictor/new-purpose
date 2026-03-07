import './mission.css';

export function mountMission(element) {
  element.id = 'about';
  element.innerHTML = `
    <div class="mission-container container">
      <div class="mission-layout">
        <div class="mission-text reveal">
          <span class="section-label">Who We Are</span>
          <h2 class="section-title">Compassion<br>in Action</h2>
          <div class="title-underline-left"></div>
          <p>
            New Purpose Non-Profit Organization was founded with a simple but powerful belief:
            every person — regardless of circumstance — deserves the opportunity to discover their
            purpose and thrive within a caring community.
          </p>
          <p>
            Incorporated in the US in November 2025, we bring together volunteers,
            educators, healthcare advocates, and families to create lasting change in Hamilton
            and across the US. Our motto, <em>"Give and Gain,"</em> reflects our conviction that
            serving others enriches every life involved.
          </p>
          <div class="mission-values">
            <div class="value-item">
              <div class="value-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <strong>Community-Centered</strong>
                <p>We strengthen bonds and build lasting networks of support.</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <strong>Empowerment Focused</strong>
                <p>We equip individuals and families with tools to flourish independently.</p>
              </div>
            </div>
            <div class="value-item">
              <div class="value-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <div>
                <strong>Inclusive & Open</strong>
                <p>Our programs welcome everyone, celebrating diversity in all forms.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mission-stats-side reveal reveal-delay-2">
          <div class="stats-card">
            <div class="stats-card-header">
              <span class="stats-label">Our Impact</span>
              <h3>Making a Real Difference</h3>
            </div>
            <div class="stats-grid">
              <div class="stat-box">
                <span class="stat-number">500+</span>
                <span class="stat-desc">Families Reached</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">3</span>
                <span class="stat-desc">Core Programs</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">US</span>
                <span class="stat-desc">Based & Proud</span>
              </div>
              <div class="stat-box">
                <span class="stat-number">2025</span>
                <span class="stat-desc">Year Founded</span>
              </div>
            </div>
            <div class="stats-card-footer">
              <blockquote>
                "Every act of giving creates a ripple of purpose that touches more lives than we can imagine."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  element.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
