// components/SavitriFooter.jsx
"use client";
import React from 'react';
import styles from './SavitriFooter.module.css';

const SavitriFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <div className={styles.logoSection}>
              <div className={styles.schoolBrand}>
                <div className={styles.logo}>SDIS</div>
                <h3 className={styles.schoolName}>Savitri Devi International School</h3>
              </div>
              <p className={styles.tagline}>Excellence in Education Since 1985</p>
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Academics</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Student Life</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Resources</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#">Parent Portal</a></li>
              <li><a href="#">Student Portal</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Alumni</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact Us</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Education Lane, Knowledge City, 560001</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <i className="fas fa-envelope"></i>
                <span>info@schooldomain.edu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={styles.footerContainer}>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Savitri Devi International School. All Rights Reserved.</p>
          </div>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SavitriFooter;