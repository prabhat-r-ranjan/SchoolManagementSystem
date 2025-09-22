import { useState } from 'react';
import styles from './Infrastructure.module.css';

const Infrastructure = () => {
  const [activeCategory, setActiveCategory] = useState('academic');

  const infrastructureData = {
    academic: {
      title: "Academic Facilities",
      description: "Our state-of-the-art academic infrastructure provides an optimal learning environment with modern amenities and technology integration.",
      features: [
        {
          title: "Smart Classrooms",
          description: "All classrooms equipped with interactive smart boards, projectors, and audio-visual systems to enhance the learning experience.",
          icon: "fas fa-chalkboard"
        },
        {
          title: "Science Laboratories",
          description: "Well-equipped physics, chemistry, and biology labs with modern equipment for practical learning and experimentation.",
          icon: "fas fa-flask"
        },
        {
          title: "Computer Labs",
          description: "Modern computer labs with high-speed internet, latest software, and individual workstations for each student.",
          icon: "fas fa-desktop"
        },
        {
          title: "Library & Resource Center",
          description: "Spacious library with extensive collection of books, periodicals, and digital resources for research and reading.",
          icon: "fas fa-book-open"
        }
      ]
    },
    technology: {
      title: "Technology Infrastructure",
      description: "Cutting-edge technology infrastructure that supports digital learning and prepares students for the future.",
      features: [
        {
          title: "Wi-Fi Campus",
          description: "High-speed wireless internet connectivity across the entire campus for seamless digital learning.",
          icon: "fas fa-wifi"
        },
        {
          title: "Digital Language Lab",
          description: "Advanced language laboratory with software for improving communication skills in multiple languages.",
          icon: "fas fa-language"
        },
        {
          title: "Robotics Lab",
          description: "Dedicated space for robotics and AI learning with equipment for hands-on experimentation.",
          icon: "fas fa-robot"
        },
        {
          title: "3D Printing Lab",
          description: "Innovation lab with 3D printers and design software for bringing creative ideas to life.",
          icon: "fas fa-print"
        }
      ]
    },
    special: {
      title: "Specialized Facilities",
      description: "Specialized facilities designed to nurture diverse talents and provide holistic development opportunities.",
      features: [
        {
          title: "Auditorium",
          description: "800-seat auditorium with professional sound and lighting systems for performances and events.",
          icon: "fas fa-theater-masks"
        },
        {
          title: "Art & Craft Studio",
          description: "Spacious studio with materials and equipment for painting, pottery, and various art forms.",
          icon: "fas fa-palette"
        },
        {
          title: "Music Room",
          description: "Sound-proof music room with instruments for both western and Indian classical music.",
          icon: "fas fa-music"
        },
        {
          title: "Dance Studio",
          description: "Large mirrored studio with wooden flooring for dance practice and performances.",
          icon: "fas fa-child"
        }
      ]
    },
    amenities: {
      title: "Student Amenities",
      description: "Comfortable and well-designed amenities that ensure a pleasant campus experience for all students.",
      features: [
        {
          title: "Cafeteria",
          description: "Spacious cafeteria serving nutritious and hygienic meals, snacks, and beverages.",
          icon: "fas fa-utensils"
        },
        {
          title: "Medical Room",
          description: "Fully-equipped medical room with trained nurse and first-aid facilities available during school hours.",
          icon: "fas fa-first-aid"
        },
        {
          title: "Student Lounge",
          description: "Comfortable common areas for students to relax, socialize, and collaborate on projects.",
          icon: "fas fa-couch"
        },
        {
          title: "Prayer Room",
          description: "Serene space for meditation and prayer, respecting all faiths and traditions.",
          icon: "fas fa-hands-praying"
        }
      ]
    }
  };

  const stats = [
    { number: "25", label: "Acres Campus Area" },
    { number: "75+", label: "Smart Classrooms" },
    { number: "8", label: "Science Laboratories" },
    { number: "4", label: "Computer Labs" },
    { number: "15,000+", label: "Library Books" },
    { number: "100%", label: "Wi-Fi Coverage" }
  ];

  const galleryImages = [
    { id: 1, category: "academic", title: "Modern Classroom", description: "Technology-enabled learning space" },
    { id: 2, category: "academic", title: "Science Lab", description: "Well-equipped laboratory for experiments" },
    { id: 3, category: "technology", title: "Computer Lab", description: "Latest technology workstations" },
    { id: 4, category: "technology", title: "Robotics Center", description: "Innovation and design space" },
    { id: 5, category: "special", title: "School Auditorium", description: "800-seat performance venue" },
    { id: 6, category: "special", title: "Art Studio", description: "Creative space for artistic expression" },
    { id: 7, category: "amenities", title: "School Cafeteria", description: "Hygienic dining facility" },
    { id: 8, category: "amenities", title: "Medical Room", description: "Healthcare and first-aid facility" }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <div className={styles.subtitle}>CAMPUS & FACILITIES</div>
            <h2 className={styles.title}>Infrastructure</h2>
            <div className={styles.underline}></div>
          </div>
          <p className={styles.intro}>
            Our campus features state-of-the-art infrastructure designed to provide an exceptional learning environment 
            with modern amenities, technology integration, and facilities that support holistic development.
          </p>
        </div>

        <div className={styles.statsSection}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.categorySection}>
          <h3 className={styles.sectionTitle}>Explore Our Facilities</h3>
          
          <div className={styles.categoryTabs}>
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'academic' ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory('academic')}
            >
              <i className="fas fa-graduation-cap"></i>
              Academic
            </button>
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'technology' ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory('technology')}
            >
              <i className="fas fa-laptop-code"></i>
              Technology
            </button>
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'special' ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory('special')}
            >
              <i className="fas fa-paint-brush"></i>
              Specialized
            </button>
            <button 
              className={`${styles.categoryTab} ${activeCategory === 'amenities' ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory('amenities')}
            >
              <i className="fas fa-utensils"></i>
              Amenities
            </button>
          </div>

          <div className={styles.categoryContent}>
            <div className={styles.categoryInfo}>
              <h4>{infrastructureData[activeCategory].title}</h4>
              <p>{infrastructureData[activeCategory].description}</p>
            </div>

            <div className={styles.featuresGrid}>
              {infrastructureData[activeCategory].features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <i className={feature.icon}></i>
                  </div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.gallerySection}>
          <h3 className={styles.sectionTitle}>Campus Gallery</h3>
          <p className={styles.sectionDescription}>
            Take a visual tour of our world-class infrastructure and facilities
          </p>
          
          <div className={styles.galleryGrid}>
            {galleryImages.filter(img => img.category === activeCategory)
              .map((image) => (
                <div key={image.id} className={styles.galleryItem}>
                  <div className={styles.galleryImage}>
                    <div className={styles.imagePlaceholder}>
                      <i className="fas fa-image"></i>
                    </div>
                    <div className={styles.imageOverlay}>
                      <h5>{image.title}</h5>
                      <p>{image.description}</p>
                      <button className={styles.viewButton}>
                        <i className="fas fa-expand"></i> View
                      </button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className={styles.virtualTour}>
          <div className={styles.tourContent}>
            <h3>Experience Our Campus Virtually</h3>
            <p>Take a 360° virtual tour of our facilities from the comfort of your home</p>
            <button className={styles.tourButton}>
              <i className="fas fa-vr-cardboard"></i> Start Virtual Tour
            </button>
          </div>
          <div className={styles.tourVisual}>
            <div className={styles.vrPlaceholder}>
              <i className="fas fa-vr-cardboard"></i>
              <p>360° Virtual Tour</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Experience Our Campus in Person</h3>
            <p>Schedule a visit to see our facilities and experience the campus atmosphere firsthand</p>
            <button className={styles.ctaButton}>
              Schedule a Visit <i className="fas fa-calendar-alt"></i>
            </button>
          </div>
          <div className={styles.ctaImage}>
            <div className={styles.imagePlaceholder}>
              <i className="fas fa-school"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;