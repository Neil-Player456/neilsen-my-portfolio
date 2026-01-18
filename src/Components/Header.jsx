import React, { useState, useEffect } from "react";


const Header = () => {
  return (
    <header className="header">
      <p className="header-intro">Hi, my name is</p>

      <h1 className="header-name">Neilsen</h1>

      <h2 className="header-title">
        I build things for the web.
      </h2>

      <p className="header-description">
        I’m a frontend developer focused on building clean, accessible,
        and user-friendly web applications.
      </p>

      <a href="#about" className="header-button">
        About Me
      </a>
    </header>
  );
};

export default Header;