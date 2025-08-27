// components/Header/index.js
"use client"; 
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      title: "About Us",
      link: "#",
      subItems: [
        { title: "School History", link: "#" },
        { title: "Vision & Mission", link: "#" },
        { title: "Principal's Message ✨", link: "#" },
        { title: "Leadership Team ✨", link: "#" },
        { title: "Accreditation / Affiliations", link: "#" },
      ]
    },
    {
      title: "Academics",
      link: "#",
      subItems: [
        { title: "Curriculum Overview (CBSE / IB / ICSE / Cambridge)", link: "#" },
        { title: "Grade-wise Programs", link: "#" },
        { title: "Teaching Methodology ✨", link: "#" },
        { title: "Faculty Profiles ✨", link: "#" },
        { title: "Digital Learning / Smart Classrooms ✨", link: "#" },
      ]
    },
    {
      title: "Campus & Facilities",
      link: "#",
      subItems: [
        { title: "Infrastructure (classrooms, labs, library)", link: "#" },
        { title: "Sports & Recreation", link: "#" },
        { title: "Boarding / Hostel (if any)", link: "#" },
        { title: "Safety & Security Measures", link: "#" },
        { title: "Transport Facilities", link: "#" },
      ]
    },
    {
      title: "Admissions",
      link: "#",
      subItems: [
        { title: "Admission Process", link: "#" },
        { title: "Online Application Form", link: "#" },
        { title: "Fee Structure ✨", link: "#" },
        { title: "Scholarship & Financial Aid ✨", link: "#" },
        { title: "FAQs", link: "#" },
      ]
    },
    {
      title: "Student Life",
      link: "#",
      subItems: [
        { title: "Extracurricular Activities", link: "#" },
        { title: "Clubs & Societies ✨", link: "#" },
        { title: "Events & Celebrations ✨", link: "#" },
        { title: "Community Service ✨", link: "#" },
      ]
    },
    {
      title: "Gallery / Media",
      link: "#",
      subItems: [
        { title: "Photos", link: "#" },
        { title: "Videos ✨", link: "#" },
        { title: "Virtual Tour ✨", link: "#" },
      ]
    },
    {
      title: "Alumni ✨",
      link: "#",
      subItems: [
        { title: "Alumni Success Stories", link: "#" },
        { title: "Alumni Network Registration", link: "#" },
      ]
    },
    {
      title: "News & Updates ✨",
      link: "#",
      subItems: [
        { title: "School Announcements", link: "#" },
        { title: "Blog / Articles", link: "#" },
      ]
    },
    {
      title: "Contact",
      link: "#",
      subItems: [
        { title: "Contact Form", link: "#" },
        { title: "Google Map Integration", link: "#" },
        { title: "Social Media Links", link: "#" },
      ]
    }
  ];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.topBar}>
        <div className={styles.schoolName}>
          <div className={styles.logo}>ES</div>
          <h1>Excel School</h1>
        </div>
        <div className={styles.topBarActions}>
          <a href="tel:+12345678900">
            <i className="fas fa-phone"></i> +1 (234) 567-8900
          </a>
          <a href="mailto:info@excelschool.edu">
            <i className="fas fa-envelope"></i> info@excelschool.edu
          </a>
        </div>
      </div>
      
      <div className={styles.mainNav}>
        <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
        
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>
                {item.title} {item.subItems && <i className="fas fa-chevron-down"></i>}
              </a>
              {item.subItems && (
                <ul className={styles.dropdown}>
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.link}>{subItem.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        
        <div className={styles.navActions}>
          <a href="#" className={styles.applyBtn}>Apply Now</a>
          <a href="#" className={styles.portalBtn}>Student Portal</a>
        </div>
      </div>
    </div>
  );
};

export default Header;