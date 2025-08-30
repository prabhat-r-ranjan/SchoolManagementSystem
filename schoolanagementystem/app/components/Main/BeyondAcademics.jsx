// BeyondAcademics.jsx
"use client";
import React, { useState } from 'react';
import styles from './BeyondAcademics.module.css';

const BeyondAcademics = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: "Arts & Creativity",
      icon: "🎨",
      description: "Nurturing creative expression and artistic talents through diverse mediums and techniques.",
      programs: [
        {
          name: "Visual Arts Studio",
          description: "Drawing, painting, sculpture and digital art programs"
        },
        {
          name: "Performing Arts",
          description: "Music, theater, dance and drama performances"
        },
        {
          name: "Creative Writing",
          description: "Poetry, storytelling and journalism workshops"
        }
      ],
      stats: ["Annual art exhibition", "Theater productions", "Music recitals"]
    },
    {
      title: "Sports & Wellness",
      icon: "⚽",
      description: "Promoting physical fitness, teamwork, and healthy competition through diverse athletic programs.",
      programs: [
        {
          name: "Team Sports",
          description: "Soccer, basketball, volleyball and cricket teams"
        },
        {
          name: "Individual Athletics",
          description: "Track and field, swimming, martial arts"
        },
        {
          name: "Health Education",
          description: "Nutrition, mindfulness and wellness programs"
        }
      ],
      stats: ["Inter-school competitions", "Annual sports day", "Yoga & meditation"]
    },
    {
      title: "Leadership & Service",
      icon: "🌟",
      description: "Developing character, empathy and leadership skills through community engagement and service projects.",
      programs: [
        {
          name: "Student Council",
          description: "Student government and leadership opportunities"
        },
        {
          name: "Community Service",
          description: "Local outreach and environmental initiatives"
        },
        {
          name: "Global Awareness",
          description: "Cultural exchanges and global citizenship programs"
        }
      ],
      stats: ["Community projects", "Student-led initiatives", "International partnerships"]
    },
    {
      title: "STEM & Innovation",
      icon: "🔬",
      description: "Fostering curiosity, problem-solving and innovation through hands-on science and technology programs.",
      programs: [
        {
          name: "Robotics Club",
          description: "Design, build and program robotic solutions"
        },
        {
          name: "Science Fair",
          description: "Annual exhibition of student research and experiments"
        },
        {
          name: "Coding Workshops",
          description: "Programming, app development and digital creativity"
        }
      ],
      stats: ["Tech competitions", "Maker space", "Innovation challenges"]
    }
  ];

  return (
    <section id="beyond-academics" className={styles.beyondSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Education <span className={styles.highlight}>Beyond</span> the Classroom</h2>
          <p>We believe true education extends far beyond textbooks. Our holistic programs develop well-rounded individuals prepared for life's challenges.</p>
        </div>

        <div className={styles.categories}>
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`${styles.categoryCard} ${activeCategory === index ? styles.active : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              <div className={styles.categoryIcon}>{category.icon}</div>
              <h3>{category.title}</h3>
            </div>
          ))}
        </div>

        <div className={styles.content}>
          <div className={styles.programs}>
            <h3>{categories[activeCategory].title}</h3>
            <p>{categories[activeCategory].description}</p>
            
            <div className={styles.programsGrid}>
              {categories[activeCategory].programs.map((program, index) => (
                <div key={index} className={styles.programCard}>
                  <div className={styles.programHeader}>
                    <div className={styles.programDot}></div>
                    <h4>{program.name}</h4>
                  </div>
                  <p>{program.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.visuals}>
            <div className={styles.statsBox}>
              <h4>Program Highlights</h4>
              <ul>
                {categories[activeCategory].stats.map((stat, index) => (
                  <li key={index}>
                    <span className={styles.statIcon}>→</span>
                    {stat}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.graphic}>
              <div className={styles.orbitalSystem}>
                <div className={styles.centerCircle}></div>
                <div className={styles.orbit}></div>
                <div className={styles.orbit}></div>
                <div className={styles.orbit}></div>
                <div className={styles.orbitingItem}></div>
                <div className={styles.orbitingItem}></div>
                <div className={styles.orbitingItem}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.quote}>
          <blockquote>
            "Education is not the filling of a pail, but the lighting of a fire."
            <footer>— William Butler Yeats</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default BeyondAcademics;