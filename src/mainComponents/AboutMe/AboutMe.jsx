import React from "react";
import girlImg from "../../assets/girl.svg";
import "./style.css";

const AboutMe = () => {
  return (
    <div className="about_main spacing_main" id="">
      <div className="about_section1">
        <div className="about_section1_head">
          <h1>
            Hello I’am <span className="text_bold">Muneeba Dilawaze.</span>
          </h1>
          <h1>
            <span className="text_bold">Frontend</span>{" "}
            <span className="text_outline">Developer</span>
          </h1>
          <h1>
            Based In <span className="text_bold">Pakistan</span>
          </h1>
        </div>
        <div className="about_section1_para">
          <p>
            I'm Muneeba Dilawaze Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to specimen book.
          </p>
        </div>
        <div></div>
      </div>
      <div className="about_section2">
        <img src={girlImg} />
      </div>
    </div>
  );
};

export default AboutMe;
