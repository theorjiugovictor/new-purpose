import './donate.css';

export function mountDonate(element) {
    element.innerHTML = `
    <div class="donate-container container text-center">
      <h2 class="donate-title">Make a Difference Today</h2>
      <p class="donate-text">
        Your generosity helps us provide essential therapy, education tools, and community support to families in need. Every contribution counts.
      </p>
      <div class="donate-actions">
        <a href="#donate-now" class="btn btn-primary btn-large">Donate Now</a>
        <a href="#volunteer" class="btn btn-secondary-white">Volunteer With Us</a>
      </div>
    </div>
  `;
}
