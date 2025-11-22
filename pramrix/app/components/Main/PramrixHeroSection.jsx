'use client';

import { useState } from 'react';
import styles from './PramrixHeroSection.module.css';

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleFreeDemo = () => {
    console.log('Get Free Demo clicked');
    // Add your demo booking logic here
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+911234567890';
  };

  return (
    <section className={styles.hero}>
      {/* Clean Background */}
      <div className={styles.background}>
        <div className={styles.backgroundImage}>
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Modern School Classroom" 
            className={`${styles.image} ${isLoading ? styles.loading : styles.loaded}`}
            onLoad={() => setIsLoading(false)}
          />
          <div className={styles.overlay}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Premium Badge */}
          <div className={styles.badge}>
            <span>🚀 Save 100+ Staff Hours Monthly</span>
          </div>

          {/* Modern Headline - FOCUSED ON EDUCATION */}
          <h1 className={styles.headline}>
            Stop Managing Chaos. 
            <span className={styles.highlight}> Start Leading Your School</span>
          </h1>

          {/* Clean Sub Headline */}
          <h2 className={styles.subheadline}>
            AI-Powered Automation for Attendance, Fees & Parent Communication
          </h2>

          {/* Concise Description */}
          <p className={styles.description}>
            At <strong>Pramrix</strong>, we automate your daily administrative tasks so your staff can focus on education, not paperwork.
            <br/><br/>
            Our AI systems handle <strong>attendance tracking</strong>, <strong>fee reminders</strong>, and <strong>24/7 parent communication</strong> - saving you hundreds of hours monthly.
          </p>

          {/* Modern CTA Buttons */}
          <div className={styles.ctaSection}>
            <button 
              className={styles.primaryButton}
              onClick={handleFreeDemo}
            >
              <span className={styles.buttonIcon}>🤖</span>
              Get Free Demo
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={handleCallNow}
            >
              <span className={styles.buttonIcon}>📞</span>
              Call for Consultation
            </button>
          </div>

          {/* Updated Trust Metrics for Education */}
          <div className={styles.trustMetrics}>
            <div className={styles.metric}>
              <div className={styles.metricIcon}>⏰</div>
              <span className={styles.metricNumber}>100+</span>
              <span className={styles.metricLabel}>Hours Saved/Month</span>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricIcon}>🎯</div>
              <span className={styles.metricNumber}>24/7</span>
              <span className={styles.metricLabel}>Parent Support</span>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricIcon}>⚡</div>
              <span className={styles.metricNumber}>Zero</span>
              <span className={styles.metricLabel}>Manual Errors</span>
            </div>
          </div>
        </div>

        {/* Professional Image on Right - EDUCATION FOCUSED */}
        <div className={styles.visual}>
          <div className={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt="School dashboard and automation interface"
              className={styles.heroImage}
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;