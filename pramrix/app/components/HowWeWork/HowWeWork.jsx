'use client';

import styles from './HowWeWork.module.css';

const HowWeWork = () => {
  const processSteps = [
    {
      step: "01",
      title: "Understanding Your School's Unique Needs",
      description: "We start by visiting your campus and speaking with your staff to understand your specific challenges. We'll analyze your current processes, identify bottlenecks, and discover where automation can make the biggest impact. This isn't about selling a generic solution - it's about building what your school actually needs.",
      activities: ["Campus Process Audit", "Staff Interviews", "Pain Point Analysis", "Automation Opportunity Mapping"],
      icon: "🏫",
      humanTouch: "We walk in your shoes to understand your daily challenges"
    },
    {
      step: "02",
      title: "Building Your Custom Automation Roadmap",
      description: "Based on our discovery, we create a phased implementation plan that aligns with your academic calendar. We prioritize solutions that deliver immediate value while building toward your complete digital transformation. You'll see exactly what we'll automate, when, and how it benefits your school.",
      activities: ["Phased Implementation Plan", "Academic Calendar Alignment", "Staff Training Schedule", "Success Metrics Definition"],
      icon: "🗓️",
      humanTouch: "Your academic calendar becomes our implementation timeline"
    },
    {
      step: "03",
      title: "Phased Implementation & Staff Training",
      description: "We start with your most pressing needs and gradually roll out automation across your campus. Our team works closely with your staff, providing hands-on training and support at every step. We ensure everyone feels confident using the new systems before moving to the next phase.",
      activities: ["Module-by-Module Rollout", "Staff Training Sessions", "Real-time Support", "Process Documentation"],
      icon: "⚡",
      humanTouch: "We train your team until they're comfortable and confident"
    },
    {
      step: "04",
      title: "Ongoing Optimization & Support",
      description: "Our partnership continues long after implementation. We monitor system performance, gather feedback from your team, and continuously improve the automation. As your school grows and changes, we adapt the systems to meet your evolving needs.",
      activities: ["Performance Monitoring", "Regular Feedback Sessions", "System Enhancements", "New Feature Rollouts"],
      icon: "📈",
      humanTouch: "We grow and adapt together as your school evolves"
    }
  ];

  const collaborationFeatures = [
    {
      title: "Your Dedicated Education Technology Partner",
      description: "You get a team that understands both technology and education. We become your go-to experts for streamlining operations and enhancing the learning experience through smart automation.",
      icon: "👥",
      specific: "Education-focused technology experts"
    },
    {
      title: "Transparent Communication & Updates",
      description: "We keep you informed with regular progress reports and are always available for questions. You'll know exactly what we're working on and how it's benefiting your school operations.",
      icon: "💬",
      specific: "Regular campus visits and updates"
    },
    {
      title: "Academic Calendar-Aligned Implementation",
      description: "We schedule implementations around your academic calendar to minimize disruption. No major changes during exam periods or admission season - we work at your pace.",
      icon: "📚",
      specific: "Implementation that respects your academic rhythm"
    },
    {
      title: "Measurable Impact on Education Quality",
      description: "We focus on automation that gives teachers more time for teaching and improves parent satisfaction. Our success is measured in hours saved and educational outcomes enhanced.",
      icon: "🎯",
      specific: "Focus on time recovery for teaching staff"
    }
  ];

  const realResults = [
    { metric: "100+", description: "Staff hours saved monthly through automation" },
    { metric: "24/7", description: "Parent communication without staff overtime" },
    { metric: "Zero", description: "Manual errors in attendance and fee tracking" },
    { metric: "98%", description: "Parent satisfaction with automated communication" }
  ];

  const implementationPhases = [
    {
      phase: "Phase 1: Admission Ready (2-3 weeks)",
      focus: "Handle admission rush and parent inquiries",
      deliverables: ["AI Inquiry Chatbot", "Digital Form Processing", "Lead Management", "WhatsApp Automation"]
    },
    {
      phase: "Phase 2: Academic Operations (3-4 weeks)",
      focus: "Core school operations automation",
      deliverables: ["Attendance System", "Fee Management", "Parent Portal", "Basic Reporting"]
    },
    {
      phase: "Phase 3: Premium Facilities (4-5 weeks)",
      focus: "Sports and facility management",
      deliverables: ["Pool Scheduling", "Court Management", "Equipment Tracking", "Tournament Automation"]
    }
  ];

  return (
    <section id="how-we-work" className={styles.howWeWork}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>Our Education Automation Process</span>
          </div>
          <h2 className={styles.title}>
            Transforming School Operations<br />
            <span className={styles.highlight}>Without Disrupting Education</span>
          </h2>
          <p className={styles.subtitle}>
            We understand that schools operate on tight academic calendars. Our phased approach 
            ensures smooth implementation that enhances operations without interrupting the learning environment.
          </p>
        </div>

        {/* Implementation Phases */}
        <div className={styles.phasesSection}>
          <h3>Academic Calendar-Aligned Implementation</h3>
          <p>We phase automation to match your school's rhythm and priorities</p>
          <div className={styles.phasesGrid}>
            {implementationPhases.map((phase, index) => (
              <div key={index} className={styles.phaseCard}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>0{index + 1}</div>
                  <h4>{phase.phase}</h4>
                </div>
                <div className={styles.phaseFocus}>
                  <strong>Focus:</strong> {phase.focus}
                </div>
                <div className={styles.phaseDeliverables}>
                  <strong>Delivers:</strong>
                  <ul>
                    {phase.deliverables.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className={styles.processSection}>
          <div className={styles.processIntro}>
            <h3>Our Partnership Approach</h3>
            <p>Four steps to sustainable automation that grows with your school</p>
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
            <h3>Measurable Impact on School Operations</h3>
            <p>Here's what our automation partnership delivers for schools</p>
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
            <h3>Built for Education, Designed for Schools</h3>
            <p>Our approach respects the unique nature of educational institutions</p>
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
            <h3>Ready to Transform Your School Operations?</h3>
            <p>Let's discuss how automation can save your staff hundreds of hours and improve parent satisfaction</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>Schedule Campus Assessment</button>
              <button className={styles.secondaryBtn}>See School Case Studies</button>
            </div>
            <div className={styles.ctaNote}>
              <span className={styles.noteIcon}>📚</span>
              <span>No disruption to classes • Phased implementation • Staff training included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;