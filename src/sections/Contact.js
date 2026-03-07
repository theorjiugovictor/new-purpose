import './contact.css';

export function mountContact(element) {
    element.innerHTML = `
    <div class="contact-container container">
      <div class="contact-header text-center reveal">
        <span class="section-label">Get in Touch</span>
        <h2 class="section-title">We'd Love to Hear<br>From You</h2>
        <div class="title-underline"></div>
        <p class="section-subtitle">Have a question, want to volunteer, or looking to partner with us? Reach out — we're here.</p>
      </div>

      <div class="contact-layout">
        <div class="contact-form-wrapper reveal reveal-delay-1">
          <form class="contact-form" id="contactForm" novalidate>
            <div class="form-group">
              <label for="contact-name" class="form-label">Full Name</label>
              <input type="text" id="contact-name" name="name" class="form-input" placeholder="Your full name" required>
            </div>
            <div class="form-group">
              <label for="contact-email" class="form-label">Email Address</label>
              <input type="email" id="contact-email" name="email" class="form-input" placeholder="you@example.com" required>
            </div>
            <div class="form-group">
              <label for="contact-subject" class="form-label">Subject</label>
              <select id="contact-subject" name="subject" class="form-input form-select">
                <option value="">Select a topic…</option>
                <option value="volunteer">Volunteer Opportunities</option>
                <option value="donate">Donation Inquiry</option>
                <option value="programs">Program Information</option>
                <option value="events">Events & Partnerships</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="contact-message" class="form-label">Message</label>
              <textarea id="contact-message" name="message" class="form-input form-textarea" placeholder="Tell us how we can help…" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-large form-submit">
              Send Message
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>

        <div class="contact-info reveal reveal-delay-2">
          <div class="contact-info-card">
            <div class="contact-info-header">
              <h3>Contact Information</h3>
              <p>Reach us directly through any of the channels below.</p>
            </div>
            <div class="contact-info-items">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>Our Address</strong>
                  <p>5539 Eureka Dr<br>Hamilton, Ohio</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <strong>Phone</strong>
                  <p>
                    <a href="tel:9375669161">Shiree: +1 (937) 566-9161</a><br>
                    <a href="tel:5136150033">Kelly: +1 (513) 615-0033</a>
                  </p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <div>
                  <strong>Payments via Zelle</strong>
                  <p>Contact Shiree or Kelly for Zelle payment details for donations and event RSVPs.</p>
                </div>
              </div>
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <strong>Incorporated</strong>
                  <p>State of Ohio, November 2025<br>Document No: 202531803912</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-tagline-card">
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M24 42s-18-10.5-18-22a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 11.5-18 22-18 22z" fill="#E8392A"/>
            </svg>
            <blockquote>"Give and Gain"</blockquote>
            <p>New Purpose Non-Profit Organization</p>
          </div>
        </div>
      </div>
    </div>
  `;

    // Simple form interaction
    const form = element.querySelector('#contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.form-submit');
        btn.textContent = 'Message Sent!';
        btn.style.background = '#16a34a';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = 'Send Message <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(el => {
            if (el.isIntersecting) el.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    element.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
