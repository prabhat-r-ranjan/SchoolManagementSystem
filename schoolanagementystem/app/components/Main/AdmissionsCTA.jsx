import styles from './AdmissionsCTA.module.css';

export default function AdmissionsCTA() {
  return (
    <section className={styles.admissionsCta}>
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <h2>Begin Your Child's Educational Journey</h2>
          <p>Join our nurturing community where young minds grow, explore, and discover their potential from nursery through class 10.</p>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🎓</div>
              <h4>Age-Appropriate Learning</h4>
              <p>Curriculum designed for each developmental stage</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>👩‍🏫</div>
              <h4>Experienced Educators</h4>
              <p>Teachers who specialize in early childhood to adolescent education</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🌳</div>
              <h4>Safe Campus</h4>
              <p>Secure environment with age-appropriate facilities</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🤝</div>
              <h4>Parent Partnership</h4>
              <p>Regular communication and involvement opportunities</p>
            </div>
          </div>
        </div>
        
        <div className={styles.ctaForm}>
          <h3>Schedule a School Tour</h3>
          <p>Complete this form to learn more about our programs and facilities</p>
          
          <form>
            <div className={styles.formGroup}>
              <label>Parent's Name</label>
              <input type="text" placeholder="Full Name" required />
            </div>
            
            <div className={styles.formGroup}>
              <label>Child's Name</label>
              <input type="text" placeholder="Child's Full Name" required />
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Child's Date of Birth</label>
                <input type="date" required />
              </div>
              <div className={styles.formGroup}>
                <label>Grade Interested In</label>
                <select required>
                  <option value="">Select Grade</option>
                  <option value="nursery">Nursery</option>
                  <option value="pre-k">Pre-Kindergarten</option>
                  <option value="k">Kindergarten</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" placeholder="Your email" required />
            </div>
            
            <div className={styles.formGroup}>
              <label>Phone Number</label>
              <input type="tel" placeholder="Your phone number" required />
            </div>
            
            <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
              <input type="checkbox" id="tour-request" />
              <label htmlFor="tour-request">I would like to schedule a campus tour</label>
            </div>
            
            <button type="submit" className={styles.submitBtn}>
              Request Information
            </button>
            
            <p className={styles.formNote}>
              Our friendly admissions team will contact you within 24 hours to discuss your child's educational needs.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}