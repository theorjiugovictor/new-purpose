import './donate.css';

export function mountDonate(element) {
    element.innerHTML = `
    <div class="donate-wrapper">
      <div class="donate-panel donate-panel--give reveal">
        <div class="donate-panel-content">
          <span class="section-label">Give</span>
          <h2>Your Gift<br>Changes Lives</h2>
          <p>Every donation — no matter the size — goes directly to supporting our programs: child education, healthcare access, and community building across Ohio.</p>
          <ul class="donate-list">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              100% of donations fund community programs
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              State of Ohio registered nonprofit
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Tax-deductible contributions
            </li>
          </ul>
          <div class="donate-amounts">
            <button class="amount-btn">$25</button>
            <button class="amount-btn amount-btn--active">$50</button>
            <button class="amount-btn">$100</button>
            <button class="amount-btn">$250</button>
          </div>
          <a href="tel:9375669161" class="btn btn-outline-white btn-large">Donate via Zelle</a>
        </div>
      </div>
      <div class="donate-panel donate-panel--volunteer reveal reveal-delay-2">
        <div class="donate-panel-content">
          <span class="section-label-dark">Gain</span>
          <h2>Volunteer &amp;<br>Find Your Purpose</h2>
          <p>"Give and Gain" — when you serve your community, you receive immeasurable rewards: connection, fulfillment, growth, and the joy of making a real difference.</p>
          <div class="volunteer-options">
            <div class="volunteer-option">
              <div class="volunteer-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <div>
                <strong>Education Support</strong>
                <p>Tutor students & assist with learning programs</p>
              </div>
            </div>
            <div class="volunteer-option">
              <div class="volunteer-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <strong>Event Coordination</strong>
                <p>Help organize and run community events</p>
              </div>
            </div>
            <div class="volunteer-option">
              <div class="volunteer-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <strong>Community Outreach</strong>
                <p>Connect families with available resources</p>
              </div>
            </div>
          </div>
          <a href="#contact" class="btn btn-primary btn-large">Join Our Team</a>
        </div>
      </div>
    </div>
  `;

    // Amount button toggle
    element.querySelectorAll('.amount-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            element.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('amount-btn--active'));
            btn.classList.add('amount-btn--active');
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            if (el.isIntersecting) el.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    element.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
