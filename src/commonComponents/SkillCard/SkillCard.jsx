import React from "react";
import "./style.css";

const SkillCard = ({ image, text, isDark }) => {
  return (
    <div className={isDark ? "card_main_dark" : "card_main"}>
      <div className="card_image">
        <img src={image} />
      </div>
      <p className={isDark ? "card_white" : "card_text"}>{text}</p>
    </div>
  );
};

export default SkillCard;
