import React from "react";


const About = () => {
  return (
    <div className="about">
      <span className="about-eyebrow">
        <span className="about-eyebrow-symbol">✦</span>
        About Me
      </span>

      <h2 className="about-heading">
        I build thoughtful, web experiences.
      </h2>

      <p>
        I'm a mission-driven software developer with a passion for building
        clean, scalable applications that solve real-world problems.
      </p>

      <p>
        My focus is on modern JavaScript, React, and backend integration,
        with an emphasis on performance, accessibility, and design clarity.
      </p>

      <p> I'm skilled in Python, JavaScript, React, Flask, and RESTful APIs. Known
        for delivering under pressure, with a proven track record in system reliability</p>

      <div className="about-divider" />

      <p className="about-meta">
        Right now I'm focused on full-stack development. What I like to do when
        I'm not in front of the computer is hang with my wife and kids, go to
        church — I love Jesus! I also own a small buisness I make custom t-shirts
        you can find me on {" "} 
        <a
          href="https://www.tiktok.com/@edencustomprints_?_r=1&_t=ZT-93CvpnWpGxb"
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok-link"
        >
          TikTok
        </a>. my shop link will be on the profile page. I also watch anime and do some gaming.
      </p>
    </div>
  );
};

export default About;