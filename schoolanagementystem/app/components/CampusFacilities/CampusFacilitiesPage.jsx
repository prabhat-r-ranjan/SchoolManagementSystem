"use client";
import React, { useState, useEffect } from 'react';
import styles from './CampusFacilitiesPage.module.css';

// Import all section components
import Infrastructure from './sections/Infrastructure';
import SportsRecreation from './sections/SportsRecreation';
import SafetySecurity from './sections/SafetySecurity';

const CampusFacilitiesPage = () => {
  const [activeTab, setActiveTab] = useState('infrastructure');
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle hash changes on page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && [
      'infrastructure', 'sports', 'boarding', 'safety', 
      'transport', 'gallery'
    ].includes(hash)) {
      setActiveTab(hash);
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Update URL hash without scrolling
      window.history.replaceState(null, null, `#${sectionId}`);
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const handleTabClick = (tabId) => {
    if (isScrolling) return;
    setActiveTab(tabId);
    scrollToSection(tabId);
  };

  const tabs = [
    { id: 'infrastructure', label: 'Infrastructure', icon: 'fas fa-building' },
    { id: 'sports', label: 'Sports & Recreation', icon: 'fas fa-running' },
    { id: 'boarding', label: 'Boarding / Hostel', icon: 'fas fa-bed' },
    { id: 'safety', label: 'Safety & Security', icon: 'fas fa-shield-alt' },
    { id: 'transport', label: 'Transport Facilities', icon: 'fas fa-bus' },
    { id: 'gallery', label: 'Campus Gallery', icon: 'fas fa-images' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Campus & Facilities</h1>
          <p>Experience our world-class infrastructure designed to nurture growth, creativity, and holistic development</p>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.tabNavigation}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              <i className={tab.icon}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.content}>
          <div id="infrastructure">
            <Infrastructure />
          </div>
          <div  id="sports">
            <SportsRecreation />
          </div>
         <div  id="sports">
            <SportsRecreation />
          </div>
           <div  id="safety">
            <CampusFacilities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusFacilitiesPage;