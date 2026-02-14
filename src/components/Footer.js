import './footer.css';

export function mountFooter(element) {
    const year = new Date().getFullYear();
    element.innerHTML = `
    <div class="footer-container container">
      <div class="footer-grid">
        <div class="footer-col">
          <a href="#" class="footer-logo">New Purpose</a>
          <p class="footer-desc">Supporting children with disabilities to reach their full potential.</p>
        </div>
        <div class="footer-col">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#mission">Our Mission</a></li>
            <li><a href="#services">Programs</a></li>
            <li><a href="#volunteer">Get Involved</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-heading">Contact</h4>
          <ul class="footer-links">
            <li>123 Hope Avenue</li>
            <li>Cityville, ST 12345</li>
            <li><a href="mailto:hello@newpurpose.org">hello@newpurpose.org</a></li>
            <li>(555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p>&copy; ${year} New Purpose. All rights reserved.</p>
      </div>
    </div>
  `;
}
