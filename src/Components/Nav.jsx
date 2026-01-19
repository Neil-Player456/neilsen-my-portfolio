import { useEffect, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];

      
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

     
      for (let id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="section-nav">
      <ul>
        <li className={activeSection === "home" ? "active" : ""}>
          <a href="#top">Home</a>
        </li>
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