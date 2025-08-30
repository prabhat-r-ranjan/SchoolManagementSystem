// AcademicProgram.jsx
"use client";
import React, { useState } from 'react';
import styles from './AcademicProgram.module.css';

const AcademicProgram = () => {
  const [activeTab, setActiveTab] = useState(0);

  const programs = [
    {
      title: "Primary Years (1-5)",
      icon: "🌟",
      description: "Our primary program focuses on building strong foundations in core subjects while nurturing curiosity and creativity through hands-on learning experiences.",
      features: [
        "Interactive learning with educational games",
        "Foundational literacy and numeracy skills",
        "Introduction to science through exploration",
        "Creative arts and expression",
        "Social skills development"
      ],
      stats: ["Small class sizes", "Daily physical activity", "Thematic learning units"]
    },
    {
      title: "Middle School (6-8)",
      icon: "🔍",
      description: "Our middle school program challenges students to think critically, explore their interests, and develop strong academic habits in preparation for higher studies.",
      features: [
        "Project-based learning approach",
        "STEM integration across subjects",
        "Language arts and communication skills",
        "Introduction to world cultures",
        "Technology and digital literacy"
      ],
      stats: ["Specialized subject teachers", "Leadership opportunities", "Extracurricular clubs"]
    },
    {
      title: "Special Programs",
      icon: "🎯",
      description: "Beyond our core curriculum, we offer specialized programs to develop well-rounded individuals with diverse skills and interests.",
      features: [
        "Arts and music appreciation",
        "Sports and physical education",
        "Environmental awareness",
        "Public speaking and drama",
        "Community service projects"
      ],
      stats: ["Annual cultural festival", "Sports day events", "Science fair exhibition"]
    }
  ];

  return (
    <section id="academic-program" className={styles.academicSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Nurturing <span className={styles.highlight}>Young Minds</span></h2>
          <p>Our innovative curriculum is designed to inspire curiosity, foster creativity, and build strong foundations for lifelong learning.</p>
        </div>

        <div className={styles.tabs}>
          {programs.map((program, index) => (
            <button
              key={index}
              className={`${styles.tab} ${activeTab === index ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className={styles.tabIcon}>{program.icon}</span>
              {program.title}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          <div className={styles.programInfo}>
            <h3>{programs[activeTab].title}</h3>
            <p>{programs[activeTab].description}</p>
            
            <div className={styles.features}>
              <h4>Key Features</h4>
              <div className={styles.featuresGrid}>
                {programs[activeTab].features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.visualSection}>
            <div className={styles.statsBox}>
              <h4>Program Highlights</h4>
              <div className={styles.statsGrid}>
                {programs[activeTab].stats.map((stat, index) => (
                  <div key={index} className={styles.statItem}>
                    <div className={styles.statIcon}>{index + 1}</div>
                    <span>{stat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.learningGraphic}>
              <div className={styles.graphicElement}></div>
              <div className={styles.graphicElement}></div>
              <div className={styles.graphicElement}></div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.ctaBox}>
            <h3>Experience Our Learning Environment</h3>
            <p>Schedule a campus tour to see our innovative teaching methods in action.</p>
            <button className={styles.ctaButton}>Schedule a Visit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProgram;