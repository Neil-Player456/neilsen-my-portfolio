import React from "react";

const projectList = [
    {
      title: "Omniscient - All About Games",
      description: "Complete fullstack app built with React, Flask, & JWT.",
      image: "/images/featured1.png",
      live: "https://omniscient-live-site.com",
      github: "https://github.com/Neil-Player456/Neil--Omniscient.git",
    },
    {
      title: "Hair Blesser Booking Site",
      description: "Complete fullstack app built with React, & Python, .",
      image: "/images/featured2.png",
      live: "https://hairblesser.com",
      github: "https://github.com/Neil-Player456/Hair-Blesser-Booking-Site.git",
    },
    {
      title: "Viltrumite Mission List - Todo-List",
      description: "Viltrumite Mission Log .",
      image: "/images/small1.png",
      live: "https://viltrumite-todo.netlify.app",
      github: "https://github.com/Neil-Player456/Neil-react-To-Do-list.git",
    },
    {
      title: "Random Card Generator",
      description: "Dynamic Deck Of Cards",
      image: "/images/small2.png",
      live: "https://random-card-gen.netlify.app",
      github: "https://github.com/Neil-Player456/Neil-Random-Card-Generator.git",
    },
    {
      title: "Dynamic Reactive Stop Light",
      description: "Stop Light In The Rain.",
      image: "/images/small3.png",
      live: "https://stop-light-demo.netlify.app",
      github: "https://github.com/Neil-Player456/Neil-react-stop-light.git",
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