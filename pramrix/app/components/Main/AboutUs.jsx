'use client';

import styles from './AboutUs.module.css';

const AboutUs = () => {
  const stats = [
    { number: "100+", label: "Staff Hours Saved Monthly" },
    { number: "24/7", label: "Parent Communication" },
    { number: "Zero", label: "Manual Errors" },
    { number: "50+", label: "Processes Automated" }
  ];

  const values = [
    {
      icon: "🤖",
      title: "AI-Powered",
      description: "Smart automation that learns and improves"
    },
    {
      icon: "⚡", 
      title: "Efficiency Focused",
      description: "Eliminating administrative bottlenecks"
    },
    {
      icon: "🎯",
      title: "Education First",
      description: "Built specifically for schools and colleges"
    },
    {
      icon: "🛡️",
      title: "Reliable & Secure",
      description: "Enterprise-grade security and uptime"
    }
  ];

  return (
    <section id="about-us" className={styles.aboutUs}>
      <div className={styles.container}>
        {/* Header - SIMPLIFIED */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>About Pramrix</span>
          </div>
          <h2 className={styles.title}>
            Transforming Education Through <span className={styles.highlight}>AI Automation</span>
          </h2>
          <p className={styles.subtitle}>
            We help schools and colleges automate administrative tasks, so educators can focus on what matters most - teaching.
          </p>
        </div>

        {/* Our Story - SHORTENED */}
        <div className={styles.story}>
          <p>
            Founded by software engineers with 15+ years of experience, we saw schools struggling with manual processes 
            while technology advanced elsewhere. We built Pramrix to bring intelligent automation to education.
          </p>
        </div>

        {/* Stats - EDUCATION FOCUSED */}
        <div className={styles.stats}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values - EDUCATION THEME */}
        <div className={styles.values}>
          <h3>Why Schools Choose Us</h3>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.value}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;