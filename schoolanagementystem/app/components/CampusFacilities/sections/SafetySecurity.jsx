import React, { useState } from 'react';
import styles from './SafetySecurity.module.css';

const SafetySecurity = () => {
  const [activeTab, setActiveTab] = useState('physical');

  const securityMeasures = {
    physical: [
      {
        icon: '🔒',
        title: '24/7 Security Personnel',
        description: 'Trained security staff monitoring all entry points and patrolling campus grounds'
      },
      {
        icon: '🎥',
        title: 'Surveillance System',
        description: 'Comprehensive CCTV coverage with 300+ cameras across campus'
      },
      {
        icon: '🚪',
        title: 'Access Control',
        description: 'Biometric entry systems and electronic keycard access to all buildings'
      }
    ],
    emergency: [
      {
        icon: '🚨',
        title: 'Emergency Response',
        description: 'Trained emergency response team and regular drills for various scenarios'
      },
      {
        icon: '🏥',
        title: 'Medical Facilities',
        description: 'Fully equipped medical center with certified nurses on duty'
      },
      {
        icon: '📱',
        title: 'Alert System',
        description: 'Instant notification system for parents and staff during emergencies'
      }
    ],
    digital: [
      {
        icon: '🛡️',
        title: 'Cyber Security',
        description: 'Advanced firewall protection and secure network infrastructure'
      },
      {
        icon: '📊',
        title: 'Data Protection',
        description: 'Encrypted student data storage and privacy compliance'
      },
      {
        icon: '👨‍💻',
        title: 'IT Monitoring',
        description: '24/7 network monitoring and content filtering systems'
      }
    ],
    health: [
      {
        icon: '🧼',
        title: 'Sanitation Protocols',
        description: 'Regular disinfection and hygiene monitoring throughout campus'
      },
      {
        icon: '🌡️',
        title: 'Health Screening',
        description: 'Daily health checks and temperature monitoring at entry points'
      },
      {
        icon: '💊',
        title: 'Wellness Program',
        description: 'Comprehensive health and wellness education for students'
      }
    ]
  };

  return (
    <section className={styles.safetySection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Safety & Security Measures</h2>
          <p className={styles.subtitle}>
            Ensuring the highest standards of safety and security for our students and staff
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          {Object.keys(securityMeasures).map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Security
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.measuresGrid}>
            {securityMeasures[activeTab].map((measure, index) => (
              <div key={index} className={styles.measureCard}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{measure.icon}</span>
                </div>
                <h3 className={styles.measureTitle}>{measure.title}</h3>
                <p className={styles.measureDescription}>{measure.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className={styles.emergencyContact}>
          <h3 className={styles.emergencyTitle}>Emergency Contact</h3>
          <div className={styles.contactInfo}>
            <p className={styles.contactNumber}>📞 +1 (555) 123-EMER (3637)</p>
            <p className={styles.contactEmail}>✉️ security@premiumschool.edu</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySecurity;