import React from "react";


const Header = () => {
  return (
    <header id="top" className="header">
      <div className="header-content">
        <h1 className="header-name">Hi, My name is Neilsen</h1>
        <h2 className="header-title">I'm a full stack web developer</h2>
        <a href="#about" className="header-button">About Me
          <span className="header-button-arrow">↓</span>
        </a>
      </div>
    </header>
  );
};

export default Header;