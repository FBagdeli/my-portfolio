import styles from './Skills.module.css';

const Skills = () => {
  const skills = {
    "Frontend Development": {
      icon: "💻",
      skills: [
        { name: "HTML5/CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 85 },
        { name: "TypeScript", level: 25 },
        { name: "Next.js", level: 25 }
      ]
    },
    "Backend Development": {
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Prisma", level: 70 }
      ]
    },
    "Tools & Others": {
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85 },
        { name: "Neon", level: 70 }
      ]
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        {Object.entries(skills).map(([category, { icon, skills }]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.icon}>{icon}</span>
              {category}
            </h3>
            <div className={styles.skillsList}>
              {skills.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progress}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 