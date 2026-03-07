import './style.css'
import { mountHeader } from './components/Header.js';
import { mountHero } from './sections/Hero.js';
import { mountMission } from './sections/Mission.js';
import { mountServices } from './sections/Services.js';
import { mountTeam } from './sections/Team.js';
import { mountEvents } from './sections/Events.js';
import { mountImpact } from './sections/Impact.js';
import { mountDonate } from './sections/Donate.js';
import { mountContact } from './sections/Contact.js';
import { mountFooter } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
  <div class="app-container">
    <header id="header" role="banner"></header>
    <main id="main-content">
      <section id="hero" aria-label="Hero"></section>
      <section id="about" aria-label="About Us"></section>
      <section id="programs" aria-label="Our Programs"></section>
      <section id="team" aria-label="Our Leadership Team"></section>
      <section id="events" aria-label="Events"></section>
      <section id="impact" aria-label="Our Impact"></section>
      <section id="donate" aria-label="Donate and Volunteer"></section>
      <section id="contact" aria-label="Contact Us"></section>
    </main>
    <footer id="footer" role="contentinfo"></footer>
  </div>
`

mountHeader(document.querySelector('#header'));
mountHero(document.querySelector('#hero'));
mountMission(document.querySelector('#about'));
mountServices(document.querySelector('#programs'));
mountTeam(document.querySelector('#team'));
mountEvents(document.querySelector('#events'));
mountImpact(document.querySelector('#impact'));
mountDonate(document.querySelector('#donate'));
mountContact(document.querySelector('#contact'));
mountFooter(document.querySelector('#footer'));
