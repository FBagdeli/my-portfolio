import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "My Portfolio",
      description: "A personal portfolio website showcasing my skills, projects, and experience as a software developer.",
      technologies: ["React", "Vite ", "Javascript", "CSS Modules"],
      image: "https://tse1.mm.bing.net/th/id/OIP.GtSftheSPl_hRz2z0eXs_AHaEK?rs=1&pid=ImgDetMain",
      demo: "https://my-portfolio-rust-seven-26.vercel.app",
      source: "https://github.com/FBagdeli/my-portfolio"
    },
    {
      title: "OOP Bank Challenge",
      description: "Designed and implemented an object-oriented solution leveraging encapsulation, inheritance, and polymorphism, ensuring modularity for scalability and maintainability",
      technologies: ["OOP", "Javascripts", "Node.js", "Date Libraries"],
      image: "https://i.ytimg.com/vi/gQlbH3qr1l4/maxresdefault.jpg",
      source: "https://github.com/FBagdeli/ood-bank-challenge"
    }
  ];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <div key={id} className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <img 
                src={project.image} 
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay}>
                <div className={styles.links}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Live Demo
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.technology}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 