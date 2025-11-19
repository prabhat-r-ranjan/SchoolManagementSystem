'use client';

import { useState } from 'react';
import styles from './PramrixHeroSection.module.css';

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleFreeStrategy = () => {
    console.log('Get Free Strategy clicked');
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
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Digital Marketing Analytics" 
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
            <span>🚀 3-5X ROI Guaranteed</span>
          </div>

          {/* Modern Headline */}
          <h1 className={styles.headline}>
            Your Growth Partner in 
            <span className={styles.highlight}> Real Estate, Interiors,</span> 
            <span className={styles.highlight}> Home Brands & Premium Schools</span>
          </h1>

          {/* Clean Sub Headline */}
          <h2 className={styles.subheadline}>
            Sales-Driven Digital Marketing That Delivers Results
          </h2>

          {/* Concise Description */}
          <p className={styles.description}>
            At <strong>Pramrix</strong>, we don't just run campaigns - we help you grow. 
            Our strategies are built on data, experience and real business understanding.
            <br/>
            We specialize in generating <strong>high-intent leads</strong> and driving consistent
            <strong> 3–5X ROI</strong> for businesses in competitive markets.
          </p>

          {/* Modern CTA Buttons */}
          <div className={styles.ctaSection}>
            <button 
              className={styles.primaryButton}
              onClick={handleFreeStrategy}
            >
              <span className={styles.buttonIcon}>🎯</span>
              Get Your Free Strategy
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={handleCallNow}
            >
              <span className={styles.buttonIcon}>📞</span>
              Call Now
            </button>
          </div>

          {/* Elegant Trust Metrics */}
          <div className={styles.trustMetrics}>
            <div className={styles.metric}>
              <div className={styles.metricIcon}>📈</div>
              <span className={styles.metricNumber}>3-5X</span>
              <span className={styles.metricLabel}>Guaranteed ROI</span>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricIcon}>🎯</div>
              <span className={styles.metricNumber}>100%</span>
              <span className={styles.metricLabel}>Sales Focused</span>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricIcon}>⚡</div>
              <span className={styles.metricNumber}>24/7</span>
              <span className={styles.metricLabel}>Monitoring</span>
            </div>
          </div>
        </div>

        {/* Professional Image on Right */}
        <div className={styles.visual}>
          <div className={styles.imageContainer}>
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Business professionals collaborating"
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