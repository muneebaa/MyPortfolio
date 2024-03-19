import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import LogoWhite from "../../assets/logoWhite.svg";
import downloadIcon from "../../assets/download_white.png";
import downloadDarkIcon from "../../assets/download-black.png";
import { HashLink as Link } from "react-router-hash-link";
import cvPDF from "../../assets/cv.pdf";
import "./style.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`main_nav ${
        scrolling ? "scroll_nav" : "non_scroll_nav"
      } spacing_main`}
    >
      <div className="nav_logo_main">
        <div className="nav_logo">
          <img src={!scrolling ? Logo : LogoWhite} />
        </div>
        <p
          className="nav_logo_text"
          style={{ color: scrolling ? "white" : "black" }}
        >
          Muneeba
        </p>
      </div>

      <div
        className={`nav_links_main ${
          scrolling ? "links_scroll" : "links_non_scroll"
        }`}
      >
        <Link to="#" smooth>
          Home
        </Link>
        <Link to="#skills" smooth>
          Skills
        </Link>
        <Link to="#experience" smooth>
          Experience
        </Link>
        <Link to="#about" smooth>
          About
        </Link>
        <Link to="#project" smooth>
          Project
        </Link>
        <Link to="#contact" smooth>
          Contact
        </Link>
      </div>

      <div
        className="nav_resume"
        style={{
          backgroundColor: scrolling ? "white" : "black",
          color: scrolling ? "black" : "white",
        }}
      >
        {/* <a href={cvPDF} download="MuneebaDilawazeResume" target="_blank"> */}
        <p>Resume</p>
        <div className="nav_resume_icon">
          <img src={scrolling ? downloadDarkIcon : downloadIcon} />
        </div>
        {/* </a> */}
      </div>
    </div>
  );
};

export default Navbar;
