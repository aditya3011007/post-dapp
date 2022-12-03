import React from "react";
import "../assets/about.css";
import Tips from "../components/Tips";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

function About() {
  return (
    <>
    <Particle params={particlesConfig} className="App-particles__container" />
    <div className="App">
      <div className="App-text about">
        <div className="about-text__title">
          USERNAME - {""}
          <span className="about-text__title-big">Aditya Raj Singh</span>.
        </div>
        <div className="about-text__title">
          Your TIPS History
        </div>
        <div className="goo">
        <Tips name = "aasmi" date="today" price="10" thoughts ="so this will be here alright"/>
        <Tips name = "urvashi" date="yesterday" price="20" thoughts ="ok so thats how its done"/>
        
        </div>
        <div className="about-text__body">
          Dont let thos those thhoughts be inside you anymore , let them be explored
          <br />
        </div>
        <div className="about-social">
          <div className="about-social__title">Thanks for Visiting</div>
          <div className="about-social__links">
            <a
              className="about-social__link"
              href="https://github.com/aditya3011007"
              rel="noopener noreferrer"
              target="_blank">
              GITHUB
            </a>
            <a
              className="about-social__link"
              href="https://www.reddit.com/"
              rel="noopener noreferrer"
              target="_blank">
              Reddit
            </a>
            <a
              className="about-social__link"
              href="mailto:ars3011007@gmail.com"
              rel="noopener noreferrer"
              target="_blank">
              email
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
