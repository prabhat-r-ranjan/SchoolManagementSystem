'use client';

import styles from './DetailedAboutUs.module.css';

const DetailedAboutUs = () => {
  const teamMembers = [
    {
      name: "Prabhat Ranjan",
      role: "Founder & Growth Strategist",
      bio: "With over 8 years in digital marketing and business strategy, I've helped 50+ businesses achieve remarkable growth. My passion lies in understanding the unique challenges of Education, Real Estate, and Interior businesses and creating tailored growth strategies that deliver real results.",
      expertise: ["Growth Strategy", "Digital Transformation", "ROI Optimization", "Education Marketing", "Real Estate Branding"],
      funFact: "Believes that every business has a unique story waiting to be told - especially in Education, Real Estate, and Interior design spaces"
    },
    {
      name: "Our Specialist Team",
      role: "Industry Experts", 
      bio: "A dedicated team of professionals with deep expertise in Education, Real Estate, and Interior design sectors. We understand the nuances of these industries and speak your language.",
      expertise: ["Education Marketing", "Real Estate Branding", "Interior Design SEO", "Sector-Specific Strategy"],
      funFact: "We've helped educational institutions increase enrollment by 47% and interior designers triple their client inquiries"
    }
  ];

  const companyTimeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded by Prabhat Ranjan with a vision to provide meaningful marketing partnerships"
    },
    {
      year: "2021", 
      title: "Sector Specialization",
      description: "Discovered our unique ability to drive growth in Education, Real Estate, and Interior design sectors"
    },
    {
      year: "2022",
      title: "Framework Development",
      description: "Created specialized marketing frameworks tailored for Education institutions, Real Estate developers, and Interior designers"
    },
    {
      year: "2023",
      title: "Growth Acceleration",
      description: "Helped multiple schools achieve 47% enrollment growth and interior designers triple their business"
    },
    {
      year: "2024",
      title: "Future Focus",
      description: "Expanding our impact across Education, Real Estate, and Interior design industries with innovative strategies"
    }
  ];

  const values = [
    {
      icon: "🎓",
      title: "Education First",
      description: "We understand that educational institutions need more than just marketing - they need community building and trust creation.",
      details: [
        "Education sector expertise",
        "Student enrollment strategies", 
        "Community engagement"
      ]
    },
    {
      icon: "🏠",
      title: "Real Estate Excellence",
      description: "Real Estate isn't just about properties; it's about dreams. We help you connect with potential buyers emotionally.",
      details: [
        "Property marketing",
        "Developer branding",
        "Buyer psychology"
      ]
    },
    {
      icon: "🎨",
      title: "Interior Design Passion",
      description: "We help interior designers showcase their creativity and connect with clients who appreciate their unique style.",
      details: [
        "Portfolio showcasing",
        "Client attraction",
        "Design storytelling"
      ]
    },
    {
      icon: "📈",
      title: "Results That Matter",
      description: "We measure success by the impact we create—more students, faster property sales, and premium interior design clients.",
      details: [
        "ROI-focused approach",
        "Sector-specific metrics",
        "Growth tracking"
      ]
    }
  ];

  const clientStories = [
    {
      client: "Elite Private School",
      challenge: "Declining enrollment and low community awareness in competitive education market",
      solution: "Comprehensive education marketing strategy + community engagement program",
      results: "47% increase in qualified inquiries, 25% enrollment growth in first year",
      testimonial: "Prabhat and team understood the education sector like no other agency. They became true partners in our growth journey."
    },
    {
      client: "Premium Interior Design Studio", 
      challenge: "Struggling to attract high-value clients and showcase unique design philosophy",
      solution: "Brand storytelling + targeted digital presence for interior design audience",
      results: "Tripled high-value client inquiries, 200% increase in project value",
      testimonial: "They helped us communicate our design philosophy in a way that attracted exactly the right clients."
    },
    {
      client: "Real Estate Developer",
      challenge: "Slow sales in competitive luxury property market",
      solution: "Emotional branding + digital showcase of property uniqueness",
      results: "Sold out phase 1 in 3 months, 40% higher price realization",
      testimonial: "The team understood that we're not selling properties, we're selling dreams and lifestyles."
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
              Your Story, <span className={styles.highlight}>Amplified</span>
            </h1>
            <p className={styles.heroDescription}>
              Founded by <strong>Prabhat Ranjan</strong>, we're not just another marketing agency. We're storytellers, 
              growth partners, and sector specialists who understand the unique challenges and opportunities in 
              <span className={styles.industryHighlight}> Education</span>, 
              <span className={styles.industryHighlight}> Real Estate</span>, and 
              <span className={styles.industryHighlight}> Interior Design</span>.
            </p>
          </div>
        </div>

        {/* Origin Story */}
        <div className={styles.originSection}>
          <div className={styles.originContent}>
            <h2>Why We Do What We Do</h2>
            <div className={styles.originText}>
              <p>
                After years in the marketing industry, <strong>Prabhat Ranjan</strong> noticed something important: 
                most agencies treat all businesses the same. But we know that <strong>Education</strong> institutions, 
                <strong> Real Estate</strong> developers, and <strong>Interior</strong> designers have unique stories, 
                unique challenges, and unique audiences.
              </p>
              <p>
                That's why we built something different. A partnership where we don't just execute marketing campaigns—we 
                become students of your industry. We learn your language, understand your audience, and help you tell your 
                story in a way that resonates deeply.
              </p>
              <p>
                Whether you're shaping young minds in <strong>Education</strong>, creating dream homes in 
                <strong> Real Estate</strong>, or designing beautiful spaces in <strong>Interior Design</strong>, 
                we're here to make sure your ideal clients find you and choose you.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Focus */}
        <div className={styles.industrySection}>
          <h2>Where We Make Magic Happen</h2>
          <div className={styles.industryGrid}>
            <div className={`${styles.industryCard} ${styles.education}`}>
              <div className={styles.industryIcon}>🎓</div>
              <h3>Education</h3>
              <p>Helping schools, colleges, and educational institutions attract the right students and build thriving learning communities</p>
              <ul>
                <li>Student enrollment growth</li>
                <li>Community engagement</li>
                <li>Brand positioning</li>
              </ul>
            </div>
            <div className={`${styles.industryCard} ${styles.realEstate}`}>
              <div className={styles.industryIcon}>🏠</div>
              <h3>Real Estate</h3>
              <p>Helping developers and realtors sell not just properties, but dreams, lifestyles, and future memories</p>
              <ul>
                <li>Property marketing</li>
                <li>Developer branding</li>
                <li>Buyer connection</li>
              </ul>
            </div>
            <div className={`${styles.industryCard} ${styles.interior}`}>
              <div className={styles.industryIcon}>🎨</div>
              <h3>Interior Design</h3>
              <p>Helping interior designers and architects attract clients who appreciate their unique style and vision</p>
              <ul>
                <li>Portfolio showcasing</li>
                <li>Client attraction</li>
                <li>Design storytelling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div className={styles.timelineSection}>
          <h2>Our Journey of Growth</h2>
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
          <h2>Your Growth Partners</h2>
          <p className={styles.teamIntro}>
            Led by <strong>Prabhat Ranjan</strong>, we're a team that genuinely cares about your success in 
            <strong> Education</strong>, <strong>Real Estate</strong>, and <strong>Interior Design</strong>.
          </p>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <div className={styles.memberHeader}>
                  <div className={styles.memberAvatar}>
                    <span>{index === 0 ? "👨‍💼" : "👥"}</span>
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
          <h2>Our Core Beliefs</h2>
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
          <h2>Success Stories We're Proud Of</h2>
          <div className={styles.storiesGrid}>
            {clientStories.map((story, index) => (
              <div key={index} className={styles.storyCard}>
                <h3>{story.client}</h3>
                <div className={styles.storyContent}>
                  <div className={styles.challenge}>
                    <strong>The Challenge:</strong> {story.challenge}
                  </div>
                  <div className={styles.solution}>
                    <strong>Our Approach:</strong> {story.solution}
                  </div>
                  <div className={styles.results}>
                    <strong>Impact Created:</strong> {story.results}
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
          <h2>Ready to Write Your Success Story?</h2>
          <p>Let's build something remarkable together in Education, Real Estate, or Interior Design</p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>Start Your Partnership</button>
            <button className={styles.secondaryBtn}>Chat with Prabhat</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedAboutUs;