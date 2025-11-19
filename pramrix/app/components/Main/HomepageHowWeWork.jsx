'use client';

import styles from './HomepageHowWeWork.module.css';

const HomepageHowWeWork = () => {
  const processSteps = [
    {
      step: "01",
      title: "Deep Business Immersion",
      description: "We understand your business, customers, and growth bottlenecks",
      outcome: "Clear understanding of real opportunities",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Strategic Growth Blueprint",
      description: "Customized 90-day plan with priorities and success metrics",
      outcome: "Practical roadmap everyone agrees on",
      icon: "🗺️"
    },
    {
      step: "03",
      title: "Integrated Execution", 
      description: "Coordinated execution across all channels for maximum impact",
      outcome: "Fast, aligned growth implementation",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Data-Driven Optimization",
      description: "Continuous performance reviews and strategy refinement",
      outcome: "Predictable, sustainable growth",
      icon: "📊"
    }
  ];

  const results = [
    { metric: "3-5X", label: "ROI" },
    { metric: "47%", label: "More Qualified Leads" },
    { metric: "98%", label: "Client Retention" }
  ];

  const whyItWorks = [
    { icon: "👥", text: "Dedicated cross-functional team" },
    { icon: "📊", text: "Transparent reporting" },
    { icon: "🔄", text: "Agile adjustments" },
    { icon: "🎯", text: "Performance obsession" }
  ];

  return (
    <section id="how-we-work" className={styles.howWeWork}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>Our Approach</span>
          </div>
          <h2 className={styles.title}>
            A Strategic Growth System<br />
            <span className={styles.highlight}>Focused on Real Business Outcomes</span>
          </h2>
          <p className={styles.subtitle}>
            Our proven 4-step framework delivers measurable results, not just activity reports.
          </p>
        </div>

        {/* Process Steps - Simplified */}
        <div className={styles.processSection}>
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
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
                  <strong>Outcome:</strong> {step.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Works - Visual */}
        <div className={styles.whySection}>
          <h3 className={styles.sectionTitle}>Why It Works</h3>
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
          <h3>Ready to Build Your Growth Engine?</h3>
          <p>Start with a complimentary strategy session</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Start Your Strategy Session</button>
            <a href="/how-we-work" className={styles.linkBtn}>View Detailed Approach →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHowWeWork;