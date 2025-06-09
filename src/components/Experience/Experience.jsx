import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      title: "Back-End Developer",
      company: "Boolean UK",
      period: "2024",
      location: "London, UK",
      description: [
        "Worked on a 4-week team development project with a legacy codebase",
        "Worked as Scrum Master for a team of 5 developers"
      ]
    }
  ];

  return (
    <section className={styles.container} id="experience">  
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <div className={styles.timelineDot} />
              <h3 className={styles.timelineTitle}>
                {exp.title}
                <span className={styles.company}> @ {exp.company}</span>
              </h3>
              <p className={styles.timelinePeriod}>
                {exp.period} | {exp.location}
              </p>
              <ul className={styles.description}>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 