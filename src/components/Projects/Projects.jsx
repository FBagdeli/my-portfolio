import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: "Modern E-commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
      demo: "https://demo1.example.com",
      source: "https://github.com/yourusername/project1"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
      demo: "https://demo2.example.com",
      source: "https://github.com/yourusername/project2"
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