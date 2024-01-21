import React from "react";
import Logo from "../../assets/Logo.svg";
import downloadIcon from "../../assets/downloadIcon.svg";
import { HashLink as Link } from "react-router-hash-link";
import cvPDF from "../../assets/cv.pdf";
import "./style.css";

const Navbar = () => {
  return (
    <div className="main_nav spacing_main">
      <div className="nav_logo_main">
        <div className="nav_logo">
          <img src={Logo} />
        </div>
        <p className="nav_logo_text">Muneeba</p>
      </div>

      <div className="nav_links_main">
        <p>About Me</p>
        <p>Skills</p>
        <p>Project</p>
        <p>Contact Me</p>
      </div>
      <a href={cvPDF} download="MuneebaDilawazeResume" target="_blank">
        <div className="nav_resume">
          <p>Resume</p>
          <div className="nav_resume_icon">
            <img src={downloadIcon} />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
