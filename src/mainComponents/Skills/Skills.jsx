import React from "react";
import SkillCard from "../../commonComponents/SkillCard";
import htmlIcon from "../../assets/htmlIcon.png";
import tsIcon from "../../assets/tsIcon.png";
import JsIconWhite from "../../assets/JsIconWhite.png";
import nextJsIcon from "../../assets/nextJsIcon.png";
import gitIcon from "../../assets/gitIcon.png";
import sassIcon from "../../assets/sassIcon.png";
import reactIcon from "../../assets/reactIconWhite.png";
import cssIcon from "../../assets/cssIcon.png";

import "./style.css";

const Skills = () => {
  return (
    <div className="skills_main spacing_main" id="skills">
      <div className="skills_inner">
        <h1>
          My <span className="text_bold">Skills</span>
        </h1>

        <div className="skills_wrapper">
          <div className="skills_cards">
            <SkillCard image={htmlIcon} text={"Html"} />
            {/* <SkillCard image={htmlIconOutlined} text={"Html"} /> */}
            <SkillCard image={JsIconWhite} text={"Javascript"} isDark={true} />
            {/* <SkillCard image={JsIconOutlined} text={"Javascript"} /> */}
            <SkillCard image={cssIcon} text={"Css3"} />
            <SkillCard image={sassIcon} text={"Sass/Scss"} />
          </div>
          <div className="skills_cards">
            <SkillCard image={gitIcon} text={"Git"} />
            <SkillCard image={tsIcon} text={"Typescript"} />
            <SkillCard image={nextJsIcon} text={"Next Js"} />
            <SkillCard image={reactIcon} text={"React Js"} isDark={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
