'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './PramrixHeader.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleCallNow = () => {
    window.location.href = 'tel:+911234567890';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About Us', href: '/about-us', type: 'route' },
    { name: 'Services', href: '/services', type: 'hash' },
    { name: 'How We Work', href: '/how-we-work', type: 'hash' },
    { name: 'Blog', href: '/blog', type: 'route' }
  ];

  const handleNavClick = (item) => {
    if (item.type === 'route') {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo - Left Side */}
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoText}>Pramrix</span>
          </Link>
        </div>

        {/* Right Side Container */}
        <div className={styles.rightSection}>
          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {navItems.map((item) => {
              if (item.type === 'route') {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${styles.navLink} ${
                      pathname === item.href ? styles.active : ''
                    }`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.name}
                  </Link>
                );
              } else {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={styles.navLink}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.name}
                  </a>
                );
              }
            })}
          </nav>

          {/* Call Now Button - Desktop */}
          <button className={styles.ctaButton} onClick={handleCallNow}>
            <span className={styles.phoneIcon}>📞</span>
            Call Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? styles.menuIconOpen : styles.menuIcon}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
        <nav className={styles.mobileNavContent}>
          {navItems.map((item) => {
            if (item.type === 'route') {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${
                    pathname === item.href ? styles.active : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            } else {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              );
            }
          })}
          <button 
            className={styles.mobileCtaButton} 
            onClick={handleCallNow}
          >
            <span className={styles.phoneIcon}>📞</span>
            Call Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;