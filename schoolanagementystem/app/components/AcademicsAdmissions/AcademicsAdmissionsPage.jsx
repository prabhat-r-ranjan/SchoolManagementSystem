// components/AcademicsAdmissions/AcademicsAdmissionsPage.jsx
"use client";
import React, { useState, useEffect } from 'react';
import styles from './AcademicsAdmissionsPage.module.css';

// Import all section components
import CurriculumSection from './sections/CurriculumSection';
import GradeWisePrograms from './sections/GradeWisePrograms'; 
import TeachingMethodology from './sections/TeachingMethodology';
import FacultyProfiles from './sections/FacultyProfiles'; 
import DigitalLearning from './sections/DigitalLearning';
import AdmissionProcess from './sections/AdmissionProcess'; 
import OnlineApplicationForm from './sections/OnlineApplicationForm';
// import DigitalLearning from './sections/DigitalLearning';
// import AdmissionSection from './sections/AdmissionSection';
// import ApplicationSection from './sections/ApplicationSection';
// import FeesSection from './sections/FeesSection';
// import ScholarshipSection from './sections/ScholarshipSection';
// import FAQSection from './sections/FAQSection';

const AcademicsAdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState('curriculum');
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle hash changes on page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && [
      'curriculum', 'programs', 'methodology', 'faculty', 
      'digital', 'admission', 'application', 'fees', 
      'scholarship', 'faqs'
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
    { id: 'curriculum', label: 'Curriculum Overview', icon: 'fas fa-book-open' },
    { id: 'programs', label: 'Grade-wise Programs', icon: 'fas fa-graduation-cap' },
    { id: 'methodology', label: 'Teaching Methodology', icon: 'fas fa-chalkboard-teacher' },
    { id: 'faculty', label: 'Faculty Profiles', icon: 'fas fa-user-tie' },
    { id: 'digital', label: 'Digital Learning', icon: 'fas fa-laptop' },
    { id: 'admission', label: 'Admission Process', icon: 'fas fa-door-open' },
    { id: 'application', label: 'Online Application', icon: 'fas fa-file-alt' },
    { id: 'fees', label: 'Fee Structure', icon: 'fas fa-money-bill-wave' },
    { id: 'scholarship', label: 'Scholarship & Financial Aid', icon: 'fas fa-hand-holding-heart' },
    { id: 'faqs', label: 'FAQs', icon: 'fas fa-question-circle' }
  ];

  return (
    <div className={styles.container}>

      <div className={styles.contentContainer}>
       

        <div className={styles.content}>
          <CurriculumSection />
          <GradeWisePrograms />
          <TeachingMethodology />
          <FacultyProfiles />
          <DigitalLearning />
          <AdmissionProcess />
          <OnlineApplicationForm />
          {/* <ProgramsSection />
          <MethodologySection />
          
          <DigitalSection />
          <AdmissionSection />
          <ApplicationSection />
          <FeesSection />
          <ScholarshipSection />
          <FAQSection /> */}
        </div>
      </div>
    </div>
  );
};

export default AcademicsAdmissionsPage;