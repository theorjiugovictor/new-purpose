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
    bio: "Angeline Mbinglo holds an LLM (Master of Advanced Legal Studies) in Investment Laws in Africa. As a mother of five, including a child with special needs, she brings deep personal understanding to her role. Currently employed as a registered nurse in the USA, Angeline has over three years of dedicated experience caring for individuals with developmental disabilities under the Ohio Department of Developmental Disabilities. Her passion and dedication were instrumental in pioneering the creation of the New Purpose Nonprofit Organization.",
    image: angelineImg
  },
  {
    name: "Shiree Haines",
    role: "Vice President",
    bio: "Shiree Haines serves as the Vice President of New Purpose. She holds a degree in Educational Studies from Wilmington College and brings years of valuable experience as an Intervention Specialist in both public school cross-categorical classrooms and at Grace Academy, where she provides in-home support for children with disabilities. Dedicated to her family and faith, she and her husband Bryan are raising their eight children to be compassionate, contributing members of society. Shiree is deeply committed to raising awareness and educating others about disabilities.",
    image: shireeImg
  },
  {
    name: "Joseph Osafo",
    role: "Administrative Advisor",
    bio: "Joseph Osafo holds an MBA in Finance and brings a wealth of experience in investment banking and risk management to his role as Administrative Advisor. Beyond his professional background, Joseph is fueled by an entrepreneurial drive and a deep-seated desire to help others—a mission he considers his life’s passion. Guided by his faith and commitment to his family, he strives to lead by example in both his personal and professional life, proudly contributing his expertise to bring hope and lasting change to the community.",
    image: josephImg
  },
  {
    name: "Prince Victor Orjiugo",
    role: "IT Coordinator",
    bio: "Prince Victor Orjiugo is a dedicated IT professional who believes that behind every successful non-profit initiative is a secure, seamless, and scalable digital infrastructure. With a focus on resourceful innovation, he ensures that technology serves as a powerful multiplier for New Purpose, bridging the gap between technical solutions and community impact.",
    image: princeImg
  },
  {
    name: "Azefor Nanga",
    role: "Africa's Program Manager",
    bio: "Azefor Nanga serves as Africa’s Program Manager, holding an MSc in Development Management and Governance. She brings over six years of dedicated experience working with vulnerable individuals living with various forms of disabilities. Azefor is a passionate champion of advocacy programs, heavily focusing on disability awareness, inclusion, and empowerment initiatives in Cameroon and across the broader region.",
    image: azeforImg
  },
  {
    name: "Ibezim Uzoma Michael",
    role: "Africa's Assistant Program Manager",
    bio: "Ibezim Uzoma Michael holds a BSc in Government and Public Administration. Originally from the eastern part of Nigeria, he brings a diverse background to his role, including experience as an entrepreneur and stylist. Ibezim is deeply committed to human development and ensuring stability for people with disabilities, aligning perfectly with the core mission of New Purpose to empower and care for the community.",
    image: ibezimImg
  }
];

/*
const commentedOutMembers = [
  {
    name: "Therese Vera FOMIN Kegni",
    role: "Accountant",
    bio: "Therese Vera FOMIN Kegni is a dedicated accountant with extensive studies in Business Management and Accounting. She brings both expertise and passion to her role at New Purpose, supporting individuals with disabilities in Cameroon and Ohio. As the organization's Accountant, she ensures financial transparency, accountability, and strategic growth through meticulous financial planning, reporting, and risk management. With robust financial acumen and a strong commitment to social impact, Therese empowers the organization to maximize its funding impact and drive lasting change.",
    image: thereseImg
  },
  {
    name: "Kelly Mbenkum",
    role: "Communicative Representative",
    bio: "Kelly Mbenkum serves as the Communications Representative for New Purpose. As a dedicated nursing graduate, she is deeply passionate about empowering individuals with disabilities in Cameroon. In her role, Kelly leverages social media and storytelling to craft compelling messages that highlight the organization's mission and impact. She actively engages with the community, fosters strategic partnerships to amplify outreach, and shares powerful stories of hope and resilience.",
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
