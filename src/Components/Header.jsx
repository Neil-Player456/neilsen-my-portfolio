import React from "react";


const Header = () => {
  return (
    <header id="top" className="header">
      <div className="header-content">
        <h1 className="header-name">Hi, My name is Neilsen</h1>
        <h2 className="header-title">
          I'm a versatile and mission-driven Software Developer
        </h2>
        <a href="#about" className="header-button">About Me</a>
      </div>
    </header>
  );
};

export default Header;