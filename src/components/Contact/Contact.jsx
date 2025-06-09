import { useState } from 'react';
import styles from './Contact.module.css';
import { sendEmail } from '../../utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    sendEmail(formData.name, formData.email, formData.message);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Get In Touch</h2>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <h3>Location</h3>
            <p>Wolvega, Netherland</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Email</h3>
            <p>f.bagdeli13@outlook.com</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Phone</h3>
            <p>+31 0639296000</p>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://github.com/FBagdeli" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/farshad-bagdeli-127233256" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://x.com/FBagdeli13" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 