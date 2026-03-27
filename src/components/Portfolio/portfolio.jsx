import React, { useState } from "react";
import "./portfolio.scss";
import Title_Data from "../../data/titleData";
import Portfolio_Data from "../../data/PortfolioData";

const Portfolio = () => {
  // 🔹 récupérer toutes les skills
  const allSkills = Portfolio_Data.flatMap((p) => p.p_skills || []);
  const uniqueTabs = Array.from(new Set(allSkills));
  const tabs = ["All Projects", ...uniqueTabs];

  const [activeTab, setActiveTab] = useState("All Projects");

  // 🔹 filtrage
  const filteredProjects =
    activeTab === "All Projects"
      ? Portfolio_Data
      : Portfolio_Data.filter((project) =>
          project.p_skills?.includes(activeTab),
        );

  return (
    <div id="portfolio">
      <div className="container">
        <div className="portfolio">
          {/* Description */}
          <div className="bloc-desc">
            <h2>{Title_Data.portfolio_title}</h2>
            <p>
              These projects played a key role in helping me learn and master a
              wide range of front-end skills.
            </p>
          </div>

          <div className="row mt-4">
            {/* Tabs */}
            <div className="col-lg-2 col-md-2">
              <ul className="nav nav-tabs flex-column mb-4">
                {tabs.map((tab, index) => (
                  <li className="nav-item" key={index}>
                    <button
                      className={`nav-link ${
                        activeTab === tab ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content */}
            <div className="col-lg-10 col-md-10">
              <div className="row">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <a
                      href={project.p_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card project-card"
                    >
                      {/* Image */}
                      <img
                        src={project.p_img}
                        className="card-img-top"
                        alt={project.p_title}
                      />

                      {/* Body */}
                      <div className="card-body">
                        <h5 className="card-title">{project.p_title}</h5>

                        {/* Buttons */}
                        <div className="card-text">Visit Website</div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
