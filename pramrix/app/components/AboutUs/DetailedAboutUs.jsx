'use client';

import styles from './DetailedAboutUs.module.css';

const DetailedAboutUs = () => {
  const teamMembers = [
    {
      name: "Prabhat Ranjan",
      role: "Founder & AI Automation Specialist",
      bio: "With 15+ years in software engineering, I saw schools drowning in paperwork while technology advanced elsewhere. I started Pramrix to bring intelligent automation to education, helping schools focus on teaching instead of administrative tasks.",
      expertise: ["AI Automation", "System Architecture", "Education Technology", "Process Optimization", "Software Engineering"],
      funFact: "Believes that every hour saved from paperwork is an hour gained for student development"
    },
    {
      name: "Our Education Team", 
      role: "School Process Experts",
      bio: "A dedicated team that understands the unique challenges schools face. We've worked with institutions to transform their operations and create more efficient learning environments.",
      expertise: ["School Operations", "Parent Communication", "Attendance Systems", "Fee Management", "Staff Training"],
      funFact: "We've helped schools recover over 10,000 staff hours annually through smart automation"
    }
  ];

  const companyTimeline = [
    {
      year: "2020",
      title: "The Realization",
      description: "Witnessed schools struggling with manual processes while working in tech industry"
    },
    {
      year: "2021", 
      title: "First School Automation",
      description: "Built our first attendance automation system for a local coaching center"
    },
    {
      year: "2022",
      title: "Framework Development",
      description: "Created specialized AI automation frameworks for educational institutions"
    },
    {
      year: "2023",
      title: "Transformation Scale",
      description: "Helped multiple schools save 100+ staff hours monthly through automation"
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Expanding AI automation to create smarter, more efficient schools nationwide"
    }
  ];

  const values = [
    {
      icon: "👨‍🏫",
      title: "Teachers First",
      description: "We believe teachers should focus on teaching, not paperwork. Our automation frees up their valuable time.",
      details: [
        "Reduce administrative burden",
        "Automate routine tasks", 
        "Focus on student development"
      ]
    },
    {
      icon: "🏫",
      title: "School-Centric Design",
      description: "Every solution is built specifically for educational environments and their unique needs.",
      details: [
        "Education-specific workflows",
        "School calendar integration",
        "Parent communication focus"
      ]
    },
    {
      icon: "🤖",
      title: "Smart Automation",
      description: "We don't just automate - we make processes intelligent and adaptive to your school's needs.",
      details: [
        "AI-powered systems",
        "Learning algorithms",
        "Continuous improvement"
      ]
    },
    {
      icon: "⏰",
      title: "Time Recovery",
      description: "Our success is measured in hours saved - time that can be invested in education quality.",
      details: [
        "100+ hours monthly savings",
        "24/7 operation",
        "Instant response systems"
      ]
    }
  ];

  const clientStories = [
    {
      client: "Greenwood International School",
      challenge: "Staff spending 20+ hours weekly on attendance tracking and parent notifications",
      solution: "AI-powered attendance system with automatic WhatsApp alerts to parents",
      results: "Saved 80 staff hours monthly, reduced parent queries by 70%",
      testimonial: "Pramrix gave us back the time we needed to focus on our students. The automation just works, and parents love the instant updates."
    },
    {
      client: "City Coaching Center", 
      challenge: "Manual fee tracking leading to errors and delayed payments",
      solution: "Automated fee management with payment reminders and digital receipts",
      results: "100% fee tracking accuracy, 40% faster payment collections",
      testimonial: "The fee automation system eliminated our accounting headaches. Now we know exactly where we stand financially."
    },
    {
      client: "Bright Minds Academy",
      challenge: "Teachers overwhelmed with administrative work affecting teaching quality",
      solution: "Comprehensive automation for attendance, communication, and reporting",
      results: "Teachers gained 10+ hours weekly for lesson planning and student support",
      testimonial: "Our teachers are happier and more productive. The automation handles the paperwork while they focus on what they do best - teaching."
    }
  ];

  return (
    <section className={styles.detailedAbout}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span>Our Education Mission</span>
            </div>
            <h1 className={styles.heroTitle}>
              Giving Time Back to <span className={styles.highlight}>Education</span>
            </h1>
            <p className={styles.heroDescription}>
              Founded by <strong>Prabhat Ranjan</strong>, we're not just another tech company. We're former educators and engineers 
              who saw a problem: schools were drowning in paperwork while technology offered solutions. 
              We built Pramrix to change that.
            </p>
          </div>
        </div>

        {/* Origin Story */}
        <div className={styles.originSection}>
          <div className={styles.originContent}>
            <h2>Why We're Passionate About School Automation</h2>
            <div className={styles.originText}>
              <p>
                <strong>Prabhat Ranjan</strong>, with 15 years in software engineering, visited his niece's school and saw teachers 
                spending hours on attendance, fee collection, and parent calls. The same technology that transformed 
                businesses was missing in education.
              </p>
              <p>
                That's when we asked: <strong>"What if we could give every teacher 2 extra hours daily? 
                What if principals could focus on education quality instead of administrative fires?"</strong>
              </p>
              <p>
                We started small - automating attendance for one coaching center. The results were immediate: 
                happier teachers, informed parents, and more efficient operations. Today, we help schools 
                nationwide recover thousands of staff hours through intelligent automation.
              </p>
              <p>
                <strong>Our belief:</strong> Every minute saved from paperwork is a minute gained for student development.
              </p>
            </div>
          </div>
        </div>

        {/* What We Solve */}
        <div className={styles.industrySection}>
          <h2>The School Problems We Solve</h2>
          <div className={styles.industryGrid}>
            <div className={`${styles.industryCard} ${styles.attendance}`}>
              <div className={styles.industryIcon}>📊</div>
              <h3>Attendance Chaos</h3>
              <p>Eliminate manual attendance tracking and instant parent notifications</p>
              <ul>
                <li>Automated tracking</li>
                <li>Instant parent alerts</li>
                <li>Zero manual work</li>
              </ul>
            </div>
            <div className={`${styles.industryCard} ${styles.communication}`}>
              <div className={styles.industryIcon}>💬</div>
              <h3>Parent Communication</h3>
              <p>24/7 AI-powered communication that keeps parents informed and engaged</p>
              <ul>
                <li>24/7 query handling</li>
                <li>Automated updates</li>
                <li>Multi-language support</li>
              </ul>
            </div>
            <div className={`${styles.industryCard} ${styles.fees}`}>
              <div className={styles.industryIcon}>💰</div>
              <h3>Fee Management</h3>
              <p>Streamlined fee collection with automated reminders and digital receipts</p>
              <ul>
                <li>Payment tracking</li>
                <li>Auto-reminders</li>
                <li>Digital receipts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div className={styles.timelineSection}>
          <h2>Our Journey in Education Technology</h2>
          <div className={styles.timeline}>
            {companyTimeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={styles.teamSection}>
          <h2>The Team Behind Your School's Transformation</h2>
          <p className={styles.teamIntro}>
            Led by <strong>Prabhat Ranjan</strong>, we combine <strong>15+ years of software expertise</strong> with 
            <strong> deep understanding of school operations</strong>.
          </p>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <div className={styles.memberHeader}>
                  <div className={styles.memberAvatar}>
                    <span>{index === 0 ? "👨‍💻" : "👥"}</span>
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                  </div>
                </div>
                <p className={styles.memberBio}>{member.bio}</p>
                <div className={styles.expertise}>
                  <h4>Specialized Expertise</h4>
                  <div className={styles.expertiseTags}>
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.expertiseTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.funFact}>
                  <strong>Why We Care:</strong> {member.funFact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className={styles.valuesSection}>
          <h2>Our Education-First Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueHeader}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3>{value.title}</h3>
                </div>
                <p className={styles.valueDescription}>{value.description}</p>
                <ul className={styles.valueDetails}>
                  {value.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Client Stories */}
        <div className={styles.storiesSection}>
          <h2>School Success Stories</h2>
          <div className={styles.storiesGrid}>
            {clientStories.map((story, index) => (
              <div key={index} className={styles.storyCard}>
                <h3>{story.client}</h3>
                <div className={styles.storyContent}>
                  <div className={styles.challenge}>
                    <strong>The Challenge:</strong> {story.challenge}
                  </div>
                  <div className={styles.solution}>
                    <strong>Our Solution:</strong> {story.solution}
                  </div>
                  <div className={styles.results}>
                    <strong>Results Achieved:</strong> {story.results}
                  </div>
                  <div className={styles.testimonial}>
                    "{story.testimonial}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className={styles.finalCta}>
          <h2>Ready to Transform Your School?</h2>
          <p>Let's discuss how AI automation can save your staff hundreds of hours monthly</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Get Free School Assessment</button>
            <button className={styles.secondaryBtn}>See Live Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedAboutUs;