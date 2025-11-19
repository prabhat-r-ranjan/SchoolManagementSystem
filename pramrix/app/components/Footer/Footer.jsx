'use client';

import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about-us" },
    { name: "Services", href: "#strategic-services" },
    { name: "How We Work", href: "#how-we-work" }
  ];

  const services = [
    "Growth Strategy & Planning",
    "Digital Transformation", 
    "Revenue Acceleration",
    "Brand Authority Building"
  ];

  const contactInfo = [
    { icon: "📧", detail: "pramrix.com" },
    { icon: "📱", detail: "91-8142814400" },
    { icon: "📍", detail: "Mantri Celestia Hyderabad" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainFooter}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🚀</span>
              <span className={styles.logoText}>YourCompany</span>
            </div>
            <p className={styles.brandDescription}>
              Your strategic growth partner dedicated to driving measurable business 
              results through data-driven strategies and expert execution.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span>📘</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <span>📸</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Our Services</h4>
            <ul className={styles.linksList}>
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#strategic-services" className={styles.footerLink}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              {contactInfo.map((contact, index) => (
                <div key={index} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{contact.icon}</span>
                  <span className={styles.contactDetail}>{contact.detail}</span>
                </div>
              ))}
            </div>
            <button className={styles.ctaButton}>
              Start Your Growth Journey
              <span className={styles.ctaArrow}>→</span>
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={styles.bottomFooter}>
          <div className={styles.copyright}>
            © {currentYear} YourCompany. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
            <a href="/terms" className={styles.legalLink}>Terms of Service</a>
            <a href="/cookies" className={styles.legalLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;