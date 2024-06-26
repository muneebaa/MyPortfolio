import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import LogoWhite from "../../assets/logoWhite.svg";
import downloadIcon from "../../assets/download_white.png";
import hamburgerWhite from "../../assets/hamWhite.png";
import crossIcon from "../../assets/crossicon.png";
import hamburgerBlack from "../../assets/hamBlack.png";
import downloadDarkIcon from "../../assets/download-black.png";
import { HashLink as Link } from "react-router-hash-link";
import cvPDF from "../../assets/cv.pdf";
import "./style.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [openNav, setOpenNav] = useState(false);

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
  // function openNav() {
  //   document.getElementById("myNav").style.width = "100%";
  // }

  // function closeNav() {
  //   document.getElementById("myNav").style.width = "0%";
  // }

  return (
    <div>
      {!openNav && (
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

          <a
            href={cvPDF}
            download="MuneebaDilawazeResume"
            target="_blank"
            className="nav_resume"
            style={{
              backgroundColor: scrolling ? "white" : "black",
              color: scrolling ? "black" : "white",
            }}
          >
            <p>Resume</p>
            <div className="nav_resume_icon">
              <img src={scrolling ? downloadDarkIcon : downloadIcon} />
            </div>
          </a>

          <div className="nav_ham_main">
            <a
              href={cvPDF}
              download="MuneebaDilawazeResume"
              target="_blank"
              className="nav_ham_resume"
              style={{
                backgroundColor: scrolling ? "white" : "black",
                color: scrolling ? "black" : "white",
              }}
            >
              <p>Resume</p>
              <div className="nav_ham_resume_icon">
                <img src={scrolling ? downloadDarkIcon : downloadIcon} />
              </div>
            </a>
            <div className="nav_ham" onClick={() => setOpenNav(true)}>
              <img src={scrolling ? hamburgerWhite : hamburgerBlack} />
            </div>
          </div>
        </div>
      )}
      {openNav && (
        <div id="myNav" class="overlay" style={{ width: openNav ? "100%" : 0 }}>
          <img
            src={crossIcon}
            className="overlay_cross"
            onClick={() => setOpenNav(false)}
          />
          <div class="overlay-content">
            <Link to="#" smooth onClick={() => setOpenNav(false)}>
              Home
            </Link>
            <Link to="#skills" smooth onClick={() => setOpenNav(false)}>
              Skills
            </Link>
            <Link to="#experience" smooth onClick={() => setOpenNav(false)}>
              Experience
            </Link>
            <Link to="#about" smooth onClick={() => setOpenNav(false)}>
              About
            </Link>
            <Link to="#project" smooth onClick={() => setOpenNav(false)}>
              Project
            </Link>
            <Link to="#contact" smooth onClick={() => setOpenNav(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
