import { useState } from 'react';
import styles from './SportsRecreation.module.css';

const SportsRecreation = () => {
  const [activeCategory, setActiveCategory] = useState('indoor');

  const sportsData = {
    indoor: {
      title: "Indoor Sports Facilities",
      description: "Our state-of-the-art indoor facilities allow students to engage in various sports activities regardless of weather conditions.",
      facilities: [
        {
          name: "Basketball Court",
          description: "Full-sized professional basketball court with FIBA standards",
          icon: "fas fa-basketball-ball",
          features: ["Professional flooring", "Electronic scoreboard", "Spectator seating"]
        },
        {
          name: "Badminton Courts",
          description: "4 professional badminton courts with tournament standards",
          icon: "fas fa-table-tennis",
          features: ["Olympic-standard flooring", "Professional lighting", "Tournament nets"]
        },
        {
          name: "Table Tennis",
          description: "8 competition-grade table tennis tables",
          icon: "fas fa-table-tennis",
          features: ["International standard tables", "Professional paddles", "Competition balls"]
        },
        {
          name: "Gymnasium",
          description: "Fully-equipped gym with modern equipment",
          icon: "fas fa-dumbbell",
          features: ["Cardio machines", "Weight training", "Fitness instructor"]
        }
      ]
    },
    outdoor: {
      title: "Outdoor Sports Facilities",
      description: "Extensive outdoor sports infrastructure that promotes physical fitness and team spirit among students.",
      facilities: [
        {
          name: "Football Field",
          description: "FIFA-standard football field with artificial turf",
          icon: "fas fa-futbol",
          features: ["Professional turf", "Flood lighting", "Seating for 500"]
        },
        {
          name: "Cricket Ground",
          description: "Professional cricket ground with practice nets",
          icon: "fas fa-baseball-ball",
          features: ["Well-maintained pitch", "Practice nets", "Pavilion"]
        },
        {
          name: "Athletics Track",
          description: "400m synthetic athletic track with field events facilities",
          icon: "fas fa-running",
          features: ["8-lane track", "Long jump pit", "High jump area"]
        },
        {
          name: "Tennis Courts",
          description: "4 synthetic surface tennis courts",
          icon: "fas fa-tennis-ball",
          features: ["Professional surface", "Training wall", "Lighting for night play"]
        }
      ]
    },
    aquatic: {
      title: "Aquatic Facilities",
      description: "Modern aquatic center designed for swimming training and competitive events.",
      facilities: [
        {
          name: "Olympic Swimming Pool",
          description: "25m competition swimming pool with 6 lanes",
          icon: "fas fa-swimmer",
          features: ["Heated pool", "Starting blocks", "Professional timing system"]
        },
        {
          name: "Learner's Pool",
          description: "Separate pool for beginners and young children",
          icon: "fas fa-water-ladder",
          features: ["Gradual depth", "Safety equipment", "Qualified instructors"]
        },
        {
          name: "Diving Area",
          description: "Specialized area for diving practice",
          icon: "fas fa-water",
          features: ["Springboards", "Safety mats", "Coach supervision"]
        }
      ]
    },
    special: {
      title: "Specialized Facilities",
      description: "Unique sports facilities that cater to diverse interests and talents.",
      facilities: [
        {
          name: "Martial Arts Dojo",
          description: "Dedicated space for martial arts training",
          icon: "fas fa-user-ninja",
          features: ["Tatami mats", "Training equipment", "Certified instructors"]
        },
        {
          name: "Yoga & Meditation Hall",
          description: "Peaceful space for yoga and mindfulness practices",
          icon: "fas fa-spa",
          features: ["Soundproof design", "Yoga props", "Natural lighting"]
        },
        {
          name: "Adventure Sports",
          description: "Facilities for rock climbing and adventure activities",
          icon: "fas fa-mountain",
          features: ["Climbing wall", "Safety equipment", "Trained supervisors"]
        }
      ]
    }
  };

  const sportsPrograms = [
    {
      title: "Competitive Sports",
      description: "Training programs for inter-school and national level competitions",
      icon: "fas fa-trophy",
      activities: ["Football", "Basketball", "Cricket", "Swimming", "Athletics"]
    },
    {
      title: "Recreational Sports",
      description: "Non-competitive sports for fitness and enjoyment",
      icon: "fas fa-heart",
      activities: ["Table Tennis", "Badminton", "Yoga", "Martial Arts"]
    },
    {
      title: "Sports Academies",
      description: "Specialized training with professional coaches",
      icon: "fas fa-graduation-cap",
      activities: ["Football Academy", "Swimming Academy", "Cricket Coaching"]
    }
  ];

  const achievements = [
    { year: "2023", achievement: "State Champions - Football U-16" },
    { year: "2023", achievement: "National Bronze - Swimming" },
    { year: "2022", achievement: "Zonal Winners - Basketball" },
    { year: "2022", achievement: "Best Athlete Award - State Meet" },
    { year: "2021", achievement: "National Qualifiers - Cricket" }
  ];

  const coaches = [
    { name: "Rajesh Kumar", sport: "Football", qualification: "AFC Certified Coach" },
    { name: "Priya Sharma", sport: "Swimming", qualification: "National Level Coach" },
    { name: "Vikram Singh", sport: "Basketball", qualification: "Former State Player" },
    { name: "Anjali Mehta", sport: "Athletics", qualification: "Sports Science Degree" }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <div className={styles.subtitle}>ACTIVE LEARNING</div>
            <h2 className={styles.title}>Sports & Recreation</h2>
            <div className={styles.underline}></div>
          </div>
          <p className={styles.intro}>
            We believe in the holistic development of every student through sports and physical activities. 
            Our world-class facilities and professional coaching help students excel in sports while learning 
            valuable life skills like teamwork, discipline, and leadership.
          </p>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>15+</div>
            <div className={styles.statLabel}>Sports Disciplines</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>8</div>
            <div className={styles.statLabel}>Professional Coaches</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>12</div>
            <div className={styles.statLabel}>Academy Teams</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Tournaments Won</div>
          </div>
        </div>

        <div className={styles.categorySection}>
          <h3 className={styles.sectionTitle}>Sports Facilities</h3>
          
          <div className={styles.categoryTabs}>
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'indoor' ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory('indoor')}
            >
              <i className="fas fa-home"></i>
              Indoor
            </button>
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'outdoor' ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory('outdoor')}
            >
              <i className="fas fa-tree"></i>
              Outdoor
            </button>
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'aquatic' ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory('aquatic')}
            >
              <i className="fas fa-swimmer"></i>
              Aquatic
            </button>
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'special' ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory('special')}
            >
              <i className="fas fa-star"></i>
              Special
            </button>
          </div>

          <div className={styles.categoryContent}>
            <div className={styles.categoryInfo}>
              <h4>{sportsData[activeCategory].title}</h4>
              <p>{sportsData[activeCategory].description}</p>
            </div>

            <div className={styles.facilitiesGrid}>
              {sportsData[activeCategory].facilities.map((facility, index) => (
                <div key={index} className={styles.facilityCard}>
                  <div className={styles.facilityHeader}>
                    <div className={styles.facilityIcon}>
                      <i className={facility.icon}></i>
                    </div>
                    <div>
                      <h5>{facility.name}</h5>
                      <p>{facility.description}</p>
                    </div>
                  </div>
                  <div className={styles.featuresList}>
                    <h6>Features:</h6>
                    <ul>
                      {facility.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.programsSection}>
          <h3 className={styles.sectionTitle}>Sports Programs</h3>
          <p className={styles.sectionDescription}>
            We offer diverse sports programs catering to different interests and skill levels
          </p>
          
          <div className={styles.programsGrid}>
            {sportsPrograms.map((program, index) => (
              <div key={index} className={styles.programCard}>
                <div className={styles.programIcon}>
                  <i className={program.icon}></i>
                </div>
                <h4>{program.title}</h4>
                <p>{program.description}</p>
                <div className={styles.activitiesList}>
                  {program.activities.map((activity, i) => (
                    <span key={i} className={styles.activityTag}>{activity}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.achievementsSection}>
          <div className={styles.achievementsContent}>
            <div className={styles.achievementsList}>
              <h3>Recent Achievements</h3>
              <div className={styles.achievementsTimeline}>
                {achievements.map((item, index) => (
                  <div key={index} className={styles.achievementItem}>
                    <div className={styles.achievementYear}>{item.year}</div>
                    <div className={styles.achievementText}>{item.achievement}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.coachesSection}>
              <h3>Our Coaches</h3>
              <div className={styles.coachesList}>
                {coaches.map((coach, index) => (
                  <div key={index} className={styles.coachCard}>
                    <div className={styles.coachAvatar}>
                      <i className="fas fa-user"></i>
                    </div>
                    <div className={styles.coachInfo}>
                      <h5>{coach.name}</h5>
                      <p>{coach.sport}</p>
                      <span>{coach.qualification}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Join Our Sports Program</h3>
            <p>Interested in trying out for one of our sports teams or academies? Reach out to our sports department</p>
            <button className={styles.ctaButton}>
              Contact Sports Department <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className={styles.ctaImage}>
            <div className={styles.imagePlaceholder}>
              <i className="fas fa-trophy"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsRecreation;