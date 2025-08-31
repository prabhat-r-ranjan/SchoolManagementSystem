import { useState } from 'react';
import styles from './DigitalLearning.module.css';

const DigitalLearning = () => {
  const [activeTab, setActiveTab] = useState(0);

  const digitalFeatures = [
    {
      title: "Smart Classrooms",
      description: "Interactive digital boards, audio-visual systems, and high-speed internet in every classroom to enhance the learning experience.",
      icon: "fas fa-chalkboard",
      features: ["Interactive Whiteboards", "4K Projectors", "Audio Systems", "High-Speed WiFi"]
    },
    {
      title: "Learning Management System",
      description: "Our customized LMS allows students to access study materials, submit assignments, and track their progress anytime, anywhere.",
      icon: "fas fa-laptop",
      features: ["Online Assignments", "Progress Tracking", "Resource Library", "Parent Portal"]
    },
    {
      title: "Coding & Robotics Lab",
      description: "State-of-the-art lab equipped with the latest technology to introduce students to coding, programming, and robotics from an early age.",
      icon: "fas fa-robot",
      features: ["Programming Basics", "Robotics Kits", "3D Printing", "AI Introduction"]
    },
    {
      title: "Digital Library",
      description: "Access to thousands of e-books, academic journals, and educational databases to support research and self-paced learning.",
      icon: "fas fa-book-open",
      features: ["E-Book Collection", "Research Databases", "Audiobooks", "Online Subscriptions"]
    }
  ];

  const digitalTools = [
    {
      name: "Tablet Learning",
      description: "Grade-appropriate tablets with educational apps for interactive learning experiences.",
      icon: "fas fa-tablet-alt"
    },
    {
      name: "Educational Apps",
      description: "Curated selection of educational applications that reinforce classroom learning.",
      icon: "fas fa-mobile-alt"
    },
    {
      name: "Online Assessments",
      description: "Regular online quizzes and tests to evaluate understanding and provide immediate feedback.",
      icon: "fas fa-poll"
    },
    {
      name: "Virtual Labs",
      description: "Simulated laboratory environments for safe experimentation and exploration.",
      icon: "fas fa-vial"
    },
    {
      name: "Video Lessons",
      description: "Recorded lectures and tutorials for revision and catching up on missed classes.",
      icon: "fas fa-video"
    },
    {
      name: "Collaboration Tools",
      description: "Platforms that enable group projects and peer-to-peer learning.",
      icon: "fas fa-users"
    }
  ];

  const stats = [
    { number: "100%", label: "Classrooms Digitally Equipped" },
    { number: "500+", label: "Digital Learning Resources" },
    { number: "1:5", label: "Device to Student Ratio" },
    { number: "24/7", label: "Learning Platform Access" }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <div className={styles.subtitle}>MODERN EDUCATION</div>
            <h2 className={styles.title}>Digital Learning Initiative</h2>
            <div className={styles.underline}></div>
          </div>
          <p className={styles.intro}>
            We integrate technology seamlessly into our curriculum to prepare students for a digital future, 
            enhancing engagement and expanding learning beyond classroom walls.
          </p>
        </div>

        <div className={styles.statsSection}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.featuresSection}>
          <h3 className={styles.sectionTitle}>Our Digital Infrastructure</h3>
          
          <div className={styles.featuresGrid}>
            {digitalFeatures.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className={feature.icon}></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <div className={styles.featureList}>
                  {feature.features.map((item, i) => (
                    <span key={i} className={styles.featureTag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.toolsSection}>
          <h3 className={styles.sectionTitle}>Digital Learning Tools</h3>
          <p className={styles.sectionDescription}>
            We utilize a variety of digital tools to enhance the educational experience and cater to different learning styles.
          </p>
          
          <div className={styles.toolsGrid}>
            {digitalTools.map((tool, index) => (
              <div key={index} className={styles.toolCard}>
                <div className={styles.toolIcon}>
                  <i className={tool.icon}></i>
                </div>
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.tabsSection}>
          <h3 className={styles.sectionTitle}>Our Digital Learning Approach</h3>
          
          <div className={styles.tabHeaders}>
            <button 
              className={`${styles.tabHeader} ${activeTab === 0 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(0)}
            >
              <i className="fas fa-blender-phone"></i>
              Blended Learning
            </button>
            <button 
              className={`${styles.tabHeader} ${activeTab === 1 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(1)}
            >
              <i className="fas fa-graduation-cap"></i>
              Teacher Training
            </button>
            <button 
              className={`${styles.tabHeader} ${activeTab === 2 ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(2)}
            >
              <i className="fas fa-shield-alt"></i>
              Digital Safety
            </button>
          </div>
          
          <div className={styles.tabContent}>
            {activeTab === 0 && (
              <div className={styles.tabPanel}>
                <div className={styles.panelImage}>
                  <i className="fas fa-blender-phone"></i>
                </div>
                <div className={styles.panelText}>
                  <h4>Blended Learning Model</h4>
                  <p>We combine traditional classroom teaching with digital resources to create a holistic learning experience. Our approach includes:</p>
                  <ul>
                    <li>Face-to-face instruction complemented by digital tools</li>
                    <li>Flipped classroom models where appropriate</li>
                    <li>Online resources for reinforcement and extension</li>
                    <li>Regular integration of multimedia content</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 1 && (
              <div className={styles.tabPanel}>
                <div className={styles.panelImage}>
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className={styles.panelText}>
                  <h4>Continuous Teacher Training</h4>
                  <p>Our educators receive regular training to effectively integrate technology into their teaching practice:</p>
                  <ul>
                    <li>Quarterly workshops on new digital tools</li>
                    <li>Peer learning and best practice sharing</li>
                    <li>Certification programs in educational technology</li>
                    <li>Dedicated technical support team</li>
                  </ul>
                </div>
              </div>
            )}
            
            {activeTab === 2 && (
              <div className={styles.tabPanel}>
                <div className={styles.panelImage}>
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className={styles.panelText}>
                  <h4>Digital Safety & Citizenship</h4>
                  <p>We prioritize student safety and responsible technology use through:</p>
                  <ul>
                    <li>Secure, monitored digital environments</li>
                    <li>Digital citizenship curriculum for all grades</li>
                    <li>Strict privacy policies and data protection</li>
                    <li>Parent education on digital safety</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Experience Our Digital Learning Environment</h3>
            <p>Schedule a tour to see our technology integration in action and learn how we're preparing students for the future</p>
            <button className={styles.ctaButton}>
              Schedule a Demo <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className={styles.ctaImage}>
            <div className={styles.imagePlaceholder}>
              <i className="fas fa-laptop-code"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalLearning;