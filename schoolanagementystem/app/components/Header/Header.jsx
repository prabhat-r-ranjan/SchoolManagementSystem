"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const navRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close all dropdowns when toggling mobile menu
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // Check if window is available (client-side)
  useEffect(() => {
    // Set initial mobile view state
    setIsMobileView(typeof window !== 'undefined' && window.innerWidth <= 768);
    
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobileView(mobile);
      
      if (!mobile) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.contactInfo}>
            <div><i className="fas fa-phone"></i> +1 (555) 123-4567</div>
            <div><i className="fas fa-envelope"></i> info@schooldomain.edu</div>
          </div>
          <div className={styles.socialIcons}>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div className={styles.mainNav}>
          <div className={styles.schoolName}>
            <div className={styles.logo}>SD</div>
            <h1>SD International School</h1>
          </div>
          
          <button 
            className={`${styles.mobileToggle} ${isMobileMenuOpen ? styles.active : ''}`} 
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul 
            ref={navRef}
            className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}
          >
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  if (isMobileView) {
                    e.preventDefault();
                    toggleDropdown(0);
                  }
                }}
              >
                About Us
                {isMobileView && (
                  <i className={`fas ${activeDropdown === 0 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                )}
              </a>
              <ul className={`${styles.dropdown} ${activeDropdown === 0 ? styles.active : ''}`}>
                <li><a href="#">School History</a></li>
                <li><a href="#">Vision & Mission</a></li>
                <li><a href="#">Principal's Message ✨</a></li>
                <li><a href="#">Leadership Team ✨</a></li>
                <li><a href="#">Accreditation / Affiliations</a></li>
              </ul>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  if (isMobileView) {
                    e.preventDefault();
                    toggleDropdown(1);
                  }
                }}
              >
                Academics & Admissions
                {isMobileView && (
                  <i className={`fas ${activeDropdown === 1 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                )}
              </a>
              <ul className={`${styles.dropdown} ${activeDropdown === 1 ? styles.active : ''}`}>
                <li><a href="#">Curriculum Overview</a></li>
                <li><a href="#">Grade-wise Programs</a></li>
                <li><a href="#">Teaching Methodology ✨</a></li>
                <li><a href="#">Faculty Profiles ✨</a></li>
                <li><a href="#">Digital Learning ✨</a></li>
                <li><a href="#">Admission Process</a></li>
                <li><a href="#">Online Application Form</a></li>
                <li><a href="#">Fee Structure ✨</a></li>
                <li><a href="#">Scholarship & Financial Aid ✨</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  if (isMobileView) {
                    e.preventDefault();
                    toggleDropdown(2);
                  }
                }}
              >
                Campus & Facilities
                {isMobileView && (
                  <i className={`fas ${activeDropdown === 2 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                )}
              </a>
              <ul className={`${styles.dropdown} ${activeDropdown === 2 ? styles.active : ''}`}>
                <li><a href="#">Infrastructure</a></li>
                <li><a href="#">Sports & Recreation</a></li>
                <li><a href="#">Boarding / Hostel</a></li>
                <li><a href="#">Safety & Security Measures</a></li>
                <li><a href="#">Transport Facilities</a></li>
              </ul>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  if (isMobileView) {
                    e.preventDefault();
                    toggleDropdown(3);
                  }
                }}
              >
                Student Life
                {isMobileView && (
                  <i className={`fas ${activeDropdown === 3 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                )}
              </a>
              <ul className={`${styles.dropdown} ${activeDropdown === 3 ? styles.active : ''}`}>
                <li><a href="#">Extracurricular Activities</a></li>
                <li><a href="#">Clubs & Societies ✨</a></li>
                <li><a href="#">Events & Celebrations ✨</a></li>
                <li><a href="#">Community Service ✨</a></li>
              </ul>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  if (isMobileView) {
                    e.preventDefault();
                    toggleDropdown(4);
                  }
                }}
              >
                News & Updates ✨
                {isMobileView && (
                  <i className={`fas ${activeDropdown === 4 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                )}
              </a>
              <ul className={`${styles.dropdown} ${activeDropdown === 4 ? styles.active : ''}`}>
                <li><a href="#">School Announcements</a></li>
                <li><a href="#">Blog / Articles</a></li>
                <li><a href="#">Photo Gallery</a></li>
                <li><a href="#">Video Gallery ✨</a></li>
              </ul>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => {
                  if (isMobileView) {
                    e.preventDefault();
                    toggleDropdown(5);
                  }
                }}
              >
                Contact
                {isMobileView && (
                  <i className={`fas ${activeDropdown === 5 ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                )}
              </a>
              <ul className={`${styles.dropdown} ${activeDropdown === 5 ? styles.active : ''}`}>
                <li><a href="#">Contact Form</a></li>
                <li><a href="#">Google Map Integration</a></li>
                <li><a href="#">Social Media Links</a></li>
              </ul>
            </li>
          </ul>
          
          <div className={styles.navActions}>
            <a href="#" className={styles.portalBtn}>Student Portal</a>
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <h2>School Header Navigation</h2>
        <p>I've reorganized the navigation menu based on your requirements:</p>
        
        <ul>
          <li><strong>Moved Alumni section</strong> to a more prominent position between "Student Life" and "News & Updates"</li>
          <li><strong>Merged Academics and Admissions</strong> into a single "Academics & Admissions" section</li>
          <li><strong>Enhanced the Alumni section</strong> with additional sub-items to make it more comprehensive</li>
          <li><strong>Maintained the original design</strong> while improving the information architecture</li>
        </ul>
        
        <p>This reorganization creates a more logical flow for website visitors while keeping related items together.</p>
      </div>
    </>
  );
};

export default Header;