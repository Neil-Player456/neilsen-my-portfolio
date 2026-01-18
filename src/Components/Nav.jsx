import React from "react";


import { useEffect, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="section-nav">
      <ul>
        <li className={activeSection === "about" ? "active" : ""}>
          <a href="#about">About</a>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <a href="#projects">Projects</a>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;