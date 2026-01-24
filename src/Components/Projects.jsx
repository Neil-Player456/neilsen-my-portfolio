import React from "react";

const projectList = [
  {
    title: "Fullstack Project One",
    description: "Complete front-end and back-end app with React & Flask.",
    image: "/images/featured1.png",
    link: "#",
  },
  {
    title: "Fullstack Project Two",
    description: "Another end-to-end project with authentication and database.",
    image: "/images/featured2.png",
    link: "#",
  },
  {
    title: "Mini Project 1",
    description: "A smaller utility or fun project.",
    image: "/images/small1.png",
    link: "#",
  },
  {
    title: "Mini Project 2",
    description: "Another short project, focused on front-end.",
    image: "/images/small2.png",
    link: "#",
  },
  {
    title: "Mini Project 3",
    description: "A small creative experiment or widget.",
    image: "/images/small3.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="project-section">
      <span className="project-eyebrow">
        <span className="project-eyebrow-symbol">✦</span>
        Projects
      </span>

      <div className="projects-container">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;