import React from "react";
import "./about.scss";
import Title_Data from "../../data/titleData";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about">
          <div className="bloc-desc">
            <h2>{Title_Data.about_title}</h2>
            <p>
              I am a front-end developer with a strong passion for everything
              related to IT, and I'm always eager to explore new technologies.
            </p>
            <p>
              For me, front-end development is more than just a skill — it's a
              true passion that drives me to approach every project with
              creativity, precision, and full commitment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
