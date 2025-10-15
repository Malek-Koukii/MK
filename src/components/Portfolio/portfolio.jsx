import React from "react";
import "./portfolio.scss";
import Title_Data from "../../data/titleData";
import Portfolio_Data from "../../data/PortfolioData";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <div className="portfolio">
          <div className="bloc-desc">
            <h2>{Title_Data.portfolio_title}</h2>
            <p>
              These projects played a key role in helping me learn and master a
              wide range of front-end skills.
            </p>
          </div>

          <div className="bloc-content">
            {Portfolio_Data.map((services, index) => {
              const isOdd = index % 2 !== 0;
              return (
                <div className="card" key={index}>
                  <div
                    className={`row align-items-center ${
                      isOdd ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="col-lg col-md-6">
                      <img
                        src={services.p_img}
                        alt={services.p_title}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg col-md-6">
                      <h3>{services.p_title}</h3>
                      <div className="skills">
                        <ul>
                          {[
                            services.p_skill1,
                            services.p_skill2,
                            services.p_skill3,
                            services.p_skill4,
                            services.p_skill5,
                            services.p_skill6,
                          ]
                            .filter(Boolean)
                            .map((skill, idx) => (
                              <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                      </div>

                      <div className="btns">
                        <a href={services.p_demo} target="_blank">
                          <span>Demo</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="2" y1="7" x2="13" y2="7" />
                            <polyline points="8 3 13 7 8 11" />
                          </svg>
                        </a>
                        <a href={services.p_code_source} target="_blank">
                          <span>Source Code</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="2" y1="7" x2="13" y2="7" />
                            <polyline points="8 3 13 7 8 11" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
