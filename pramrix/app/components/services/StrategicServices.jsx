'use client';

import styles from './StrategicServices.module.css';

const StrategicServices = () => {
  const strategicPillars = [
    {
      icon: "🎯",
      title: "Growth Strategy & Planning",
      description: "Comprehensive business analysis and data-driven roadmap development",
      services: ["Market Analysis", "Competitor Research", "KPI Framework", "Growth Planning"],
      outcome: "Clear 12-month growth strategy"
    },
    {
      icon: "🚀",
      title: "Digital Transformation",
      description: "End-to-end digital presence optimization across all channels",
      services: ["SEO Strategy", "Content Strategy", "Technical SEO", "Local SEO"],
      outcome: "360° digital dominance"
    },
    {
      icon: "💸",
      title: "Revenue Acceleration",
      description: "Performance marketing that drives measurable ROI and revenue growth",
      services: ["Paid Media", "CRO", "Lead Nurturing", "ROI Tracking"],
      outcome: "3-5X guaranteed ROI"
    },
    {
      icon: "📈",
      title: "Brand Authority Building",
      description: "Establish your brand as the industry leader and trusted authority",
      services: ["Content Marketing", "Social Media", "PR & Outreach", "Thought Leadership"],
      outcome: "Industry leadership position"
    }
  ];

  const partnershipBenefits = [
    {
      icon: "🤝",
      title: "Dedicated Growth Team",
      description: "Your own dedicated strategist, account manager, and specialist team"
    },
    {
      icon: "📊",
      title: "Transparent Reporting",
      description: "Monthly business reviews with clear ROI and performance metrics"
    },
    {
      icon: "🎯",
      title: "Performance Guarantee",
      description: "We're invested in your success with clear performance targets"
    },
    {
      icon: "⚡",
      title: "Agile Adaptation",
      description: "Continuous optimization based on data and market changes"
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
            Your <span className={styles.highlight}>Strategic Growth Partner</span><br />
            Driving Results Through Specialized Services
          </h2>
          <p className={styles.subtitle}>
            We combine strategic partnership with expert execution across specialized services. 
            Think of us as your outsourced growth team, deeply invested in your success.
          </p>
        </div>

        {/* Strategic Pillars */}
        <div className={styles.pillarsSection}>
          <div className={styles.pillarsGrid}>
            {strategicPillars.map((pillar, index) => (
              <div key={index} className={styles.pillarCard}>
                <div className={styles.pillarHeader}>
                  <div className={styles.pillarIcon}>{pillar.icon}</div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDescription}>{pillar.description}</p>
                </div>
                
                <div className={styles.servicesList}>
                  <h4 className={styles.servicesTitle}>Core Services</h4>
                  <div className={styles.servicesContainer}>
                    {pillar.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className={styles.serviceTag}>
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.outcome}>
                  <span className={styles.outcomeLabel}>Expected Outcome:</span>
                  <span className={styles.outcomeValue}>{pillar.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className={styles.benefitsSection}>
          <h3 className={styles.sectionTitle}>Why Choose a Strategic Partnership?</h3>
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

        {/* Service Packages */}
        <div className={styles.packagesSection}>
          <h3 className={styles.sectionTitle}>Flexible Partnership Models</h3>
          <div className={styles.packagesGrid}>
            <div className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <h4>Growth Accelerator</h4>
                <div className={styles.packageBadge}>Most Popular</div>
              </div>
              <p className={styles.packageDescription}>
                Comprehensive partnership for established businesses ready to scale
              </p>
              <ul className={styles.packageFeatures}>
                <li>✓ Full-service digital marketing</li>
                <li>✓ Dedicated growth team</li>
                <li>✓ Monthly strategy sessions</li>
                <li>✓ Performance guarantees</li>
                <li>✓ Comprehensive reporting</li>
              </ul>
              <div className={styles.packageCta}>
                <button className={styles.packageBtn}>Explore Partnership</button>
              </div>
            </div>

            <div className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <h4>Specialized Solutions</h4>
              </div>
              <p className={styles.packageDescription}>
                Focused solutions for specific business challenges or initiatives
              </p>
              <ul className={styles.packageFeatures}>
                <li>✓ SEO & Content Marketing</li>
                <li>✓ Paid Media Management</li>
                <li>✓ Website & Conversion Optimization</li>
                <li>✓ Social Media & Brand Building</li>
                <li>✓ Email Marketing Automation</li>
              </ul>
              <div className={styles.packageCta}>
                <button className={styles.packageBtn}>View Services</button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={styles.finalCta}>
          <h3>Ready to Start Your Growth Journey?</h3>
          <p>Let's discuss how our strategic partnership can transform your business</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Schedule Strategy Call</button>
            <button className={styles.secondaryBtn}>Download Partnership Guide</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicServices;