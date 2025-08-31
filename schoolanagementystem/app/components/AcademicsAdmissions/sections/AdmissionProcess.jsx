import { useState } from 'react';
import styles from './AdmissionProcess.module.css';

const AdmissionProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const admissionSteps = [
    {
      step: 1,
      title: "Inquiry & Application",
      description: "Begin your journey by submitting an inquiry form or visiting our campus",
      details: [
        "Submit online inquiry form",
        "Attend virtual information session",
        "Schedule campus tour (optional)",
        "Receive application package"
      ],
      icon: "fas fa-file-alt"
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Complete and submit all required documents for application processing",
      details: [
        "Completed application form",
        "Previous school records (2 years)",
        "Birth certificate copy",
        "Passport-sized photographs",
        "Medical history form"
      ],
      icon: "fas fa-clipboard-list"
    },
    {
      step: 3,
      title: "Assessment & Interaction",
      description: "Student assessment and family interaction with school leadership",
      details: [
        "Grade-appropriate assessment",
        "Student interaction session",
        "Parent interview",
        "Class observation (if required)"
      ],
      icon: "fas fa-user-friends"
    },
    {
      step: 4,
      title: "Admission Decision",
      description: "Review process and communication of admission decision",
      details: [
        "Application review by committee",
        "Decision communicated within 7-10 days",
        "Acceptance letter and fee structure",
        "Next steps information"
      ],
      icon: "fas fa-envelope-open-text"
    },
    {
      step: 5,
      title: "Fee Payment & Enrollment",
      description: "Complete the enrollment process by submitting required fees and documents",
      details: [
        "Submit admission fee",
        "Complete tuition payment",
        "Sign parent-school agreement",
        "Submit additional required documents"
      ],
      icon: "fas fa-check-circle"
    },
    {
      step: 6,
      title: "Orientation & Welcome",
      description: "Welcome to our school community! Get ready for the new academic journey",
      details: [
        "New student orientation",
        "Meet teachers and classmates",
        "School uniform fitting",
        "Receive books and materials"
      ],
      icon: "fas fa-graduation-cap"
    }
  ];

  const ageCriteria = [
    { grade: "Nursery", age: "2.5 - 3.5 years", cutoff: "31 March" },
    { grade: "KG", age: "3.5 - 4.5 years", cutoff: "31 March" },
    { grade: "Grade 1", age: "5.5 - 6.5 years", cutoff: "31 March" },
    { grade: "Grade 2", age: "6.5 - 7.5 years", cutoff: "31 March" },
    { grade: "Grade 3", age: "7.5 - 8.5 years", cutoff: "31 March" },
    { grade: "Grade 4", age: "8.5 - 9.5 years", cutoff: "31 March" },
    { grade: "Grade 5", age: "9.5 - 10.5 years", cutoff: "31 March" },
    { grade: "Grade 6", age: "10.5 - 11.5 years", cutoff: "31 March" },
    { grade: "Grade 7", age: "11.5 - 12.5 years", cutoff: "31 March" },
    { grade: "Grade 8", age: "12.5 - 13.5 years", cutoff: "31 March" },
    { grade: "Grade 9", age: "13.5 - 14.5 years", cutoff: "31 March" },
    { grade: "Grade 10", age: "14.5 - 15.5 years", cutoff: "31 March" }
  ];

  const requiredDocuments = [
    "Completed application form",
    "Birth certificate (original and copy)",
    "Aadhar card copy of student",
    "Previous two years academic records",
    "Transfer certificate (if applicable)",
    "Passport-sized photographs (4 copies)",
    "Medical immunization record",
    "Parent's ID proof (Aadhar/PAN card)"
  ];

  const feeStructure = [
    { item: "Registration Fee", amount: "₹2,500", notes: "Non-refundable" },
    { item: "Admission Fee", amount: "₹25,000", notes: "One-time, non-refundable" },
    { item: "Annual Charges", amount: "₹15,000", notes: "Payable yearly" },
    { item: "Tuition Fee (Monthly)", amount: "₹8,000 - ₹12,000", notes: "Varies by grade" },
    { item: "Transportation (Monthly)", amount: "₹3,000 - ₹5,000", notes: "Based on distance" },
    { item: "Uniform & Books", amount: "₹8,000 - ₹12,000", notes: "One-time annual payment" }
  ];

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <div className={styles.subtitle}>JOIN OUR COMMUNITY</div>
            <h2 className={styles.title}>Admission Process</h2>
            <div className={styles.underline}></div>
          </div>
          <p className={styles.intro}>
            We're delighted you're considering our school for your child's education. 
            Our admission process is designed to be transparent, straightforward, and supportive.
          </p>
        </div>

        <div className={styles.processSection}>
          <h3 className={styles.sectionTitle}>Step-by-Step Admission Procedure</h3>
          
          <div className={styles.timeline}>
            {admissionSteps.map((step, index) => (
              <div 
                key={index} 
                className={`${styles.timelineItem} ${activeStep === index ? styles.active : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className={styles.timelineMarker}>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <i className={step.icon}></i>
                </div>
                <div className={styles.timelineContent}>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                  <div className={styles.stepDetails}>
                    <ul>
                      {step.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-child"></i>
              <h3>Age Eligibility Criteria</h3>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.ageTable}>
                <thead>
                  <tr>
                    <th>Grade</th>
                    <th>Age Range</th>
                    <th>Age Cutoff</th>
                  </tr>
                </thead>
                <tbody>
                  {ageCriteria.map((item, index) => (
                    <tr key={index}>
                      <td>{item.grade}</td>
                      <td>{item.age}</td>
                      <td>{item.cutoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.cardHeader}>
              <i className="fas fa-file-contract"></i>
              <h3>Required Documents</h3>
            </div>
            <div className={styles.documentsList}>
              <ul>
                {requiredDocuments.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.feeSection}>
          <h3 className={styles.sectionTitle}>Fee Structure (2024-2025 Academic Year)</h3>
          
          <div className={styles.feeTable}>
            <div className={styles.tableHeader}>
              <div>Fee Item</div>
              <div>Amount</div>
              <div>Notes</div>
            </div>
            {feeStructure.map((fee, index) => (
              <div key={index} className={styles.feeRow}>
                <div className={styles.feeItem}>{fee.item}</div>
                <div className={styles.feeAmount}>{fee.amount}</div>
                <div className={styles.feeNotes}>{fee.notes}</div>
              </div>
            ))}
          </div>
          
          <div className={styles.feeNotes}>
            <p><i className="fas fa-info-circle"></i> Fees are subject to revision annually. Sibling discounts available.</p>
            <p><i className="fas fa-info-circle"></i> Payment plans and scholarships available for eligible students.</p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Begin Your Admission Journey</h3>
            <p>We're here to guide you through every step of the admission process</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryBtn}>
                <i className="fas fa-download"></i> Download Application
              </button>
              <button className={styles.secondaryBtn}>
                <i className="fas fa-calendar-alt"></i> Schedule Visit
              </button>
              <button className={styles.tertiaryBtn}>
                <i className="fas fa-question-circle"></i> Ask Questions
              </button>
            </div>
          </div>
          <div className={styles.ctaImage}>
            <div className={styles.imagePlaceholder}>
              <i className="fas fa-school"></i>
            </div>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h3 className={styles.sectionTitle}>Frequently Asked Questions</h3>
          
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>When does the admission process begin?</h4>
              <p>Admissions for the academic year 2024-25 open in January 2024. We accept applications throughout the year based on availability.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h4>Is there an entrance exam?</h4>
              <p>For Grades 3 and above, we conduct a basic aptitude assessment. For younger students, we have an interactive session instead of a formal test.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h4>Do you offer transportation services?</h4>
              <p>Yes, we provide safe and reliable transportation services across the city with GPS-enabled buses and trained attendants.</p>
            </div>
            
            <div className={styles.faqItem}>
              <h4>Are scholarships available?</h4>
              <p>We offer merit-based scholarships and fee concessions for outstanding students and those with financial constraints.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcess;