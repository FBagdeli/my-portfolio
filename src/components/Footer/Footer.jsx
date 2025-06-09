import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.content}>
        <p className={styles.copyright}>
          © {currentYear} Farshad Bagdeli. All rights reserved.
        </p>
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/FBagdeli" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/farshad-bagdeli-127233256" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
        </div>
        <a href="#" className={styles.backToTop} onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer; 