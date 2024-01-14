import React from "react";
import Logo from "../../assets/Logo.svg";
import LogoWhite from "../../assets/logoWhite.svg";

import "./style.css";

const Footer = () => {
  return (
    <div className="main_footer spacing_main">
      <div className="footer_logo_main">
        <div className="footer_logo">
          <img src={LogoWhite} />
        </div>
        <p className="footer_logo_text">Muneeba</p>
      </div>
      <div>
        <h5>@ 2022-2024</h5>
      </div>
    </div>
  );
};

export default Footer;
