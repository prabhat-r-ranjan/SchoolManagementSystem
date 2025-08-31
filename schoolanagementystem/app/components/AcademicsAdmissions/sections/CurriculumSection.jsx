// components/AcademicsAdmissions/sections/CurriculumSection.jsx
import React from 'react';
import styles from './CurriculumSection.module.css';

const CurriculumSection = () => {
  return (
    <section id="curriculum" className={styles.section}>
      <div className={styles.sectionHeader}>
        <i className="fas fa-book-open"></i>
        <h2>Curriculum Overview</h2>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.textContent}>
          <p className={styles.lead}>At Savitri Devi International School, we offer a comprehensive CBSE curriculum that balances academic rigor with holistic development, preparing students for excellence in Class 10 board examinations and beyond.</p>
          
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-brain"></i>
              </div>
              <h3>CBSE Excellence</h3>
              <p>Following the Central Board of Secondary Education curriculum with enhanced pedagogical approaches and international perspectives</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Outlook</h3>
              <p>Integration of global issues, cultural awareness, and contemporary topics across all subjects up to Class 10</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3>Value-Based Education</h3>
              <p>Emphasis on ethical values, social responsibility, and emotional intelligence integrated throughout the curriculum</p>
            </div>
          </div>

          <div className={styles.curriculumDetails}>
            <h3>Academic Structure (Classes 1-10)</h3>
            <div className={styles.curriculumLevels}>
              <div className={styles.level}>
                <h4>Primary Level (Classes 1-5)</h4>
                <ul>
                  <li>English, Hindi, Mathematics, Environmental Studies</li>
                  <li>Introduction to Computer Science and Value Education</li>
                  <li>Art, Music, and Physical Education integration</li>
                </ul>
              </div>
              <div className={styles.level}>
                <h4>Middle Level (Classes 6-8)</h4>
                <ul>
                  <li>English, Hindi, Mathematics, Science, Social Science</li>
                  <li>Computer Applications, Third Language (Sanskrit/French)</li>
                  <li>Life Skills and Career Awareness programs</li>
                </ul>
              </div>
              <div className={styles.level}>
                <h4>Secondary Level (Classes 9-10)</h4>
                <ul>
                  <li>English, Hindi, Mathematics, Science, Social Science</li>
                  <li>Information Technology, Artificial Intelligence</li>
                  <li>Comprehensive board examination preparation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.learningApproach}>
            <h3>Our Learning Approach</h3>
            <div className={styles.approachGrid}>
              <div className={styles.approachItem}>
                <div className={styles.approachNumber}>01</div>
                <div className={styles.approachContent}>
                  <h4>Holistic Development</h4>
                  <p>Focus on cognitive, physical, emotional, and social development through integrated learning experiences</p>
                </div>
              </div>
              <div className={styles.approachItem}>
                <div className={styles.approachNumber}>02</div>
                <div className={styles.approachContent}>
                  <h4>Skill-Based Learning</h4>
                  <p>Emphasis on critical thinking, creativity, communication, and collaboration skills</p>
                </div>
              </div>
              <div className={styles.approachItem}>
                <div className={styles.approachNumber}>03</div>
                <div className={styles.approachContent}>
                  <h4>Technology Integration</h4>
                  <p>Seamless incorporation of digital tools and resources to enhance learning outcomes</p>
                </div>
              </div>
              <div className={styles.approachItem}>
                <div className={styles.approachNumber}>04</div>
                <div className={styles.approachContent}>
                  <h4>Assessment for Learning</h4>
                  <p>Continuous and comprehensive evaluation that focuses on growth and improvement</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.curriculumFeatures}>
            <h3>Special Curriculum Features</h3>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <i className="fas fa-star"></i>
                <div>
                  <h4>STEM Education</h4>
                  <p>Integrated Science, Technology, Engineering, and Mathematics program with hands-on experiments and projects</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <i className="fas fa-palette"></i>
                <div>
                  <h4>Creative Arts</h4>
                  <p>Comprehensive arts program including visual arts, music, dance, and theater to foster creativity</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <i className="fas fa-heart"></i>
                <div>
                  <h4>Wellness Program</h4>
                  <p>Yoga, meditation, and physical education integrated into the daily schedule for holistic well-being</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <i className="fas fa-seedling"></i>
                <div>
                  <h4>Environmental Education</h4>
                  <p>Sustainability practices and ecological awareness woven throughout the curriculum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;