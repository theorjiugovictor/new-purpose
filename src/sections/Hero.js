import './hero.css';
import heroBg from '../assets/hero-bg.png';

export function mountHero(element) {
    element.innerHTML = `
    <div class="hero-background" style="background-image: url('${heroBg}')">
      <div class="overlay"></div>
    </div>
    <div class="hero-content container">
      <h1 class="hero-title animate-fade-up">Empowering Every Child's Potential</h1>
      <p class="hero-subtitle animate-fade-up delay-100">
        New Purpose provides therapy, education, and community for children with varying abilities.
        Together, we build a future where every child belongs.
      </p>
      <div class="hero-actions animate-fade-up delay-200">
        <a href="#donate" class="btn btn-primary">Get Involved</a>
        <a href="#services" class="btn btn-secondary-light">Our Programs</a>
      </div>
    </div>
  `;
}
