'use client';

import styles from './HomepageHowWeWork.module.css';

const HomepageHowWeWork = () => {
  const implementationSteps = [
    {
      step: "01",
      title: "School Process Audit",
      description: "We analyze your current workflows, pain points, and automation opportunities",
      outcome: "Custom automation roadmap",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "AI System Design",
      description: "Build custom automation workflows for attendance, fees, and communication",
      outcome: "Tailored AI solution design",
      icon: "🤖"
    },
    {
      step: "03",
      title: "Quick Implementation", 
      description: "2-4 week setup with minimal disruption to your daily operations",
      outcome: "Fully operational system",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Ongoing Support & Training",
      description: "Staff training, performance monitoring, and continuous improvements",
      outcome: "Sustainable automation success",
      icon: "🛠️"
    }
  ];

  const results = [
    { metric: "100+", label: "Hours Saved Monthly" },
    { metric: "24/7", label: "Parent Communication" },
    { metric: "Zero", label: "Manual Errors" }
  ];

  const whyItWorks = [
    { icon: "🎯", text: "Built specifically for education" },
    { icon: "⚡", text: "Quick 2-4 week implementation" },
    { icon: "🛡️", text: "Data security first approach" },
    { icon: "📊", text: "Real-time performance dashboards" }
  ];

  return (
    <section id="how-we-work" className={styles.howWeWork}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>Implementation Process</span>
          </div>
          <h2 className={styles.title}>
            Simple 4-Step Process to<br />
            <span className={styles.highlight}>AI-Powered School Automation</span>
          </h2>
          <p className={styles.subtitle}>
            From assessment to full automation in weeks, not months. Minimal disruption, maximum impact.
          </p>
        </div>

        {/* Implementation Steps - Education Focused */}
        <div className={styles.processSection}>
          <div className={styles.processGrid}>
            {implementationSteps.map((step, index) => (
              <div key={index} className={styles.processCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepIndicator}>
                    <span className={styles.stepNumber}>{step.step}</span>
                    <div className={styles.stepIcon}>{step.icon}</div>
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                </div>
                <p className={styles.stepDescription}>{step.description}</p>
                <div className={styles.outcome}>
                  <strong>Delivers:</strong> {step.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Results - Education Focused */}
        <div className={styles.resultsSection}>
          <h3 className={styles.sectionTitle}>Typical Results for Schools</h3>
          <div className={styles.resultsGrid}>
            {results.map((result, index) => (
              <div key={index} className={styles.resultItem}>
                <div className={styles.resultMetric}>{result.metric}</div>
                <div className={styles.resultLabel}>{result.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Works - Education Focused */}
        <div className={styles.whySection}>
          <h3 className={styles.sectionTitle}>Why Schools Love Our Approach</h3>
          <div className={styles.whyGrid}>
            {whyItWorks.map((item, index) => (
              <div key={index} className={styles.whyItem}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <span className={styles.whyText}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Single CTA */}
        <div className={styles.ctaSection}>
          <h3>Ready to Transform Your School Operations?</h3>
          <p>Get a free automation assessment for your institution</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Get Free Assessment</button>
            <a href="/case-studies" className={styles.linkBtn}>View School Case Studies →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHowWeWork;