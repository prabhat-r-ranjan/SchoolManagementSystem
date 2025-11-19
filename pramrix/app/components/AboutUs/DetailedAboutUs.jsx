'use client';

import styles from './DetailedAboutUs.module.css';

const DetailedAboutUs = () => {
  const teamMembers = [
    {
      name: "Your Name",
      role: "Founder & Growth Strategist",
      bio: "With over 8 years in digital marketing and business strategy, I've helped 50+ businesses achieve remarkable growth. My passion lies in bridging the gap between strategic vision and practical execution.",
      expertise: ["Growth Strategy", "Digital Transformation", "ROI Optimization"],
      funFact: "Believes the best strategies come from understanding both data and human behavior"
    },
    {
      name: "Team Member",
      role: "Senior Marketing Specialist", 
      bio: "Specializing in performance marketing and conversion optimization, with a track record of delivering 3-5X ROI for clients across various industries.",
      expertise: ["Paid Media", "CRO", "Analytics"],
      funFact: "Loves turning complex data into actionable insights"
    }
  ];

  const companyTimeline = [
    {
      year: "2020",
      title: "Foundation",
      description: "Started with a vision to provide strategic marketing partnerships rather than transactional services"
    },
    {
      year: "2021", 
      title: "First Major Success",
      description: "Helped an e-commerce client achieve 5X revenue growth in 6 months, validating our approach"
    },
    {
      year: "2022",
      title: "Education Focus",
      description: "Discovered our passion for working with educational institutions and developed specialized frameworks"
    },
    {
      year: "2023",
      title: "Strategic Partnership Model",
      description: "Formalized our long-term partnership approach with dedicated growth teams"
    },
    {
      year: "2024",
      title: "Current Focus",
      description: "Helping schools and businesses build sustainable growth engines through integrated strategies"
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Strategic Thinking",
      description: "We don't just execute tasks—we solve business problems. Every action is tied to a strategic objective and measurable outcome.",
      details: [
        "Business-first approach",
        "Data-driven decisions", 
        "Long-term planning"
      ]
    },
    {
      icon: "🤝",
      title: "True Partnership",
      description: "We become an extension of your team. Your success is our success, and we're invested in your growth journey.",
      details: [
        "Dedicated account teams",
        "Transparent communication",
        "Shared accountability"
      ]
    },
    {
      icon: "💡",
      title: "Innovation & Learning",
      description: "The digital landscape evolves rapidly. We stay ahead by continuously learning, testing, and adapting our approaches.",
      details: [
        "Continuous optimization",
        "Test-and-learn mindset", 
        "Industry research"
      ]
    },
    {
      icon: "📈",
      title: "Results Obsession",
      description: "We measure success by the impact we create—increased revenue, better leads, stronger brands, and happier clients.",
      details: [
        "ROI-focused approach",
        "Clear performance metrics",
        "Regular progress reviews"
      ]
    }
  ];

  const clientStories = [
    {
      client: "Private School Network",
      challenge: "Declining enrollment and low community awareness",
      solution: "Comprehensive brand strategy + digital presence overhaul",
      results: "47% increase in qualified inquiries, 25% enrollment growth",
      testimonial: "They understood our unique challenges and delivered a strategy that actually worked."
    },
    {
      client: "E-commerce Brand", 
      challenge: "Stagnant growth at $50K/month revenue",
      solution: "Full funnel optimization + retention strategy",
      results: "Grew to $250K/month in 6 months, 5X ROI",
      testimonial: "The strategic approach transformed our business completely."
    }
  ];

  return (
    <section className={styles.detailedAbout}>
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span>Our Story</span>
            </div>
            <h1 className={styles.heroTitle}>
              More Than an Agency—<span className={styles.highlight}>Your Growth Partner</span>
            </h1>
            <p className={styles.heroDescription}>
              We started with a simple belief: businesses deserve marketing partners who are truly invested in their success. 
              Not just service providers who execute tasks, but strategic thinkers who understand that real growth comes from 
              aligning marketing with business objectives.
            </p>
          </div>
        </div>

        {/* Origin Story */}
        <div className={styles.originSection}>
          <div className={styles.originContent}>
            <h2>Why We Exist</h2>
            <div className={styles.originText}>
              <p>
                After years in the marketing industry, we noticed a pattern: businesses were getting fragmented services 
                from different agencies, with no one looking at the big picture. They had SEO experts, social media managers, 
                and ad buyers—but no one connecting the dots to drive cohesive growth.
              </p>
              <p>
                That's when we decided to build something different. A partnership where strategy and execution work hand-in-hand, 
                where we take the time to understand not just what you do, but why you do it. Where your success becomes our obsession.
              </p>
              <p>
                Today, we specialize in working with educational institutions because we believe in the power of education to 
                transform lives. The long-term nature of these partnerships allows us to build sustainable growth strategies 
                that deliver lasting impact.
              </p>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div className={styles.timelineSection}>
          <h2>Our Journey</h2>
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
          <h2>Meet Your Growth Partners</h2>
          <p className={styles.teamIntro}>
            We're a dedicated team of strategists, analysts, and specialists who become true partners in your growth journey.
          </p>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <div className={styles.memberHeader}>
                  <div className={styles.memberAvatar}>
                    <span>👤</span>
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                  </div>
                </div>
                <p className={styles.memberBio}>{member.bio}</p>
                <div className={styles.expertise}>
                  <h4>Areas of Expertise</h4>
                  <div className={styles.expertiseTags}>
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.expertiseTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.funFact}>
                  <strong>Fun Fact:</strong> {member.funFact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Values */}
        <div className={styles.valuesSection}>
          <h2>Our Core Values in Action</h2>
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
          <h2>Client Success Stories</h2>
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
                    <strong>The Results:</strong> {story.results}
                  </div>
                  <div className={styles.testimonial}>
                    "{story.testimonial}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Promise */}
        <div className={styles.promiseSection}>
          <div className={styles.promiseContent}>
            <h2>Our Promise to You</h2>
            <div className={styles.promisePoints}>
              <div className={styles.promisePoint}>
                <span className={styles.promiseIcon}>🎯</span>
                <div>
                  <h4>Strategic Partnership</h4>
                  <p>We'll work as an extension of your team, deeply understanding your business and goals.</p>
                </div>
              </div>
              <div className={styles.promisePoint}>
                <span className={styles.promiseIcon}>📊</span>
                <div>
                  <h4>Transparent Results</h4>
                  <p>You'll always know what we're doing, why we're doing it, and how it's performing.</p>
                </div>
              </div>
              <div className={styles.promisePoint}>
                <span className={styles.promiseIcon}>💡</span>
                <div>
                  <h4>Continuous Innovation</h4>
                  <p>We'll constantly test, learn, and optimize to keep your growth engine running strong.</p>
                </div>
              </div>
              <div className={styles.promisePoint}>
                <span className={styles.promiseIcon}>🤝</span>
                <div>
                  <h4>Long-term Focus</h4>
                  <p>We're here to build sustainable growth, not just quick wins that don't last.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={styles.finalCta}>
          <h2>Ready to Write Your Success Story?</h2>
          <p>Let's build something remarkable together</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Start Your Partnership</button>
            <button className={styles.secondaryBtn}>Meet the Team</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedAboutUs;