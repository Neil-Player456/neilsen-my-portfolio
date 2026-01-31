import React, { useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Starfield from "./components/Starfield";

const App = () => {
  useEffect(() => {

    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <>

      <Starfield />
      <Header />
      <Nav />

      <main>
        <section id="about" className="fade-section">
          <About />
        </section>
        <section id="projects" className="fade-section">
          <Projects />
        </section>
        <section id="contact" className="fade-section">
          <Contact />
        </section>
      </main>
      <Footer id="footer" className="fade-section" />
    </>
  );
};

export default App;