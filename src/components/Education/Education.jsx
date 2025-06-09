import styles from './Education.module.css';

const Education = () => {
  const education = [
    {
      degree: "Full-Stack Software Developer Graduate",
      school: "Boolean UK",
      period: "Februrary 2024 - August 2024",
      location: "London, UK",
      achievements: [
        "Completed a full-time 6-month intensive full-stack software development bootcamp with over 1,000 hours of learning and exercises",
        "Developed front-end skills, learning React.js, JavaScript, HTML and CSS. On the back end, also using JavaScript libraries and frameworks, I learned Express.js, PostgreSQL, Prisma ORM and Node.js",
      ]
    },
    {
      degree: "Associate's degree in Software Engineering",
      school: "University of Jahad Daneshgari Ahvaz",
      period: "2009 - 2011",
      location: "Ahvaz, Iran",
      achievements: [
        "Key Skills: Object-Oriented Programming (Java/C++), Database Design (SQL), Web Development (HTML/CSS), Software Development Lifecycle (SDLC)"
      ]
    }
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationList}>
        {education.map((edu, index) => (
          <div key={index} className={styles.educationCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.school}>{edu.school}</p>
              <p className={styles.period}>
                {edu.period} | {edu.location}
              </p>
            </div>
            <ul className={styles.achievements}>
              {edu.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 