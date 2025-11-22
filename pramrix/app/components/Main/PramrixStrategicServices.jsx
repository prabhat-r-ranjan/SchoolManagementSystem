'use client';

import styles from './PramrixStrategicServices.module.css';

const PramrixStrategicService = () => {
  const automationServices = [
    {
      icon: "📊",
      title: "Attendance Automation",
      description: "Automated tracking with instant parent alerts via WhatsApp/SMS",
      outcome: "Zero manual attendance work"
    },
    {
      icon: "💬",
      title: "Parent Communication", 
      description: "24/7 AI-powered chatbot for queries, alerts, and updates",
      outcome: "80% fewer office calls"
    },
    {
      icon: "💰",
      title: "Fee Management",
      description: "Automated reminders, payment tracking, and receipt generation",
      outcome: "100% fee tracking accuracy"
    },
    {
      icon: "🎓",
      title: "Student Performance",
      description: "AI analytics for early intervention and personalized learning",
      outcome: "Improved student outcomes"
    }
  ];

  const partnershipBenefits = [
    {
      icon: "🤖",
      title: "AI-Powered",
      description: "Smart automation that learns and improves"
    },
    {
      icon: "⚡", 
      title: "Quick Setup",
      description: "Fully operational in 2-4 weeks"
    },
    {
      icon: "🛡️",
      title: "Data Secure",
      description: "On-premise or cloud deployment options"
    },
    {
      icon: "📈",
      title: "Proven Results",
      description: "100+ hours saved monthly guaranteed"
    }
  ];

  return (
    <section id="automation-services" className={styles.strategicServices}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>AI Automation Solutions</span>
          </div>
          <h2 className={styles.title}>
            Transform Your School with <span className={styles.highlight}>AI Automation</span>
          </h2>
          <p className={styles.subtitle}>
            Replace manual administrative work with intelligent systems that work 24/7. 
            Free your staff to focus on education, not paperwork.
          </p>
        </div>

        {/* Automation Services - Education Focused */}
        <div className={styles.pillarsSection}>
          <div className={styles.pillarsGrid}>
            {automationServices.map((service, index) => (
              <div key={index} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>{service.icon}</div>
                <h3 className={styles.pillarTitle}>{service.title}</h3>
                <p className={styles.pillarDescription}>{service.description}</p>
                <div className={styles.outcome}>
                  <span className={styles.outcomeValue}>{service.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits - Education Focused */}
        <div className={styles.benefitsSection}>
          <h3 className={styles.sectionTitle}>Why Schools Choose Our AI Solutions</h3>
          <p className={styles.sectionSubtitle}>
            Built specifically for educational institutions by experts with 15+ years in software
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
          <h3>Ready to Automate Your School?</h3>
          <p>Get a free demo customized for your institution</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Get Free Demo</button>
            <button className={styles.secondaryBtn}>See Case Studies</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PramrixStrategicService;