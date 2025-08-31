import styles from './GradeWisePrograms.module.css';

const GradeWisePrograms = () => {
  // Sample data for grade-wise programs
  const gradePrograms = [
    {
      grade: 'Pre-K to Grade 2',
      title: 'Early Years Foundation',
      description: 'Our early years program focuses on developing fundamental skills through play-based learning, social interaction, and exploration.',
      focusAreas: [
        'Literacy and language development',
        'Numeracy and problem-solving',
        'Social and emotional growth',
        'Creative expression',
        'Physical development'
      ],
      icon: '🧸'
    },
    {
      grade: 'Grades 3-5',
      title: 'Elementary Program',
      description: 'Building on foundational skills, our elementary program encourages curiosity, critical thinking, and independent learning.',
      focusAreas: [
        'Advanced reading comprehension',
        'Mathematical reasoning',
        'Scientific inquiry',
        'Social studies exploration',
        'Arts integration'
      ],
      icon: '📚'
    },
    {
      grade: 'Grades 6-8',
      title: 'Middle School Program',
      description: 'Our middle school curriculum challenges students with specialized subjects while developing organizational and study skills.',
      focusAreas: [
        'Subject specialization',
        'Research skills development',
        'Technology integration',
        'Leadership opportunities',
        'Community engagement'
      ],
      icon: '🔬'
    },
    {
      grade: 'Grades 9-12',
      title: 'High School Program',
      description: 'Preparing students for college and beyond, our high school program offers advanced courses and career pathway options.',
      focusAreas: [
        'College preparatory courses',
        'Advanced Placement options',
        'Career technical education',
        'College counseling',
        'Capstone projects'
      ],
      icon: '🎓'
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <i className="fas fa-graduation-cap"></i>
        <h2>Grade-wise Programs</h2>
      </div>
      
      <p className={styles.lead}>
        Our comprehensive curriculum is tailored to each developmental stage, 
        ensuring students receive age-appropriate challenges and support throughout their educational journey.
      </p>
      
      <div className={styles.programsContainer}>
        {gradePrograms.map((program, index) => (
          <div key={index} className={styles.programCard}>
            <div className={styles.programHeader}>
              <span className={styles.gradeIcon}>{program.icon}</span>
              <div>
                <h3 className={styles.gradeLevel}>{program.grade}</h3>
                <h4 className={styles.programTitle}>{program.title}</h4>
              </div>
            </div>
            
            <p className={styles.programDescription}>{program.description}</p>
            
            <div className={styles.focusAreas}>
              <h5>Focus Areas:</h5>
              <ul>
                {program.focusAreas.map((area, i) => (
                  <li key={i}>{area}</li>
                ))}
              </ul>
            </div>
            
            <button className={styles.learnMoreBtn}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GradeWisePrograms;