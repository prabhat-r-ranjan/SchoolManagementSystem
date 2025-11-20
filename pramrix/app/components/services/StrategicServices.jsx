'use client';

import styles from './StrategicServices.module.css';

const StrategicServices = () => {
  const strategicPillars = [
    {
      icon: "🎯",
      title: "Growth Strategy & Planning",
      description: "Comprehensive business analysis and data-driven roadmap development",
      services: ["Market Analysis", "Competitor Research", "KPI Framework", "Growth Planning"],
      outcome: "Clear 12-month growth strategy",
      // ADD: Specific services offered
      specificServices: [
        "Business Growth Audit",
        "Market Opportunity Analysis", 
        "Customer Journey Mapping",
        "Revenue Growth Strategy",
        "Performance KPI Development"
      ]
    },
    {
      icon: "🚀",
      title: "Digital Transformation",
      description: "End-to-end digital presence optimization across all channels",
      services: ["SEO Strategy", "Content Strategy", "Technical SEO", "Local SEO"],
      outcome: "360° digital dominance",
      // ADD: Specific services offered
      specificServices: [
        "SEO Audit & Strategy",
        "Content Marketing Plan",
        "Website Optimization",
        "Local SEO Setup",
        "Digital Presence Analysis"
      ]
    },
    {
      icon: "💸",
      title: "Revenue Acceleration",
      description: "Performance marketing that drives measurable ROI and revenue growth",
      services: ["Paid Media", "CRO", "Lead Nurturing", "ROI Tracking"],
      outcome: "3-5X guaranteed ROI",
      // ADD: Specific services offered
      specificServices: [
        "Google Ads Management",
        "Facebook/Instagram Ads",
        "Conversion Rate Optimization",
        "Sales Funnel Development",
        "ROI Tracking Dashboard"
      ]
    },
    {
      icon: "📈",
      title: "Brand Authority Building",
      description: "Establish your brand as the industry leader and trusted authority",
      services: ["Content Marketing", "Social Media", "PR & Outreach", "Thought Leadership"],
      outcome: "Industry leadership position",
      // ADD: Specific services offered
      specificServices: [
        "Content Strategy & Creation",
        "Social Media Management",
        "PR & Media Outreach",
        "LinkedIn Personal Branding",
        "Industry Authority Positioning"
      ]
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

  // ADD: Comprehensive services list for the packages section
  const comprehensiveServices = {
    growthAccelerator: [
      "Complete Digital Marketing Strategy",
      "SEO + Content Marketing",
      "Paid Advertising Management", 
      "Social Media Marketing",
      "Email Marketing Automation",
      "Conversion Rate Optimization",
      "Monthly Performance Reporting",
      "Dedicated Account Manager",
      "Weekly Strategy Calls",
      "Competitor Analysis"
    ],
    specializedSolutions: [
      "SEO Audit & Implementation",
      "Content Strategy & Creation",
      "Google Ads Management",
      "Social Media Advertising",
      "Website Redesign & Development",
      "Conversion Funnel Optimization",
      "Email Marketing Setup",
      "Marketing Automation",
      "Analytics & Reporting Setup"
    ]
  };

  return (
    <section id="strategic-services" className={styles.strategicServices}>
      <div className={styles.container}>
        {/* Header - UPDATED to mention services */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>Growth Partnership</span>
          </div>
          <h2 className={styles.title}>
            Your <span className={styles.highlight}>Dedicated Growth Team</span><br />
            Driving Results Through Specialized Marketing Services
          </h2>
          <p className={styles.subtitle}>
            We provide comprehensive digital marketing services including SEO, paid ads, 
            content marketing, and conversion optimization. Think of us as your dedicated 
            growth team, deeply invested in your success.
          </p>
        </div>

        {/* Strategic Pillars - UPDATED with specific services */}
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
                  <h4 className={styles.servicesTitle}>Core Services Include:</h4>
                  <div className={styles.servicesContainer}>
                    {pillar.specificServices.map((service, serviceIndex) => (
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
          <h3 className={styles.sectionTitle}>Why Choose a Growth Partnership?</h3>
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

        {/* Service Packages - UPDATED with detailed services */}
        <div className={styles.packagesSection}>
          <h3 className={styles.sectionTitle}>Our Marketing Services & Partnership Models</h3>
          <div className={styles.packagesGrid}>
            <div className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <h4>Growth Accelerator</h4>
                <div className={styles.packageBadge}>Most Popular</div>
              </div>
              <p className={styles.packageDescription}>
                Comprehensive marketing partnership for established businesses ready to scale
              </p>
              
              <div className={styles.packageServices}>
                <h5>Includes All These Services:</h5>
                <ul className={styles.packageFeatures}>
                  {comprehensiveServices.growthAccelerator.map((service, index) => (
                    <li key={index}>✓ {service}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.packageCta}>
                <button className={styles.packageBtn}>Explore Partnership</button>
              </div>
            </div>

            <div className={styles.packageCard}>
              <div className={styles.packageHeader}>
                <h4>Specialized Solutions</h4>
              </div>
              <p className={styles.packageDescription}>
                Focused marketing solutions for specific business challenges
              </p>
              
              <div className={styles.packageServices}>
                <h5>Choose From These Services:</h5>
                <ul className={styles.packageFeatures}>
                  {comprehensiveServices.specializedSolutions.map((service, index) => (
                    <li key={index}>✓ {service}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.packageCta}>
                <button className={styles.packageBtn}>View Services</button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA - UPDATED */}
        <div className={styles.finalCta}>
          <h3>Ready to Transform Your Marketing?</h3>
          <p>Let's discuss which of our marketing services is right for your business goals</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Schedule Strategy Call</button>
            <button className={styles.secondaryBtn}>Download Services Guide</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicServices;