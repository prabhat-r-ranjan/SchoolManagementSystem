"use client";
import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample school images (replace with your actual image paths)
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "SDRS School of Excellence Campus"
    },
    {
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Students in classroom"
    },
    {
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "School library"
    },
    {
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Science laboratory"
    },
    {
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "School sports facility"
    },
    {
      image: "https://images.unsplash.com/photo-1588072432836-4b4f66e6caa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "School auditorium"
    },
    {
      image: "https://images.unsplash.com/photo-1524178232400-38d816f003ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "School playground"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Image Carousel Background */}
      <div className={styles.carousel}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={styles.overlay}></div>
          </div>
        ))}
        
        {/* Carousel Navigation Arrows */}
        <button className={styles.arrowLeft} onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className={styles.arrowRight} onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
        
        {/* Carousel Navigation Dots */}
        <div className={styles.carouselNav}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.navDot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.contentLeft}>
          <div className={styles.contentWrapper}>
            <div className={styles.badge}>
              <span>INDIA'S TOP PERFORMING SCHOOL</span>
            </div>
            
            <h1 className={styles.title}>
              Welcome to
              <span className={styles.highlight}> SDRS School of Excellence</span>
            </h1>
            
            <p className={styles.subtitle}>
              Experience excellence in education with state-of-the-art facilities, 
              dedicated faculty, and a nurturing environment that fosters holistic 
              development and academic achievement.
            </p>
            
            <div className={styles.ctaContainer}>
              <button className={styles.primaryCta}>
                <span>Discover More</span>
                <i className="fas fa-chevron-right"></i>
              </button>
              
              <button className={styles.secondaryCta}>
                <i className="fas fa-calendar-alt"></i>
                <span>Schedule Visit</span>
              </button>

              <button className={styles.tertiaryCta}>
                <i className="fas fa-download"></i>
                <span>Brochure</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className={styles.contentRight}>
          <div className={styles.quickLinks}>
            <div className={styles.linkItem}>Admission</div>
            <div className={styles.linkItem}>Curriculum</div>
            <div className={styles.linkItem}>Achievement</div>
            <div className={styles.linkItem}>Faculty</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;