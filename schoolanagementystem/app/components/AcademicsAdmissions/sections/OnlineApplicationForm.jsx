import { useState } from 'react';
import styles from './OnlineApplicationForm.module.css';

const OnlineApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    nationality: '',
    
    // Application Details
    gradeApplying: '',
    academicYear: '2024-2025',
    currentSchool: '',
    currentGrade: '',
    
    // Parent/Guardian Information
    parentFirstName: '',
    parentLastName: '',
    relationship: '',
    email: '',
    phone: '',
    occupation: '',
    
    // Address Information
    address: '',
    city: '',
    state: '',
    pincode: '',
    
    // Additional Information
    knownAllergies: '',
    medicalConditions: '',
    specialNeeds: '',
    previousSchools: '',
    
    // Documents
    documents: {
      birthCertificate: false,
      aadharCopy: false,
      previousRecords: false,
      photograph: false
    },
    
    // Terms
    termsAgreed: false
  });

  const grades = [
    'Nursery', 'KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDocumentChange = (doc) => {
    setFormData(prev => ({
      ...prev,
      documents: {
        ...prev.documents,
        [doc]: !prev.documents[doc]
      }
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you shortly.');
    // Here you would typically send the data to your backend
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className={styles.formStep}>
            <h3>Student Information</h3>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Date of Birth *</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label>Nationality *</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className={styles.formStep}>
            <h3>Application Details</h3>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Grade Applying For *</label>
                <select
                  name="gradeApplying"
                  value={formData.gradeApplying}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Grade</option>
                  {grades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Academic Year *</label>
                <input
                  type="text"
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleInputChange}
                  required
                  disabled
                />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Current School (if applicable)</label>
                <input
                  type="text"
                  name="currentSchool"
                  value={formData.currentSchool}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Current Grade (if applicable)</label>
                <select
                  name="currentGrade"
                  value={formData.currentGrade}
                  onChange={handleInputChange}
                >
                  <option value="">Select Grade</option>
                  {grades.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className={styles.formStep}>
            <h3>Parent/Guardian Information</h3>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Parent's First Name *</label>
                <input
                  type="text"
                  name="parentFirstName"
                  value={formData.parentFirstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Parent's Last Name *</label>
                <input
                  type="text"
                  name="parentLastName"
                  value={formData.parentLastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Relationship to Student *</label>
                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Relationship</option>
                  <option value="Mother">Mother</option>
                  <option value="Father">Father</option>
                  <option value="Guardian">Guardian</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className={styles.formStep}>
            <h3>Address Information</h3>
            <div className={styles.formGroup}>
              <label>Complete Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
                required
              ></textarea>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label>Pincode *</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className={styles.formStep}>
            <h3>Additional Information</h3>
            <div className={styles.formGroup}>
              <label>Known Allergies (if any)</label>
              <input
                type="text"
                name="knownAllergies"
                value={formData.knownAllergies}
                onChange={handleInputChange}
                placeholder="List any known allergies"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label>Medical Conditions (if any)</label>
              <textarea
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleInputChange}
                rows="2"
                placeholder="Describe any medical conditions we should be aware of"
              ></textarea>
            </div>
            
            <div className={styles.formGroup}>
              <label>Special Needs or Learning Support Requirements</label>
              <textarea
                name="specialNeeds"
                value={formData.specialNeeds}
                onChange={handleInputChange}
                rows="2"
                placeholder="Describe any special educational needs"
              ></textarea>
            </div>
            
            <div className={styles.formGroup}>
              <label>Previous Schools Attended (if any)</label>
              <textarea
                name="previousSchools"
                value={formData.previousSchools}
                onChange={handleInputChange}
                rows="2"
                placeholder="List previous schools with dates attended"
              ></textarea>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className={styles.formStep}>
            <h3>Required Documents</h3>
            <p className={styles.documentsNote}>
              Please ensure you have the following documents ready to upload. 
              You can submit them now or bring them when you visit the school.
            </p>
            
            <div className={styles.documentsChecklist}>
              <div className={styles.documentItem}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={formData.documents.birthCertificate}
                    onChange={() => handleDocumentChange('birthCertificate')}
                  />
                  <span className={styles.checkmark}></span>
                  Birth Certificate
                </label>
              </div>
              
              <div className={styles.documentItem}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={formData.documents.aadharCopy}
                    onChange={() => handleDocumentChange('aadharCopy')}
                  />
                  <span className={styles.checkmark}></span>
                  Aadhar Card Copy (Student)
                </label>
              </div>
              
              <div className={styles.documentItem}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={formData.documents.previousRecords}
                    onChange={() => handleDocumentChange('previousRecords')}
                  />
                  <span className={styles.checkmark}></span>
                  Previous Academic Records (if applicable)
                </label>
              </div>
              
              <div className={styles.documentItem}>
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    checked={formData.documents.photograph}
                    onChange={() => handleDocumentChange('photograph')}
                  />
                  <span className={styles.checkmark}></span>
                  Passport-sized Photograph
                </label>
              </div>
            </div>
            
            <div className={styles.uploadSection}>
              <h4>Upload Documents (Optional)</h4>
              <p>You can upload documents now or bring them later</p>
              <div className={styles.uploadArea}>
                <i className="fas fa-cloud-upload-alt"></i>
                <p>Drag & drop files here or click to browse</p>
                <span>Max file size: 5MB each (PDF, JPG, PNG)</span>
              </div>
            </div>
          </div>
        );
      
      case 7:
        return (
          <div className={styles.formStep}>
            <h3>Review & Submit</h3>
            <div className={styles.reviewSection}>
              <div className={styles.reviewCategory}>
                <h4>Student Information</h4>
                <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
                <p><strong>Gender:</strong> {formData.gender}</p>
                <p><strong>Nationality:</strong> {formData.nationality}</p>
              </div>
              
              <div className={styles.reviewCategory}>
                <h4>Application Details</h4>
                <p><strong>Grade Applying:</strong> {formData.gradeApplying}</p>
                <p><strong>Academic Year:</strong> {formData.academicYear}</p>
                <p><strong>Current School:</strong> {formData.currentSchool || 'N/A'}</p>
              </div>
              
              <div className={styles.reviewCategory}>
                <h4>Parent Information</h4>
                <p><strong>Name:</strong> {formData.parentFirstName} {formData.parentLastName}</p>
                <p><strong>Relationship:</strong> {formData.relationship}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
              </div>
              
              <div className={styles.reviewCategory}>
                <h4>Address</h4>
                <p>{formData.address}</p>
                <p>{formData.city}, {formData.state} - {formData.pincode}</p>
              </div>
            </div>
            
            <div className={styles.termsAgreement}>
              <label className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleInputChange}
                  required
                />
                <span className={styles.checkmark}></span>
                I hereby declare that the information provided is true and correct to the best of my knowledge. 
                I understand that providing false information may result in cancellation of admission.
              </label>
            </div>
          </div>
        );
      
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <div className={styles.subtitle}>ADMISSIONS</div>
            <h2 className={styles.title}>Online Application Form</h2>
            <div className={styles.underline}></div>
          </div>
          <p className={styles.intro}>
            Complete the following form to apply for admission. Fields marked with * are required.
            You can save your progress and return later if needed.
          </p>
        </div>

        <div className={styles.progressContainer}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{width: `${(currentStep / 7) * 100}%`}}
            ></div>
          </div>
          <div className={styles.stepIndicator}>
            Step {currentStep} of 7
          </div>
        </div>

        <form className={styles.applicationForm} onSubmit={handleSubmit}>
          {renderStep()}
          
          <div className={styles.formNavigation}>
            {currentStep > 1 && (
              <button type="button" className={styles.prevButton} onClick={prevStep}>
                <i className="fas fa-arrow-left"></i> Previous
              </button>
            )}
            
            {currentStep < 7 ? (
              <button type="button" className={styles.nextButton} onClick={nextStep}>
                Next <i className="fas fa-arrow-right"></i>
              </button>
            ) : (
              <button type="submit" className={styles.submitButton} disabled={!formData.termsAgreed}>
                Submit Application <i className="fas fa-paper-plane"></i>
              </button>
            )}
          </div>
        </form>

        <div className={styles.helpSection}>
          <h3>Need Assistance?</h3>
          <div className={styles.helpOptions}>
            <div className={styles.helpOption}>
              <i className="fas fa-phone"></i>
              <div>
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className={styles.helpOption}>
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Us</h4>
                <p>admissions@schoolname.edu</p>
              </div>
            </div>
            <div className={styles.helpOption}>
              <i className="fas fa-calendar-alt"></i>
              <div>
                <h4>Schedule Visit</h4>
                <p>Book a campus tour</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineApplicationForm;