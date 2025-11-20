'use client';

import styles from './HowWeWork.module.css';

const HowWeWork = () => {
  const processSteps = [
    {
      step: "01",
      title: "Getting to Know Your Business",
      description: "We start by sitting down with you and your team to truly understand what makes your business tick. We'll explore your goals, challenges, and what success looks like for you. This isn't just about data - it's about understanding your story, your customers, and your vision.",
      activities: ["Discovery Workshop", "Customer Journey Analysis", "Business Goals Alignment", "Market Position Review"],
      icon: "👋",
      humanTouch: "We listen first, then we plan"
    },
    {
      step: "02",
      title: "Creating Your Custom Roadmap",
      description: "Based on what we learn, we build a clear, actionable plan tailored specifically to your business. No generic templates - just real strategies designed to get you where you want to go. You'll see exactly how we'll help you grow, with timelines and milestones that make sense for your business.",
      activities: ["Custom Growth Plan", "90-Day Action Steps", "Resource Planning", "Success Measurement Setup"],
      icon: "🗓️",
      humanTouch: "Your goals become our shared roadmap"
    },
    {
      step: "03",
      title: "Rolling Up Our Sleeves",
      description: "This is where the magic happens. Our team gets to work implementing your strategy across all the right channels. We keep you updated every step of the way with clear communication and regular check-ins. You're never in the dark about what we're doing or why.",
      activities: ["Multi-Channel Execution", "Weekly Progress Updates", "Quality Checks", "Ongoing Optimization"],
      icon: "⚡",
      humanTouch: "We work alongside you as part of your team"
    },
    {
      step: "04",
      title: "Growing and Improving Together",
      description: "We believe the best results come from continuous improvement. Every couple of weeks, we review what's working, adjust what's not, and find new opportunities. This means your strategy stays fresh and effective as your business and market evolve.",
      activities: ["Regular Performance Reviews", "Strategy Refinement", "ROI Optimization", "New Opportunity Identification"],
      icon: "📈",
      humanTouch: "We learn and adapt as we grow together"
    }
  ];

  const collaborationFeatures = [
    {
      title: "Your Dedicated Team",
      description: "You get real people who care about your success. We assign you a dedicated account manager and specialists who learn your business inside out and become true partners in your growth.",
      icon: "👥",
      specific: "Real people who know your business"
    },
    {
      title: "No Surprises Communication",
      description: "We keep you in the loop with regular updates and honest conversations. You'll always know what we're working on, how it's performing, and what's coming next. We're available when you need us.",
      icon: "💬",
      specific: "Regular check-ins and updates"
    },
    {
      title: "Flexible and Responsive",
      description: "When opportunities pop up or things change (as they often do in business), we adapt quickly. We're not locked into rigid plans - we pivot based on what's actually working for you.",
      icon: "🔄",
      specific: "We adapt to your changing needs"
    },
    {
      title: "Focused on Your Success",
      description: "We measure our success by yours. We're deeply committed to helping you hit your targets and grow your business. When you win, we win - it's that simple.",
      icon: "✅",
      specific: "Your goals drive everything we do"
    }
  ];

  const realResults = [
    { metric: "3-5X", description: "Return on investment for our e-commerce partners" },
    { metric: "47%", description: "More qualified leads for B2B companies we work with" },
    { metric: "2.3X", description: "Higher conversion rates through our optimization work" },
    { metric: "98%", description: "Of clients choose to continue working with us" }
  ];

  return (
    <section id="how-we-work" className={styles.howWeWork}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>How We Work With You</span>
          </div>
          <h2 className={styles.title}>
            A <span className={styles.highlight}>Partnership</span> That Feels<br />
            Like <span className={styles.highlight}>Part of Your Team</span>
          </h2>
          <p className={styles.subtitle}>
            We don't just deliver marketing services - we become an extension of your team. 
            We take the time to understand your business, your challenges, and your vision, 
            then work alongside you to make it happen.
          </p>
        </div>

        {/* Process Timeline */}
        <div className={styles.processSection}>
          <div className={styles.processIntro}>
            <h3>Our Approach: Simple, Transparent, Effective</h3>
            <p>Four straightforward steps to building your growth engine together</p>
          </div>
          <div className={styles.processTimeline}>
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepIndicator}>
                    <span className={styles.stepNumber}>{step.step}</span>
                    <div className={styles.stepIcon}>{step.icon}</div>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                    <div className={styles.humanTouch}>
                      <span className={styles.touchIcon}>💡</span>
                      {step.humanTouch}
                    </div>
                    <div className={styles.activities}>
                      <span className={styles.activitiesLabel}>What we'll do together:</span>
                      <div className={styles.activitiesRow}>
                        {step.activities.map((activity, activityIndex) => (
                          <span key={activityIndex} className={styles.activity}>
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className={styles.connector}>
                    <div className={styles.connectorLine}></div>
                    <div className={styles.connectorArrow}>↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Real Results */}
        <div className={styles.resultsSection}>
          <div className={styles.resultsHeader}>
            <h3>Real Results for Real Businesses</h3>
            <p>Here's what our partnership approach has delivered for businesses like yours</p>
          </div>
          <div className={styles.resultsGrid}>
            {realResults.map((result, index) => (
              <div key={index} className={styles.resultCard}>
                <div className={styles.resultMetric}>{result.metric}</div>
                <div className={styles.resultDescription}>{result.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Approach */}
        <div className={styles.collaborationSection}>
          <div className={styles.collaborationHeader}>
            <h3>Working Together Should Feel Easy</h3>
            <p>That's why we've built our approach around clear communication and real partnership</p>
          </div>
          <div className={styles.collaborationGrid}>
            {collaborationFeatures.map((feature, index) => (
              <div key={index} className={styles.collaborationCard}>
                <div className={styles.collaborationIcon}>{feature.icon}</div>
                <h4 className={styles.collaborationTitle}>{feature.title}</h4>
                <p className={styles.collaborationDescription}>{feature.description}</p>
                <div className={styles.specificDetail}>
                  <span className={styles.detailIcon}>🎯</span>
                  {feature.specific}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Ready to See What We Can Do Together?</h3>
            <p>Let's have a real conversation about your business and see if we're the right fit to help you grow.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Start the Conversation</button>
              <button className={styles.secondaryBtn}>See Client Stories</button>
            </div>
            <div className={styles.ctaNote}>
              <span className={styles.noteIcon}>🤝</span>
              <span>No sales pitch • Just honest advice • See if we can help</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;