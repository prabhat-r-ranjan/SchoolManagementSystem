"use client"
import React, { useState } from 'react';
import styles from './FacilitiesSection.module.css';

const FacilitiesSection = () => {
  // Set 'academic' as the default active filter
  const [activeFilter, setActiveFilter] = useState('academic');

  // Facilities data organized by unique category
  const facilitiesByCategory = {
    academic: [
      {
        title: 'Advanced Science Labs',
        description: 'Fully equipped, brand-new laboratories for Physics, Chemistry, and Biology, designed for hands-on experimentation and discovery.',
        imagePlaceholder: '🔬',
      },
      {
        title: 'Digital Language Lab',
        description: 'Cutting-edge language acquisition technology to foster fluency and confidence in multiple languages.',
        imagePlaceholder: '🎧',
      },
      {
        title: 'Innovation & Robotics Lab',
        description: 'A dedicated Makerspace with 3D printers, robotics kits, and tools to turn ideas into tangible prototypes.',
        imagePlaceholder: '🤖',
      },
      {
        title: 'Library & Resource Center',
        description: 'A vast, quiet space with extensive physical and digital collections, individual study carrels, and collaborative zones.',
        imagePlaceholder: '📚',
      }
    ],
    arts: [
      {
        title: 'Performing Arts Theatre',
        description: 'A 200-seat auditorium with professional lighting, sound systems, and a stage for productions, assemblies, and presentations.',
        imagePlaceholder: '🎭',
      },
      {
        title: 'Visual Arts Studio',
        description: 'A bright, spacious studio with pottery wheels, printing presses, and dedicated areas for painting, drawing, and sculpture.',
        imagePlaceholder: '🎨',
      },
      {
        title: 'Music Practice Rooms',
        description: 'Acoustically treated individual and ensemble rooms for instrumental and vocal practice, equipped with pianos and audio recorders.',
        imagePlaceholder: '🎵',
      },
      {
        title: 'Digital Media Lab',
        description: 'A computer lab with industry-standard software for graphic design, video editing, animation, and digital music production.',
        imagePlaceholder: '🎬',
      }
    ],
    sports: [
      {
        title: 'FIFA-Standard Football Field',
        description: 'A full-size, professionally maintained turf field for aspiring athletes to train and compete.',
        imagePlaceholder: '⚽',
      },
      {
        title: 'Olympic-Size Swimming Pool',
        description: 'A temperature-controlled, 8-lane pool for instructional swimming, competitive training, and aquatic sports.',
        imagePlaceholder: '🏊‍♂️',
      },
      {
        title: 'Indoor Sports Complex',
        description: 'A multi-purpose hall for basketball, volleyball, badminton, and table tennis, with sprung flooring for athlete safety.',
        imagePlaceholder: '🏀',
      },
      {
        title: 'Fitness & Conditioning Center',
        description: 'A modern gym with cardio and weight-training equipment, dedicated to athlete development and overall student wellness.',
        imagePlaceholder: '💪',
      },
      {
        title: 'Yoga & Mindfulness Studio', // ADDED YOGA ROOM
        description: 'A serene space with mats and props, used for yoga, meditation, and wellness programs to support mental health.',
        imagePlaceholder: '🧘‍♀️',
      }
    ],
    technology: [
      {
        title: 'Smart Classrooms',
        description: 'Technology-enabled learning spaces with interactive panels, high-speed internet, and flexible seating to support diverse learning styles.',
        imagePlaceholder: '💻',
      },
      {
        title: 'Computer Labs',
        description: 'High-performance computing labs with the latest software for coding, data analysis, and digital literacy programs.',
        imagePlaceholder: '🖥️',
      },
      {
        title: 'Audio-Visual Studio',
        description: 'A professional recording and broadcasting studio for podcasts, video production, and live streaming school events.',
        imagePlaceholder: '🎥',
      },
      {
        title: 'Network Infrastructure',
        description: 'School-wide high-speed Wi-Fi 6 and a robust IT backbone to support seamless digital learning and innovation.',
        imagePlaceholder: '📡',
      }
    ],
    campus: [
      {
        title: 'Secure & Green Campus',
        description: 'A sprawling, eco-friendly campus with 24/7 security, surveillance, and lush green spaces for play and relaxation.',
        imagePlaceholder: '🌳',
      },
      {
        title: 'Student Lounge & Common Areas',
        description: 'Modern, comfortable spaces designed for students to socialize, collaborate on projects, and relax between classes.',
        imagePlaceholder: '🛋️',
      },
      {
        title: 'Dining Hall & Cafeteria',
        description: 'A spacious, hygienic dining area serving nutritious, balanced meals prepared in a state-of-the-art kitchen.',
        imagePlaceholder: '🍽️',
      },
      {
        title: 'Health & Wellness Center',
        description: 'An on-site clinic with a full-time nurse and visiting doctor to address medical needs and promote student well-being.',
        imagePlaceholder: '🏥',
      }
    ]
  };

  // Get the facilities for the currently active category
  const facilitiesToShow = facilitiesByCategory[activeFilter];

  return (
    <section id="facilities" className={styles.facilitiesSection}>
      <div className={styles.facilitiesContainer}>
        <div className={styles.sectionHeader}>
          <h2>World-Class <span className={styles.highlight}>Facilities</span></h2>
          <p>Our brand-new, purpose-built campus is designed to inspire learning, creativity, and growth in every student. Explore the spaces that make SDIS exceptional.</p>
        </div>

        {/* Filter Tabs - 5 Categories with balanced spacing */}
        <div className={styles.filterTabs}>
          <button 
            className={activeFilter === 'academic' ? styles.activeFilter : ''} 
            onClick={() => setActiveFilter('academic')}
          >
            Academic
          </button>
          <button 
            className={activeFilter === 'arts' ? styles.activeFilter : ''} 
            onClick={() => setActiveFilter('arts')}
          >
            Arts & Creativity
          </button>
          <button 
            className={activeFilter === 'sports' ? styles.activeFilter : ''} 
            onClick={() => setActiveFilter('sports')}
          >
            Sports & Fitness
          </button>
          <button 
            className={activeFilter === 'technology' ? styles.activeFilter : ''} 
            onClick={() => setActiveFilter('technology')}
          >
            Technology
          </button>
          <button 
            className={activeFilter === 'campus' ? styles.activeFilter : ''} 
            onClick={() => setActiveFilter('campus')}
          >
            Campus Life
          </button>
        </div>

        {/* Facilities Grid */}
        <div className={styles.facilitiesGrid}>
          {facilitiesToShow.map((facility, index) => (
            <div key={index} className={styles.facilityCard}>
              {/* Image Container - Replace div with <img src={facility.image} alt={facility.title} /> */}
              <div className={styles.facilityImage}>
                {facility.imagePlaceholder}
              </div>
              <div className={styles.facilityContent}>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;