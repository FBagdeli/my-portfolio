import { getImageUrl } from "../../utils.js";
import styles from './About.module.css'
function About() {
  return (
    <section className={styles.container} id="about"> 
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl("with-laptop.png")} alt="with-Laptop" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("pointerIcon.png")} alt="pointer Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer passionate about building responsive,
                user-friendly, and modern web interfaces
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("serverIcon.png")} alt="server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm a backend developer passionate about building scalable,
                secure, and high-performance server-side applications
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
