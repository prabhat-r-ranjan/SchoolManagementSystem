'use client';

import styles from './HowWeWork.module.css';

const HowWeWork = () => {
  const processSteps = [
    {
      step: "01",
      title: "The Deep Dive Immersion",
      description: "We start by immersing ourselves in your business world. Through intensive workshops and data analysis, we uncover not just what you do, but why you do it - mapping every customer touchpoint and identifying hidden growth opportunities.",
      activities: ["Business Immersion Workshop", "Customer Journey Mapping", "Revenue Stream Analysis", "Market Opportunity Audit"],
      icon: "🔍",
      humanTouch: "We learn your business like it's our own"
    },
    {
      step: "02",
      title: "Strategic Growth Blueprint",
      description: "Within 10 business days, we deliver a comprehensive growth blueprint that serves as our shared roadmap. It outlines clear initiatives, timelines, and success metrics tailored specifically to your business objectives.",
      activities: ["Custom Growth Roadmap", "90-Day Action Plan", "Resource Planning", "Success Metrics Framework"],
      icon: "🗺️",
      humanTouch: "Your vision transformed into actionable strategy"
    },
    {
      step: "03",
      title: "Integrated Growth Execution",
      description: "This is where strategy meets action. Our cross-functional team works in sync across all channels, ensuring every initiative supports the others. We maintain constant communication so you're always in the loop.",
      activities: ["Multi-Channel Implementation", "Weekly Progress Updates", "Quality Assurance", "Continuous Optimization"],
      icon: "⚡",
      humanTouch: "We become your dedicated growth execution team"
    },
    {
      step: "04",
      title: "Data-Driven Growth Cycles",
      description: "We operate in continuous improvement cycles. Every two weeks, we analyze performance data, test new approaches, and refine our strategy based on what's actually working for your business.",
      activities: ["Bi-Weekly Performance Reviews", "A/B Testing Framework", "ROI Optimization", "Strategy Evolution"],
      icon: "📊",
      humanTouch: "We measure what matters and adapt quickly"
    }
  ];

  const collaborationFeatures = [
    {
      title: "Dedicated Growth Team",
      description: "You get a dedicated team of specialists who become true partners in your growth journey. They learn your business inside out and are committed to your success.",
      icon: "👥",
      specific: "Your own dedicated experts"
    },
    {
      title: "Transparent Communication",
      description: "We believe in complete transparency. You'll have direct access to our project tracking, real-time dashboards, and regular strategy sessions where we share both wins and learnings.",
      icon: "💬",
      specific: "Regular strategy sessions"
    },
    {
      title: "Agile Adaptation",
      description: "When opportunities arise or challenges appear, we pivot quickly. Our agile approach means we can adapt strategies based on real-time performance data and market changes.",
      icon: "🔄",
      specific: "Data-driven pivots"
    },
    {
      title: "Shared Success Focus",
      description: "We're deeply invested in your growth. Our approach is built around achieving your business objectives, with clear performance indicators that keep us aligned with your goals.",
      icon: "✅",
      specific: "Goal-aligned performance"
    }
  ];

  const realResults = [
    { metric: "3-5X", description: "ROI achieved for e-commerce businesses" },
    { metric: "47%", description: "Average increase in qualified leads for B2B" },
    { metric: "2.3X", description: "Higher conversion rates through optimization" },
    { metric: "98%", description: "Client retention rate" }
  ];

  return (
    <section id="how-we-work" className={styles.howWeWork}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>Our Growth Framework</span>
          </div>
          <h2 className={styles.title}>
            A <span className={styles.highlight}>Strategic Partnership</span><br />
            Built for <span className={styles.highlight}>Real Results</span>
          </h2>
          <p className={styles.subtitle}>
            Our proven framework combines strategic thinking with hands-on execution to deliver 
            sustainable growth. We work as an extension of your team, focused on achieving your 
            business objectives.
          </p>
        </div>

        {/* Process Timeline */}
        <div className={styles.processSection}>
          <div className={styles.processIntro}>
            <h3>The Growth Journey We Take Together</h3>
            <p>A structured approach that adapts to your unique business needs and goals</p>
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
                      {step.activities.map((activity, activityIndex) => (
                        <span key={activityIndex} className={styles.activity}>
                          {activity}
                        </span>
                      ))}
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
            <h3>Measurable Business Impact</h3>
            <p>Real results delivered through our strategic partnership approach</p>
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
            <h3>True Partnership Approach</h3>
            <p>Working together as one team focused on your success</p>
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
            <h3>Ready to Build Your Growth Engine?</h3>
            <p>Let's discuss your business goals and explore how our partnership can drive meaningful growth.</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Start Your Growth Journey</button>
              <button className={styles.secondaryBtn}>View Our Approach</button>
            </div>
            <div className={styles.ctaNote}>
              <span className={styles.noteIcon}>🤝</span>
              <span>Complimentary consultation • No obligation • Actionable insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;