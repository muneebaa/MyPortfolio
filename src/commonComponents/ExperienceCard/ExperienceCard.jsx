import React from "react";
import openIcon from "../../assets/openIcon2.png";
import "./style.css";

const ExperienceCard = ({
  image,
  title,
  description,
  start_date,
  end_date,
  link,
}) => {
  return (
    <div className="experience_card_main">
      <div className="experience_card_head">
        <div className="experience_card_company">
          <div className="card_company_img">
            <img src={image} />
          </div>
          <h1 className="card_company_title">{title}</h1>
        </div>
        <div className="experience_card_dates_main">
          <p className="experience_card_dates">
            {start_date} - {end_date}
          </p>
          <a href={link} target="_blank">
            <img src={openIcon} width={"20px"} height={"20px"} />
          </a>
        </div>
      </div>
      <div className="experience_card_description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
