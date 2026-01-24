import React from "react";

const projectList = [
    {
      title: "Omniscient (All About Games)",
      description: "Complete front-end and back-end app with React & Flask.",
      image: "/images/featured1.png",
      live: "https://omniscient-live-site.com",
      github: "https://github.com/yourname/omniscient",
    },
    {
      title: "Hair Blesser (Booking Site)",
      description: "Another end-to-end project with authentication and database.",
      image: "/images/featured2.png",
      live: "https://hairblesser.com",
      github: "https://github.com/yourname/hair-blesser",
    },
    {
      title: "Viltrumite Mission List (Todo-List)",
      description: "A smaller utility or fun project.",
      image: "/images/small1.png",
      live: "https://viltrumite-todo.netlify.app",
      github: "https://github.com/yourname/viltrumite-todo",
    },
    {
      title: "Random Card Generator",
      description: "Another short project, focused on front-end.",
      image: "/images/small2.png",
      live: "https://random-card-gen.netlify.app",
      github: "https://github.com/yourname/random-card-generator",
    },
    {
      title: "Reactive Stop Light",
      description: "A small creative experiment or widget.",
      image: "/images/small3.png",
      live: "https://stop-light-demo.netlify.app",
      github: "https://github.com/yourname/stop-light",
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
            <div
              key={index}
              className="project-card"
              onClick={() => window.open(project.live, "_blank")}
              role="link"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && window.open(project.live, "_blank")
              }
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
  
              <div className="project-overlay">
                <a
                  href={project.github}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub ↗
                </a>
  
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;