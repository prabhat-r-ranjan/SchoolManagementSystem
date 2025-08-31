import { useState } from 'react';
import styles from './FacultyProfiles.module.css';

const FacultyProfiles = () => {
  const [activeFilter, setActiveFilter] = useState('All Faculty');

  const departments = [
    { name: "All Faculty", count: 22 },
    { name: "Primary", count: 8 },
    { name: "Mathematics", count: 4 },
    { name: "Science", count: 3 },
    { name: "Languages", count: 4 },
    { name: "Arts & Sports", count: 3 }
  ];

  const facultyMembers = [
    {
      id: 1,
      name: "Mrs. Anjali Sharma",
      position: "Pre-Primary Coordinator",
      education: "M.A. in Early Childhood Education, Delhi University",
      experience: "12 years teaching experience",
      expertise: ["Montessori Methods", "Child Development", "Creative Activities"],
      achievements: ["Best Teacher Award 2020", "Developed Nursery curriculum"],
      department: "Primary",
      image: "👩‍🏫",
      grades: "Nursery, KG"
    },
    {
      id: 2,
      name: "Mr. Rajiv Mehta",
      position: "Primary Mathematics Teacher",
      education: "M.Sc. Mathematics, Mumbai University",
      experience: "10 years teaching experience",
      expertise: ["Basic Arithmetic", "Geometry", "Math Games"],
      achievements: ["Math Olympiad Coach", "Created Math Lab"],
      department: "Mathematics",
      image: "👨‍🏫",
      grades: "1-5"
    },
    {
      id: 3,
      name: "Ms. Priya Desai",
      position: "English Teacher",
      education: "M.A. English, Pune University",
      experience: "8 years teaching experience",
      expertise: ["Phonics", "Reading Skills", "Creative Writing"],
      achievements: ["Debate Club Incharge", "Published children's stories"],
      department: "Languages",
      image: "👩‍🎓",
      grades: "1-8"
    },
    {
      id: 4,
      name: "Mr. Amit Patel",
      position: "Science Teacher",
      education: "M.Sc. Physics, Gujarat University",
      experience: "9 years teaching experience",
      expertise: ["General Science", "Simple Experiments", "Environmental Science"],
      achievements: ["Science Fair Coordinator", "Science Club Head"],
      department: "Science",
      image: "👨‍🔬",
      grades: "6-10"
    },
    {
      id: 5,
      name: "Mrs. Sunita Reddy",
      position: "Hindi Teacher",
      education: "M.A. Hindi, Lucknow University",
      experience: "11 years teaching experience",
      expertise: ["Hindi Literature", "Grammar", "Poetry"],
      achievements: ["Hindi Diwas Coordinator", "Published poetry book"],
      department: "Languages",
      image: "👩‍🏫",
      grades: "1-10"
    },
    {
      id: 6,
      name: "Mr. Vikram Singh",
      position: "Mathematics HOD",
      education: "M.Sc. Mathematics, Rajasthan University",
      experience: "15 years teaching experience",
      expertise: ["Algebra", "Geometry", "Statistics"],
      achievements: ["NTSE Trainer", "Math Olympiad Jury"],
      department: "Mathematics",
      image: "👨‍💼",
      grades: "9-10"
    },
    {
      id: 7,
      name: "Ms. Neha Gupta",
      position: "Primary Class Teacher",
      education: "B.Ed., Elementary Education, Bangalore University",
      experience: "7 years teaching experience",
      expertise: ["Multisensory Learning", "Classroom Management", "Activity-Based Learning"],
      achievements: ["Best Class Teacher Award", "Parent-Teacher Coordinator"],
      department: "Primary",
      image: "👩‍🏫",
      grades: "Grade 3"
    },
    {
      id: 8,
      name: "Mr. Sanjay Kumar",
      position: "Social Studies Teacher",
      education: "M.A. History, Calcutta University",
      experience: "10 years teaching experience",
      expertise: ["Indian History", "Geography", "Civics"],
      achievements: ["Heritage Club Incharge", "Quiz Coordinator"],
      department: "Languages",
      image: "👨‍🏫",
      grades: "6-10"
    },
    {
      id: 9,
      name: "Mrs. Lakshmi Iyer",
      position: "Art & Craft Teacher",
      education: "Diploma in Fine Arts, Chennai",
      experience: "8 years teaching experience",
      expertise: ["Drawing", "Painting", "Craftwork"],
      achievements: ["Annual Exhibition Coordinator", "Art Competition Judge"],
      department: "Arts & Sports",
      image: "👩‍🎨",
      grades: "1-10"
    },
    {
      id: 10,
      name: "Mr. Ravi Shastri",
      position: "Physical Education Teacher",
      education: "M.P.Ed., Sports Authority of India",
      experience: "12 years teaching experience",
      expertise: ["Yoga", "Athletics", "Team Sports"],
      achievements: ["Sports Day Coordinator", "Zonal Championship Coach"],
      department: "Arts & Sports",
      image: "🏃‍♂️",
      grades: "1-10"
    },
    {
      id: 11,
      name: "Dr. Meena Joshi",
      position: "Science HOD",
      education: "Ph.D. in Science Education, NCERT",
      experience: "14 years teaching experience",
      expertise: ["Biology", "Chemistry", "Scientific Method"],
      achievements: ["Science Lab Setup", "Research Paper Publication"],
      department: "Science",
      image: "👩‍🔬",
      grades: "9-10"
    },
    {
      id: 12,
      name: "Mrs. Kavita Malhotra",
      position: "Primary Coordinator",
      education: "M.Ed., Child Psychology, Amity University",
      experience: "13 years teaching experience",
      expertise: ["Child Psychology", "Learning Disabilities", "Curriculum Development"],
      achievements: ["Curriculum Design Award", "Teacher Training Coordinator"],
      department: "Primary",
      image: "👩‍🏫",
      grades: "1-5"
    }
  ];

  const filteredFaculty = activeFilter === 'All Faculty' 
    ? facultyMembers 
    : facultyMembers.filter(faculty => faculty.department === activeFilter);

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <div className={styles.subtitle}>MEET OUR EDUCATORS</div>
            <h2 className={styles.title}>School Faculty</h2>
            <div className={styles.underline}></div>
          </div>
          <p className={styles.intro}>
            Our dedicated teaching staff comprises experienced educators specializing in 
            nurturing young minds from Nursery to Grade 10 with innovative teaching methodologies.
          </p>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.filterTabs}>
            {departments.map((dept, index) => (
              <button 
                key={index} 
                className={`${styles.filterBtn} ${activeFilter === dept.name ? styles.activeFilter : ''}`}
                onClick={() => setActiveFilter(dept.name)}
              >
                {dept.name} <span className={styles.countBadge}>{dept.count}</span>
              </button>
            ))}
          </div>
          <div className={styles.searchBox}>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search faculty members..." />
          </div>
        </div>

        <div className={styles.facultyGrid}>
          {filteredFaculty.map((faculty) => (
            <div key={faculty.id} className={styles.facultyCard}>
              <div className={styles.cardImage}>
                <div className={styles.avatar}>{faculty.image}</div>
                <div className={styles.departmentBadge}>{faculty.department}</div>
                <div className={styles.gradeBadge}>{faculty.grades}</div>
                <div className={styles.cardOverlay}>
                  <button className={styles.profileBtn}>View Profile</button>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.facultyName}>{faculty.name}</h3>
                <p className={styles.facultyPosition}>{faculty.position}</p>
                
                <div className={styles.facultyInfo}>
                  <div className={styles.infoItem}>
                    <i className="fas fa-graduation-cap"></i>
                    <span>{faculty.education}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <i className="fas fa-briefcase"></i>
                    <span>{faculty.experience}</span>
                  </div>
                </div>
                
                <div className={styles.expertise}>
                  <h4>Areas of Expertise</h4>
                  <div className={styles.expertiseTags}>
                    {faculty.expertise.map((area, index) => (
                      <span key={index} className={styles.tag}>{area}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.achievements}>
                  <h4>Notable Contributions</h4>
                  <ul>
                    {faculty.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={styles.cardFooter}>
                <button className={styles.contactBtn}>
                  <i className="fas fa-envelope"></i> Contact
                </button>
                <div className={styles.socialLinks}>
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fas fa-file-pdf"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <h3>Join Our Teaching Community</h3>
          <p>We welcome passionate educators to join our school family</p>
          <button className={styles.ctaButton}>
            View Teaching Opportunities <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
};

export default FacultyProfiles;