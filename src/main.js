import './style.css'
import { mountHeader } from './components/Header.js';
import { mountHero } from './sections/Hero.js';
import { mountMission } from './sections/Mission.js';
import { mountServices } from './sections/Services.js';
import { mountDonate } from './sections/Donate.js';
import { mountFooter } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
  <div class="app-container">
    <header id="header"></header>
    <main>
        <section id="hero"></section>
        <section id="mission"></section>
        <section id="services"></section>
        <section id="donate"></section>
    </main>
    <footer id="footer"></footer>
  </div>
`

mountHeader(document.querySelector('#header'));
mountHero(document.querySelector('#hero'));
mountMission(document.querySelector('#mission'));
mountServices(document.querySelector('#services'));
mountDonate(document.querySelector('#donate'));
mountFooter(document.querySelector('#footer'));
