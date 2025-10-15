import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top-footer">
          <p className="name">Malek Kouki</p>
          <p className="right">© 2025 All rights reserved.</p>
        </div>
        <p className="website">
          This website is built with React, Saas, Bootstrap5, React Email, Vite.
        </p>
      </div>
    </div>
  );
};

export default Footer;
