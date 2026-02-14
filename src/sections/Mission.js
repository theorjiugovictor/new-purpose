import './mission.css';

export function mountMission(element) {
    element.innerHTML = `
    <div class="mission-container container">
      <div class="mission-header text-center">
        <h2 class="section-title">Our Mission</h2>
        <div class="title-underline"></div>
      </div>
      
      <div class="mission-content">
        <div class="mission-text">
          <h3 class="mission-heading">Compassion in Action</h3>
          <p>
            At New Purpose, we believe that every child deserves the opportunity to thrive, regardless of their physical or cognitive abilities. Our mission is to provide comprehensive support systems that bridge the gap between potential and possibility.
          </p>
          <p>
            Through specialized therapy, inclusive educational programs, and family support networks, we empower children to overcome challenges and discover their unique strengths.
          </p>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">500+</span>
              <span class="stat-label">Families Supported</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50+</span>
              <span class="stat-label">Specialists</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Dedication</span>
            </div>
          </div>
        </div>
        <div class="mission-visual">
           <!-- Decorative abstract shape or placeholder for now -->
           <div class="visual-circle"></div>
           <div class="visual-rect"></div>
        </div>
      </div>
    </div>
  `;
}
