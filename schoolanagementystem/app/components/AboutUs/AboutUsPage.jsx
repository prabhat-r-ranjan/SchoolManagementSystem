// components/AboutUs/AboutUsPage.jsx
"use client";
import React, { useState } from 'react';
import styles from './AboutUsPage.module.css';

const AboutUsPage = () => {
  const [activeSection, setActiveSection] = useState('history');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>About Savitri Devi International School</h1>
        <p>Opening April 2026 - Admissions starting December 2025</p>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.sidebar}>
          <h3>About Our School</h3>
          <ul>
            <li>
              <button 
                className={activeSection === 'history' ? styles.active : ''}
                onClick={() => scrollToSection('history')}
              >
                School History
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'vision' ? styles.active : ''}
                onClick={() => scrollToSection('vision')}
              >
                Vision & Mission
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'principal' ? styles.active : ''}
                onClick={() => scrollToSection('principal')}
              >
                Principal's Message
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'leadership' ? styles.active : ''}
                onClick={() => scrollToSection('leadership')}
              >
                Leadership Team
              </button>
            </li>
            <li>
              <button 
                className={activeSection === 'accreditation' ? styles.active : ''}
                onClick={() => scrollToSection('accreditation')}
              >
                Accreditation
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.mainContent}>
          <section id="history" className={styles.section}>
            <h2>School History</h2>
            <div className={styles.content}>
              <div className={styles.text}>
                <p>Savitri Devi International School is a visionary educational project set to open its doors in April 2026. Founded with a commitment to excellence in education, our institution represents the culmination of years of planning and dedication to creating a world-class learning environment for the next generation of leaders.</p>
                
                <p>Our state-of-the-art campus spans 10 acres of thoughtfully designed space that includes modern classrooms, advanced science and computer laboratories, extensive sports facilities, dedicated art and music rooms, and lush green areas for environmental learning. Every aspect of our infrastructure has been designed with the holistic development of students in mind.</p>
                
                <p>As we prepare for our inaugural academic year beginning April 2026, we are building a team of exceptional educators and developing innovative curricula that balance academic rigor with character development. Admissions will open in December 2025, welcoming the first cohort of students who will help shape the traditions and culture of our growing community.</p>
                
                <p>While we may be new, our educational philosophy is built on time-tested principles of excellence, integrity, and innovation. We are committed to establishing Savitri Devi International School as a benchmark for quality education in the region.</p>
              </div>
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholder}>
                  <i className="fas fa-school"></i>
                  <p>Coming April 2026</p>
                </div>
              </div>
            </div>
          </section>

          <section id="vision" className={styles.section}>
            <h2>Vision & Mission</h2>
            <div className={styles.content}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <i className="fas fa-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>To create a transformative educational environment that nurtures innovative thinkers, compassionate leaders, and globally-minded citizens who are prepared to excel in an ever-changing world.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>To provide exceptional education through innovative teaching methodologies, state-of-the-art facilities, and a holistic approach that develops academic excellence, character, creativity, and critical thinking skills in every student.</p>
              </div>
            </div>
            <div className={styles.values}>
              <h3>Our Core Values</h3>
              <ul>
                <li><i className="fas fa-check-circle"></i> Excellence in all endeavors</li>
                <li><i className="fas fa-check-circle"></i> Integrity and ethical conduct</li>
                <li><i className="fas fa-check-circle"></i> Innovation and creativity</li>
                <li><i className="fas fa-check-circle"></i> Respect for diversity and inclusion</li>
                <li><i className="fas fa-check-circle"></i> Social responsibility and community service</li>
                <li><i className="fas fa-check-circle"></i> Lifelong learning and growth mindset</li>
              </ul>
            </div>
          </section>

          <section id="principal" className={styles.section}>
            <h2>Principal's Message</h2>
            <div className={styles.content}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.principalPhoto}>
                  <i className="fas fa-user-tie"></i>
                  <p>Dr. Rajesh Sharma<br/>Founding Principal</p>
                </div>
              </div>
              <div className={styles.text}>
                <blockquote>
                  "We are not just building a school; we are building a legacy of excellence that will inspire generations to come."
                </blockquote>
                <p>Dear Prospective Students and Parents,</p>
                <p>It is with great excitement that I welcome you to Savitri Devi International School, a new chapter in educational excellence opening in April 2026. As we prepare to embark on this remarkable journey, I am filled with anticipation for the incredible learning community we are building together.</p>
                <p>Our vision for SDIS is to create an educational environment where curiosity is nurtured, talents are discovered, and character is built. We are assembling a team of passionate educators who share our commitment to innovative teaching and personalized learning approaches that will prepare students for the challenges and opportunities of the 21st century.</p>
                <p>While our campus is new, our commitment to excellence is timeless. We are creating state-of-the-art facilities, developing rigorous academic programs, and fostering a culture of respect, integrity, and global citizenship. Our doors will open in April 2026, with admissions beginning in December 2025 for our founding student cohort.</p>
                <p>I invite you to join us in creating something extraordinary—a school where every child can thrive, achieve their potential, and develop into well-rounded individuals ready to make meaningful contributions to the world.</p>
                <p className={styles.signature}>Warm regards,<br />Dr. Rajesh Sharma<br /><em>Founding Principal</em></p>
              </div>
            </div>
          </section>

          <section id="leadership" className={styles.section}>
            <h2>Leadership Team</h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3>Dr. Rajesh Sharma</h3>
                <p className={styles.role}>Founding Principal</p>
                <p>Ph.D. in Educational Leadership, 25+ years experience in international education, formerly Principal at Delhi Public School</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h3>Mrs. Anjali Mehta</h3>
                <p className={styles.role}>Academic Director</p>
                <p>M.Ed., Curriculum Development Specialist, 20 years experience in designing innovative educational programs</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Mr. Vikram Singh</h3>
                <p className={styles.role}>Head of Operations</p>
                <p>B.Tech, MBA, 15 years experience in educational administration and infrastructure management</p>
              </div>
              <div className={styles.teamMember}>
                <div className={styles.memberPhoto}>
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Ms. Priya Desai</h3>
                <p className={styles.role}>Student Wellness Director</p>
                <p>M.A. Psychology, Certified Counselor, Specialist in student mental health and well-being programs</p>
              </div>
            </div>
          </section>

          <section id="accreditation" className={styles.section}>
            <h2>Accreditation & Affiliations</h2>
            <div className={styles.content}>
              <p>Savitri Devi International School is in the process of securing accreditation from leading educational bodies to ensure we meet the highest standards of educational excellence from our opening in April 2026.</p>
              
              <div className={styles.accreditationList}>
                <div className={styles.accreditationItem}>
                  <div className={styles.accreditationLogo}>
                    <i className="fas fa-award"></i>
                  </div>
                  <div className={styles.accreditationDetails}>
                    <h3>Central Board of Secondary Education (CBSE)</h3>
                    <p>Provisional affiliation application submitted</p>
                    <p>Expected affiliation before April 2026 opening</p>
                  </div>
                </div>
                
                <div className={styles.accreditationItem}>
                  <div className={styles.accreditationLogo}>
                    <i className="fas fa-globe"></i>
                  </div>
                  <div className={styles.accreditationDetails}>
                    <h3>International Educational Memberships</h3>
                    <p>Application pending for membership in international educational associations</p>
                    <p>Partnership discussions with global educational organizations underway</p>
                  </div>
                </div>
                
                <div className={styles.accreditationItem}>
                  <div className={styles.accreditationLogo}>
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div className={styles.accreditationDetails}>
                    <h3>Industry Partnerships</h3>
                    <p>Developing collaborations with technology companies for digital learning initiatives</p>
                    <p>Partnerships with cultural and sports organizations for enhanced student programs</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.note}>
                <p><strong>Note:</strong> All accreditation processes are scheduled for completion prior to our April 2026 opening. We are committed to meeting and exceeding all regulatory requirements to provide the highest quality education for our students.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;