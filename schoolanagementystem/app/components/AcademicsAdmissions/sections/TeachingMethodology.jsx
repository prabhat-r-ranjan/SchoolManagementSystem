import styles from './TeachingMethodology.module.css';

const TeachingMethodology = () => {
  const methodologies = [
    {
      id: 1,
      title: 'Inquiry-Based Learning',
      description: 'Students develop questions, investigate widely, and build new understanding through discovery. Our teachers facilitate rather than direct the learning process.',
      icon: 'fas fa-search',
      features: ['Student-led questioning', 'Research skills development', 'Critical thinking enhancement', 'Real-world problem solving']
    },
    {
      id: 2,
      title: 'Collaborative Learning',
      description: 'Working in groups to solve problems, complete tasks, or create products. Students learn teamwork, communication, and leadership skills.',
      icon: 'fas fa-users',
      features: ['Peer-to-peer learning', 'Teamwork skills development', 'Communication enhancement', 'Shared knowledge construction']
    },
    {
      id: 3,
      title: 'Differentiated Instruction',
      description: 'Tailoring instruction to meet individual needs based on readiness, interests, and learning profiles. Every student receives appropriate challenge and support.',
      icon: 'fas fa-chalkboard-teacher',
      features: ['Personalized learning paths', 'Varied content and process', 'Flexible grouping', 'Individual assessment']
    },
    {
      id: 4,
      title: 'Project-Based Learning',
      description: 'Students gain knowledge and skills by working for an extended period on an authentic, complex question, problem, or challenge.',
      icon: 'fas fa-project-diagram',
      features: ['Long-term investigations', 'Real-world applications', 'Cross-disciplinary connections', 'Public product creation']
    }
  ];

  const approachData = [
    {
      title: 'Research-Based',
      description: 'All our methodologies are grounded in educational research and proven best practices.',
      icon: 'fas fa-book-open'
    },
    {
      title: 'Student-Centered',
      description: 'Our approaches prioritize student agency, voice, and choice in the learning process.',
      icon: 'fas fa-user-graduate'
    },
    {
      title: 'Technology-Enhanced',
      description: 'We strategically integrate technology to amplify and transform learning experiences.',
      icon: 'fas fa-laptop'
    }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <h6 className={styles.subtitle}>OUR APPROACH</h6>
            <h2 className={styles.title}>Teaching Methodology</h2>
            <div className={styles.underline}></div>
            <p className={styles.intro}>
              We employ research-based instructional approaches designed to engage every learner, 
              foster critical thinking, and prepare students for success in an ever-changing world.
            </p>
          </div>
        </div>

        <div className={styles.methodologyGrid}>
          {methodologies.map((method) => (
            <div key={method.id} className={styles.methodCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <i className={method.icon}></i>
                </div>
                <h3>{method.title}</h3>
              </div>
              <p className={styles.cardDescription}>{method.description}</p>
              <ul className={styles.featureList}>
                {method.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.approachSection}>
          <h3 className={styles.sectionTitle}>Our Educational Philosophy</h3>
          <div className={styles.approachGrid}>
            {approachData.map((item, index) => (
              <div key={index} className={styles.approachCard}>
                <div className={styles.approachIcon}>
                  <i className={item.icon}></i>
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.instructionalModel}>
          <h3 className={styles.sectionTitle}>The 5E Instructional Model</h3>
          <div className={styles.modelContainer}>
            <div className={styles.modelStep}>
              <div className={styles.stepNumber}>1</div>
              <h4>Engage</h4>
              <p>Capture student interest and connect to prior knowledge</p>
            </div>
            <div className={styles.modelStep}>
              <div className={styles.stepNumber}>2</div>
              <h4>Explore</h4>
              <p>Hands-on experiences to investigate concepts</p>
            </div>
            <div className={styles.modelStep}>
              <div className={styles.stepNumber}>3</div>
              <h4>Explain</h4>
              <p>Formalize understanding through instruction</p>
            </div>
            <div className={styles.modelStep}>
              <div className={styles.stepNumber}>4</div>
              <h4>Elaborate</h4>
              <p>Extend learning to new contexts</p>
            </div>
            <div className={styles.modelStep}>
              <div className={styles.stepNumber}>5</div>
              <h4>Evaluate</h4>
              <p>Assess understanding through varied approaches</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Experience Our Teaching Methods</h3>
            <p>Schedule a classroom observation to see our methodologies in action</p>
            <button className={styles.ctaButton}>
              Schedule a Visit <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeachingMethodology;