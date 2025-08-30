import React from 'react';
import styles from './LeadershipSection.module.css';

const LeadershipSection = () => {
  const leadershipTeam = [
    {
      name: "Dr. Priya Sharma",
      position: "Founding Principal",
      credentials: "Ph.D in Education, 25+ years experience",
      description: "Former principal of top international schools across Asia and Europe. Visionary educator with a proven track record of establishing excellence.",
      image: "👩‍🏫", // Replace with actual image path
      accentColor: "#c89b3c"
    },
    {
      name: "Mr. Vikram Mehta",
      position: "Chairman & Founder",
      credentials: "MBA, Harvard Business School",
      description: "Successful entrepreneur and philanthropist passionate about transforming education. Committed to creating world-class learning environments.",
      image: "👨‍💼", // Replace with actual image path
      accentColor: "#0f2d53"
    },
    {
      name: "Dr. Ananya Patel",
      position: "Academic Director",
      credentials: "Ed.D, Curriculum Development Specialist",
      description: "Expert in innovative curriculum design with extensive experience in International Baccalaureate and Cambridge programs.",
      image: "👩‍🎓", // Replace with actual image path
      accentColor: "#2c5aa0"
    }
  ];

  return (
    <section id="leadership" className={styles.leadershipSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Meet Our <span className={styles.highlight}>Visionary Leadership</span></h2>
          <p>The foundation of Savitri Devi International School is built upon the expertise and passion of our distinguished founding team.</p>
        </div>

        <div className={styles.leadershipGrid}>
          {leadershipTeam.map((leader, index) => (
            <div key={index} className={styles.leaderCard}>
              <div className={styles.leaderImage} style={{ backgroundColor: leader.accentColor + '20' }}>
                <span className={styles.leaderIcon}>{leader.image}</span>
              </div>
              <div className={styles.leaderContent}>
                <h3>{leader.name}</h3>
                <p className={styles.position}>{leader.position}</p>
                <p className={styles.credentials}>{leader.credentials}</p>
                <p className={styles.description}>{leader.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.foundingPromise}>
          <div className={styles.promiseContent}>
            <h3>Our Founding Promise</h3>
            <p>We are committed to creating an institution where academic excellence meets character development, and where every student is prepared to lead in a global society.</p>
            <div className={styles.promiseStats}>
              <div className={styles.promiseStat}>
                <span className={styles.statNumber}>1:12</span>
                <span className={styles.statLabel}>Teacher-Student Ratio</span>
              </div>
              <div className={styles.promiseStat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Qualified Faculty</span>
              </div>
              <div className={styles.promiseStat}>
                <span className={styles.statNumber}>2026</span>
                <span className={styles.statLabel}>Founding Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;