import React from "react";
import "./hero.scss";
import profileImg from "../../assets/about.jpg";
import cv from "../../assets/CV-Malek-Kouki.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="hero-section">
          <div className="intro">
            <span className="hello">Hello,</span>
            <h1>
              I'm <span>Malek Kouki,</span> <br />
              FrontEnd developer based in Tunisia
            </h1>
            <p>
              I am a skilled front-end developer with a passion for building
              responsive, engaging websites that prioritize both aesthetics and
              user experience.
            </p>
            <div className="hero-action">
              <div className="bloc-git">
                <a href="https://github.com/Malek-Koukii" target="_blank">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label="GitHub logo"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577 
                    0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757
                    -1.089-.744.084-.729.084-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998
                    .108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 
                    0-1.31.468-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 
                    0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 
                    1.019.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23 
                    .653 1.653.242 2.874.118 3.176.77.84 1.233 1.911 1.233 3.221 
                    0 4.61-2.807 5.625-5.479 5.921.43.371.815 1.102.815 2.222 
                    0 1.606-.014 2.903-.014 3.293 0 .32.192.694.801.576 
                    C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"
                    />
                  </svg>
                </a>
              </div>
              <div className="bloc-btn">
                <AnchorLink
                  href="#contact"
                  className="btn"
                  onClick={() => setShowMenu(false)}
                >
                  Contact Me
                </AnchorLink>

                <a href={cv} download="Malek-Kouki-CV.pdf" className="cv">
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <img src={profileImg} alt="profileImg" className="profileImg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
