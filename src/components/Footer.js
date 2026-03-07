import './footer.css';

export function mountFooter(element) {
  const year = new Date().getFullYear();
  element.innerHTML = `
    <div class="footer-top">
      <div class="footer-container container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#" class="footer-logo" aria-label="New Purpose Home">
              <svg class="footer-logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M24 42s-18-10.5-18-22a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 11.5-18 22-18 22z" fill="#E8392A"/>
              </svg>
              <span class="footer-logo-text">new<strong>purpose</strong></span>
            </a>
            <p class="footer-desc">
              New Purpose Non-Profit Organization is a registered US nonprofit (2025) dedicated to empowering children, women, and families through education, healthcare, and community programs.
            </p>
            <p class="footer-tagline">"Give and Gain"</p>
            <div class="footer-socials">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Our Programs</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#impact">Our Impact</a></li>
              <li><a href="#donate">Donate</a></li>
              <li><a href="#contact">Volunteer</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Programs</h4>
            <ul class="footer-links">
              <li><a href="#programs">Child Education Support</a></li>
              <li><a href="#programs">Healthcare &amp; Wellness</a></li>
              <li><a href="#programs">Community Building</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">Contact Us</h4>
            <ul class="footer-links footer-contact">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                6930 Mount Vernon St, Middletown OH 45044
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:9375669161">+1 (937) 566-9161 (Shiree)</a>
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:5136150033">+1 (513) 615-0033 (Kelly)</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; ${year} New Purpose Non-Profit Organization. All rights reserved.</p>
        <p>State of US Registered Nonprofit &bull; Doc No: 202531803912</p>
      </div>
    </div>
  `;
}
