"use client"
import React, { useState, useEffect, useRef } from 'react';
import styles from './VisionSection.module.css'; // Renamed CSS module

const VisionSection = () => {
  const [activePillar, setActivePillar] = useState(0);
  const [counterStarted, setCounterStarted] = useState(false);
  const sectionRef = useRef(null);

  // Updated Pillars: Focus on Future & Innovation
  const pillars = [
    {
      title: "Future-Ready Curriculum",
      description: "Our cutting-edge academic framework is designed not just for today's world, but for tomorrow's. We integrate emerging technologies, critical thinking, and global perspectives from day one.",
      icon: "🚀", // Represents innovation and launch
    },
    {
      title: "World-Class Founders",
      description: "Learn from the best. Our founding faculty and advisors are renowned educators and industry leaders recruited from across the globe to build a truly exceptional learning institution.",
      icon: "👩‍🏫", // Represents exceptional faculty
    },
    {
      title: "State-of-the-Art Campus",
      description: "Step into a learning environment built for the future. Our brand-new campus features advanced labs, collaborative spaces, and sustainable design to inspire innovation and discovery.",
      icon: "🏫", // Represents a new, modern building
    },
    {
      title: "A Founding Community",
      description: "Be part of something special from the very beginning. The first cohort of students will shape the culture and traditions of SDIS, creating a unique and lasting legacy.",
      icon: "🤝", // Represents community and foundation
    },
  ];

  // Changed Stats: Focus on Founding Strengths & Future Promise
  const stats = [
    { number: 1, suffix: '', label: 'Founding Year' }, // Dynamic, will be 2026
    { number: 100, suffix: '%', label: 'Focus on Your Child\'s Future' }, // A promise
    { number: 15, suffix: ':1', label: 'Planned Student-Teacher Ratio' }, // A design goal
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCounterStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.visionSection}>
      <div className={styles.visionContainer}>
        <div className={styles.visionContent}>
          {/* Changed Headline and Text */}
          <h2>Launching a <span className={styles.highlight}>New Era</span></h2>
          <p>
            Savitri Devi International School opens its doors in April 2026. We are not just starting a school; we are igniting a revolution in education. This is your opportunity to be part of the founding community that will set a new standard for excellence.
          </p>
          
          <div className={styles.graphicContainer}>
            <div className={styles.circle}></div>
            <div className={styles.orbits}>
              <div className={styles.orbit1}></div>
              <div className={styles.orbit2}></div>
              <div className={styles.centerDot}></div> {/* Adds a "launch point" */}
            </div>
          </div>

          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <div className={styles.statNumber}>
                  {/* Special case for the founding year */}
                  {counterStarted && (index === 0 ? '2026' : <Counter target={stat.number} suffix={stat.suffix} />)}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Updated Call-to-Action */}
          <button className={styles.ctaButton}>Be a Founding Family</button>
        </div>

        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${styles.pillarCard} ${index === activePillar ? styles.active : ''}`}
              onMouseEnter={() => setActivePillar(index)}
              onClick={() => setActivePillar(index)}
            >
              <div className={styles.pillarHeader}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <h3>{pillar.title}</h3>
              </div>
              <div className={styles.pillarDescription}>
                <p>{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter Component remains the same
const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const duration = 2000;

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>{count}{suffix}</>
  );
};

export default VisionSection;