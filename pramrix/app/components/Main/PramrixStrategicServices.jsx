'use client';

import styles from './PramrixStrategicServices.module.css';

const PramrixStrategicService = () => {
  const strategicPillars = [
    {
      icon: "🎯",
      title: "Growth Strategy & Planning",
      description: "Data-driven roadmap for sustainable growth",
      outcome: "Clear 12-month growth plan"
    },
    {
      icon: "🚀",
      title: "Digital Transformation", 
      description: "Optimize your online presence across all channels",
      outcome: "Strong digital foundation"
    },
    {
      icon: "💸",
      title: "Revenue Acceleration",
      description: "Performance marketing that delivers measurable ROI",
      outcome: "3-5X return on investment"
    },
    {
      icon: "📈",
      title: "Brand Authority",
      description: "Establish your brand as the trusted industry leader",
      outcome: "Increased trust and credibility"
    }
  ];

  const partnershipBenefits = [
    {
      icon: "👥",
      title: "Dedicated Team",
      description: "Your own strategists and specialists"
    },
    {
      icon: "📊", 
      title: "Transparent Results",
      description: "Clear reporting and performance metrics"
    },
    {
      icon: "🎯",
      title: "Performance Focus",
      description: "Guaranteed results and accountability"
    },
    {
      icon: "⚡",
      title: "Agile Approach",
      description: "Adapt quickly to market changes"
    }
  ];

  return (
    <section id="strategic-services" className={styles.strategicServices}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>Strategic Partnership</span>
          </div>
          <h2 className={styles.title}>
            Your <span className={styles.highlight}>Strategic Growth Partner</span>
          </h2>
          <p className={styles.subtitle}>
            Most businesses struggle with fragmented marketing efforts. We provide integrated strategies 
            that deliver real results—not just activity reports.
          </p>
        </div>

        {/* Strategic Pillars - Simplified */}
        <div className={styles.pillarsSection}>
          <div className={styles.pillarsGrid}>
            {strategicPillars.map((pillar, index) => (
              <div key={index} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDescription}>{pillar.description}</p>
                <div className={styles.outcome}>
                  <span className={styles.outcomeValue}>{pillar.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits - Compact */}
        <div className={styles.benefitsSection}>
          <h3 className={styles.sectionTitle}>Why Choose Strategic Partnership?</h3>
          <p className={styles.sectionSubtitle}>
            Move beyond transactional agency relationships to true partnership
          </p>
          <div className={styles.benefitsGrid}>
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Single CTA */}
        <div className={styles.ctaSection}>
          <h3>Ready for Strategic Growth?</h3>
          <p>Let's build your customized growth plan together</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Start Your Journey</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PramrixStrategicService;