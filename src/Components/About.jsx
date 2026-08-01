import React from "react";
import "./Css/about.css";
import FloatingPhoto from "./FloatingPhoto"

function About() {
  return (
    <section className="about" id="about">

      <div className="intro">
        <h2>About Me</h2>

        <p>
          Hi, I'm <strong>Akshay Kumar</strong>, an aspiring
          <strong> Java Full Stack Developer</strong> with a passion for
          building modern, responsive, and user-friendly web applications.
        </p>

        <p>
          I enjoy solving real-world problems through clean and efficient
          code. I am constantly learning new technologies and improving my
          development skills to create better applications.
        </p>

        <p>
          My technical skills include<span> Java</span>,<span> Spring Boot</span>,
          <span> React</span>,<span> HTML</span>,<span> CSS</span>,<span> JavaScript</span>,
          <span> SQL</span>, and<span> Git</span>.
        </p>

        <p>
          My goal is to become a skilled Full Stack Developer and contribute
          to innovative projects while continuously growing as a software
          developer.
        </p>
      </div>

      <div className="photos">
        <FloatingPhoto />
      </div>

    </section>
  );
}

export default About;