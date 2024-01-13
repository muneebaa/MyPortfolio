import React from "react";
import Card from "../../commonComponents/Card";
import htmlIcon from "../../assets/htmlIcon.png";
import htmlIconOutlined from "../../assets/htmlIconOutlined.png";
import JsIcon from "../../assets/JsIcon.png";
import tsIcon from "../../assets/tsIcon.png";
import JsIconWhite from "../../assets/JsIconWhite.png";
import nextJsIcon from "../../assets/nextJsIcon.png";
import gitIcon from "../../assets/gitIcon.png";
import reactNativeIcon from "../../assets/reactNativeIcon.png";
import sassIcon from "../../assets/sassIcon.png";
import reactIcon from "../../assets/reactIconWhite.png";
import cssIcon from "../../assets/cssIcon.png";

import "./style.css";

const Skills = () => {
  return (
    <div className="skills_main spacing_main">
      <div className="skills_inner">
        <h1>
          My <span className="text_bold">Skills</span>
        </h1>

        <div className="skills_wrapper">
          <div className="skills_cards">
            <Card image={htmlIcon} text={"Html"} />
            {/* <Card image={htmlIconOutlined} text={"Html"} /> */}
            <Card image={JsIconWhite} text={"Javascript"} isDark={true} />
            {/* <Card image={JsIconOutlined} text={"Javascript"} /> */}
            <Card image={cssIcon} text={"Css3"} />
            <Card image={sassIcon} text={"Sass/Scss"} />
          </div>
          <div className="skills_cards">
            <Card image={gitIcon} text={"Git"} />
            <Card image={tsIcon} text={"Typescript"} />
            <Card image={nextJsIcon} text={"Next Js"} />
            <Card image={reactIcon} text={"React Js"} isDark={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
