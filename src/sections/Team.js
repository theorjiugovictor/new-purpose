import './team.css';
import shireeImg from '../assets/team-images/Shiree Haines.jpeg';
import angelineImg from '../assets/team-images/Angeline Mblingo.jpeg';
import thereseImg from '../assets/team-images/Therese Vera FOMIN Kegni.jpeg';
import kellyImg from '../assets/team-images/Kelly Mbenkum.jpeg';
import josephImg from '../assets/team-images/Joseph Osafo.jpeg';
import azeforImg from '../assets/team-images/Azefor Nanga.jpeg';
import ibezimImg from '../assets/team-images/Ibezim Uzoma.jpeg';
import princeImg from '../assets/team-images/Prince Victor Orjiugo.jpeg';

const teamMembers = [
  {
    name: "Angeline Mbinglo",
    role: "President",
    bio: "Angeline Mbinglo has an LLM (Masters of Advanced Legal Studies in Investment Laws in Africa). I am a parent to 5 children, so blessed to have a child of special needs amongst. I am currently employed as a nurse in the USA. I have over 3 years working experience in taking care of children and individuals with health issues and especially, developmental disabilities under the Ohio Department of Developmental Disability. I am a part of the team that pioneered in the creation of New Purpose Nonprofit Organization in Ohio USA.",
    image: angelineImg
  },
  {
    name: "Shiree Haines",
    role: "Vice President",
    bio: "My name is Shiree Haines. I have been married to my husband, Bryan, for nearly three years. Together, we have eight children—seven boys and one girl. Our family is dedicated to raising our children with a foundation of faith, guiding them to become compassionate and contributing members of society. I hold a degree in Educational Studies from Wilmington College, which I earned in 2021. I have four years of experience as an Intervention Specialist in a Cross Categorical classroom at a public school. I also work for Grace Academy as an Intervention Specialist, providing support for children with disabilities in their homes. Additionally, I serve as the Vice President on the team that established “New Purpose,” a nonprofit organization dedicated to raising awareness and educating others about disabilities.",
    image: shireeImg
  },
  {
    name: "Joseph Osafo",
    role: "Administrative Advisor",
    bio: "Joseph Osafo holds an MBA in Finance, and brings a wealth of experience in investment banking and risk management to his role as Administrative Advisor. Beyond his professional background, Joseph is fueled by an entrepreneurial drive and a deep-seated desire to help others—a mission he considers his life’s passion. Guided by his faith and commitment to his family, he strives to lead by example in both his personal and professional life. Joseph is proud to contribute his expertise toward the organization's goal of bringing hope and lasting change to the lives of many.",
    image: josephImg
  },
  {
    name: "Prince Victor Orjiugo",
    role: "IT Coordinator",
    bio: "Prince Victor Orjiugo is a dedicated IT professional who believes that behind every successful non-profit initiative is a secure, seamless, and scalable digital infrastructure. With a focus on resourceful innovation, he ensures that technology serves as a powerful multiplier for New Purpose Nonprofit organization’s mission.",
    image: princeImg
  },
  {
    name: "Azefor Nanga",
    role: "Africa's Program Manager",
    bio: "Azefor Nanga - Africa’s program manager holds an MSc in Development Management and Governance. She has 6+ years working with vulnerable persons living with various forms of disability. Championing advocacy programs focusing on disability issues in Cameroon and beyond!",
    image: azeforImg
  },
  {
    name: "Ibezim Uzoma Michael",
    role: "Africa's Assistant Program Manager",
    bio: "Ibezim Uzoma Michael has a BSc in Government and Public Administration/Political Science. I am from the Eastern part of Nigeria and also a male stylist. Human development and stability in disability is what New Purpose Nonprofit organization has come to take care of.",
    image: ibezimImg
  }
];

/*
const commentedOutMembers = [
  {
    name: "Therese Vera FOMIN Kegni",
    role: "Accountant",
    bio: "Therese Vera FOMIN Kegni, a dedicated accountant with a High School Diplomacy in Accounting and three years of studies in Business Management and Accounting, brings expertise and passion to her role at New purpose, supporting individuals with disabilities in Cameroon and Ohio. As the organization's Accountant, she will ensure financial transparency, accountability, and strategic growth through meticulous financial planning, reporting, and risk management. With my financial acumen and commitment to social impact, she will empower New purpose organization to maximize funding impact, build stakeholder trust, and drive lasting change.",
    image: thereseImg
  },
  {
    name: "Kelly Mbenkum",
    role: "Communicative Representative",
    bio: "My name is Kelly Mbenkum and I am the communicative representative of new purpose nonprofit organization. As a dedicated nursing graduate, I'm passionate about empowering individuals with disabilities in Cameroon. As the Communicative Representative of New Purpose, I'll leverage social media and storytelling to craft compelling messages highlighting our mission and impact. Engage with our community and stakeholders. Foster partnerships to amplify our reach. Share stories of hope and resilience.",
    image: kellyImg
  }
];
*/

export function mountTeam(element) {
  element.innerHTML = `
    <div class="container section-padding">
      <div class="section-header text-center">
        <span class="section-tag animate-fade-up">Our Leadership</span>
        <h2 class="section-title animate-fade-up delay-1">Meet the Team Behind <span class="text-primary">New Purpose</span></h2>
        <p class="section-subtitle animate-fade-up delay-2">We are a dedicated group of individuals passionate about making a difference in the lives of children with disabilities and our community.</p>
      </div>
      <div class="team-grid">
        ${teamMembers.map((member, index) => `
          <div class="team-member-card animate-fade-up delay-${(index + 3) % 4}">
            <div class="team-member-image">
              <img src="${member.image}" alt="${member.name}" loading="lazy" />
            </div>
            <div class="team-member-info">
              <h3 class="team-member-name">${member.name}</h3>
              <p class="team-member-role">${member.role}</p>
              <p class="team-member-bio">${member.bio}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
