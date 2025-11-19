'use client';

import styles from './AboutUs.module.css';

const AboutUs = () => {
  const stats = [
    { number: "50+", label: "Businesses Transformed" },
    { number: "3-5X", label: "Average ROI Delivered" },
    { number: "98%", label: "Client Retention Rate" },
    { number: "24/7", label: "Strategic Partnership" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Data-Driven Approach",
      description: "Decisions based on analytics, not guesswork"
    },
    {
      icon: "🚀",
      title: "Results-Obsessed", 
      description: "Focused on measurable growth and outcomes"
    },
    {
      icon: "🤝",
      title: "Partnership Mindset",
      description: "We work as an extension of your team"
    },
    {
      icon: "💡",
      title: "Innovation Focused",
      description: "Always adapting to stay ahead of trends"
    }
  ];

  return (
    <section id="about-us" className={styles.aboutUs}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>Our Story</span>
          </div>
          <h2 className={styles.title}>
            Your <span className={styles.highlight}>Strategic Growth Partner</span>
          </h2>
          <p className={styles.subtitle}>
            We're your dedicated growth team, combining strategy and execution to drive real business results.
          </p>
        </div>

        {/* Why We Exist - Simplified */}
        <div className={styles.storySection}>
          <h3>Why We Exist</h3>
          <p>
            Growing your business requires more than just tactics—it needs a partner who understands your vision 
            and turns it into measurable growth. We blend strategy with execution to make that happen.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className={styles.missionVision}>
          <div className={styles.mission}>
            <h4>Our Mission</h4>
            <p>To be your most trusted growth partner for sustainable scaling.</p>
          </div>
          <div className={styles.vision}>
            <h4>Our Vision</h4>
            <p>To redefine growth through strategic partnership and expert execution.</p>
          </div>
        </div>

        {/* Stats - Quick Scan */}
        <div className={styles.statsSection}>
          <h3>Our Impact</h3>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values - Visual & Quick */}
        <div className={styles.valuesSection}>
          <h3>Our Core Values</h3>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Approach - Short & Sweet */}
        <div className={styles.teamSection}>
          <h3>Your Dedicated Growth Team</h3>
          <p>We become an extension of your team, working together to achieve your goals.</p>
          <div className={styles.teamFeatures}>
            <div className={styles.teamFeature}>
              <span className={styles.featureIcon}>👥</span>
              <span>Dedicated Team</span>
            </div>
            <div className={styles.teamFeature}>
              <span className={styles.featureIcon}>📊</span>
              <span>Monthly Reviews</span>
            </div>
            <div className={styles.teamFeature}>
              <span className={styles.featureIcon}>⚡</span>
              <span>Agile Execution</span>
            </div>
            <div className={styles.teamFeature}>
              <span className={styles.featureIcon}>🎯</span>
              <span>Performance Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;