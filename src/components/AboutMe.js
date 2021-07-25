import React from "react";
import "./AboutMe.css";
import Typed from 'react-typed';

const AboutMe = () => {

  const name = "Satya Chiratla";

  const typepText = (
    <Typed 
        className="typed-text"
        strings={["Web", "Frontend", "Backend"]}
        typeSpeed={40}
        backSpeed={60}
        loop />
  );

  return (
    <div className="about">
      <h1> About Me </h1>
      <p>
        {" "}
        Hello! I'm <span className="other-color">{name}</span>. I'm a {typepText} Developer, <br />
        A highly motivated individual passionate about coding and technology.{" "}
        <br />I have been developing websites for over 2 years.
      </p>
      <p>
        The technologies I knew are <span className="back">Html5, CSS3, JavaScript, ReactJs, Redux</span>.{" "}
        <br />
        I create responsive websites that are displayed on all devices desktops
        and mobiles. <br />I have curious to learn FullStack and many more
        technologies.
      </p>
      <p>
        My goal is to crack <span className="back">FAANG</span> companies.
        <br />
        Also, I have worked hard in my education and now it's time to put them
        into my career.
      </p>
    </div>
  );
};

export default AboutMe;
