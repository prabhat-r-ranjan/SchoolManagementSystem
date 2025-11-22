'use client';

import styles from './StrategicServices.module.css';

const StrategicServices = () => {
  const schoolAutomationServices = [
    {
      icon: "📊",
      title: "Attendance & Student Tracking",
      description: "Replace manual attendance registers with intelligent systems that work automatically and keep parents informed in real-time",
      problemsSolved: [
        "Teachers wasting 30+ minutes daily on attendance",
        "Parents calling office for absence updates", 
        "Manual entry errors and data loss",
        "No real-time visibility for management"
      ],
      solutions: [
        "Smart attendance tracking with instant WhatsApp alerts",
        "Automated absence pattern detection",
        "Real-time dashboard for principals",
        "Integration with school timetable"
      ],
      humanBenefit: "Teachers get 30+ minutes back daily for actual teaching"
    },
    {
      icon: "💬",
      title: "Parent Communication Hub",
      description: "Transform chaotic parent communication into organized, automated conversations that happen 24/7 without staff overtime",
      problemsSolved: [
        "Office staff overwhelmed with parent calls",
        "Important messages getting lost in WhatsApp groups",
        "After-hours parent queries going unanswered",
        "No record of communications"
      ],
      solutions: [
        "AI-powered chatbot for common queries",
        "Automated event reminders and alerts",
        "Broadcast messaging for urgent updates",
        "Multi-language support for diverse parent communities"
      ],
      humanBenefit: "Office staff focus on important tasks instead of repetitive queries"
    },
    {
      icon: "💰",
      title: "Fee Management & Finance",
      description: "Eliminate fee collection headaches with automated tracking, reminders, and digital receipts that make life easier for everyone",
      problemsSolved: [
        "Chasing late fee payments manually",
        "Accounting errors in fee tracking",
        "Parents losing fee receipts",
        "No payment analytics for management"
      ],
      solutions: [
        "Automated fee reminder system",
        "Digital receipt generation",
        "Payment tracking dashboard",
        "Late fee automatic alerts"
      ],
      humanBenefit: "Accountants spend time on analysis instead of chasing payments"
    },
    {
      icon: "🏊‍♂️",
      title: "Premium Facilities Management",
      description: "Turn your world-class facilities from operational headaches into smoothly running assets that enhance student experience",
      problemsSolved: [
        "Swimming pool scheduling conflicts",
        "Sports equipment maintenance forgotten",
        "Tournament organization chaos",
        "Facility usage not optimized"
      ],
      solutions: [
        "Smart facility booking system",
        "Automated maintenance alerts",
        "Tournament scheduling automation",
        "Usage analytics for better planning"
      ],
      humanBenefit: "Sports teachers focus on coaching instead of administration"
    }
  ];

  const implementationApproach = [
    {
      phase: "Phase 1: Quick Wins (2-3 weeks)",
      focus: "Solve immediate pain points with ready-to-use automation",
      deliverables: [
        "Basic attendance → parent alerts",
        "Fee reminder system",
        "AI query responder for common questions"
      ],
      impact: "Staff sees value within first month"
    },
    {
      phase: "Phase 2: Core Systems (3-4 weeks)", 
      focus: "Build comprehensive operational automation",
      deliverables: [
        "Full attendance management",
        "Parent communication portal",
        "Fee management dashboard"
      ],
      impact: "Major administrative tasks automated"
    },
    {
      phase: "Phase 3: Premium Features (4-5 weeks)",
      focus: "Enhance with advanced facility management",
      deliverables: [
        "Sports facility scheduling",
        "Equipment maintenance tracking",
        "Advanced analytics dashboard"
      ],
      impact: "Complete campus automation achieved"
    }
  ];

  const realSchoolProblems = [
    {
      problem: "The 8 AM Attendance Chaos",
      description: "Every morning, teachers manually mark attendance while parents call the office asking 'Did my child reach school?'",
      solution: "QR code/ biometric attendance → instant WhatsApp to parents → zero calls to office"
    },
    {
      problem: "The Fee Collection Headache", 
      description: "Accountants spending days chasing payments, generating manual receipts, and dealing with 'I already paid' conflicts",
      solution: "Automated reminders → online payments → digital receipts → real-time tracking"
    },
    {
      problem: "The Sports Tournament Nightmare",
      description: "Sports teachers spending weeks scheduling matches, coordinating referees, and communicating with participants",
      solution: "Automated tournament scheduling → referee assignments → participant notifications → result tracking"
    },
    {
      problem: "The Parent Query Flood",
      description: "Office staff repeating the same answers about holidays, fees, and events while important work waits",
      solution: "24/7 AI chatbot → instant answers → staff handles only complex queries"
    }
  ];

  return (
    <section id="school-automation" className={styles.strategicServices}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span>AI Automation for Schools</span>
          </div>
          <h2 className={styles.title}>
            Giving <span className={styles.highlight}>Time Back to Education</span>
          </h2>
          <p className={styles.subtitle}>
            We replace administrative chaos with intelligent automation, so your teachers can teach, 
            your staff can strategize, and your students get the attention they deserve.
          </p>
        </div>

        {/* Real Problems Section */}
        <div className={styles.problemsSection}>
          <h3>Sound Familiar? These School Problems Disappear With Automation</h3>
          <div className={styles.problemsGrid}>
            {realSchoolProblems.map((item, index) => (
              <div key={index} className={styles.problemCard}>
                <div className={styles.problemHeader}>
                  <h4>{item.problem}</h4>
                </div>
                <div className={styles.problemDescription}>
                  {item.description}
                </div>
                <div className={styles.solution}>
                  <strong>Our Solution:</strong> {item.solution}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Services */}
        <div className={styles.servicesSection}>
          <h3>Practical Automation That Actually Works in Schools</h3>
          <div className={styles.servicesGrid}>
            {schoolAutomationServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className={styles.problemsSolved}>
                  <h4>Eliminates These Headaches:</h4>
                  <ul>
                    {service.problemsSolved.map((problem, idx) => (
                      <li key={idx}>❌ {problem}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.solutionsProvided}>
                  <h4>We Implement:</h4>
                  <div className={styles.solutionsGrid}>
                    {service.solutions.map((solution, idx) => (
                      <div key={idx} className={styles.solutionItem}>
                        ✅ {solution}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.humanImpact}>
                  <div className={styles.impactIcon}>⭐</div>
                  <strong>Real Impact:</strong> {service.humanBenefit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Approach */}
        <div className={styles.implementationSection}>
          <h3>Smart Implementation That Respects Your Academic Calendar</h3>
          <p>We phase automation to match your school's rhythm, not disrupt it</p>
          <div className={styles.implementationGrid}>
            {implementationApproach.map((phase, index) => (
              <div key={index} className={styles.phaseCard}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>0{index + 1}</div>
                  <h4>{phase.phase}</h4>
                </div>
                <div className={styles.phaseFocus}>
                  <strong>Focus:</strong> {phase.focus}
                </div>
                <div className={styles.phaseDeliverables}>
                  <strong>You Get:</strong>
                  <ul>
                    {phase.deliverables.map((item, idx) => (
                      <li key={idx}>🎯 {item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.phaseImpact}>
                  <strong>Result:</strong> {phase.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className={styles.resultsSection}>
          <h3>What Schools Actually Achieve With Our Automation</h3>
          <div className={styles.resultsGrid}>
            <div className={styles.resultItem}>
              <div className={styles.resultMetric}>100+</div>
              <div className={styles.resultLabel}>Staff hours saved monthly</div>
            </div>
            <div className={styles.resultItem}>
              <div className={styles.resultMetric}>80%</div>
              <div className={styles.resultLabel}>Fewer parent calls to office</div>
            </div>
            <div className={styles.resultItem}>
              <div className={styles.resultMetric}>Zero</div>
              <div className={styles.resultLabel}>Manual attendance errors</div>
            </div>
            <div className={styles.resultItem}>
              <div className={styles.resultMetric}>24/7</div>
              <div className={styles.resultLabel}>Parent communication</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={styles.finalCta}>
          <h3>Ready to Transform Your School Operations?</h3>
          <p>Let's identify which automation will make the biggest impact for your school</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Get Free School Assessment</button>
            <button className={styles.secondaryBtn}>See Live Demo</button>
          </div>
          <div className={styles.ctaNote}>
            <span>No commitment • 30-minute campus assessment • Custom automation plan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicServices;