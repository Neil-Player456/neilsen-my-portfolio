import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "projects", "contact"];
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };

    handleScroll(); // initialize on mount

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="logo">Neilsen</div>
        <nav>
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
      </div>
    </header>
  );
};

export default Header;