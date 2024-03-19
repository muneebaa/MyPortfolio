import React from "react";
import ExperienceCard from "../../commonComponents/ExperienceCard";
import zweidevsLogo from "../../assets/zweidevs2.svg";
import essLogo from "../../assets/EssLogo.png";
import vuLogo from "../../assets/vulogo.png";
import "./style.css";

const MyExperience = () => {
  return (
    <div className="experience_main spacing_main" id="experience">
      <h1 className="experience_main_heading">
        My <span className="text_bold">Experience</span>
      </h1>

      <div className="experience_main_wrapper">
        <ExperienceCard
          image={zweidevsLogo}
          title={"Zweidevs"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia."
          }
          start_date={"Dec 2022"}
          end_date={"Present"}
          link={"https://www.zweidevs.com/"}
        />
        <ExperienceCard
          image={essLogo}
          title={"Expert System Solution"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia."
          }
          start_date={"Mar 2022"}
          end_date={"Dec 2022"}
          link={"https://esspk.com/"}
        />

        <ExperienceCard
          image={vuLogo}
          title={"VU360 Solutions"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia."
          }
          start_date={"Apr 2022"}
          end_date={"Mar 2022"}
          link={"https://vu360solutions.com/"}
        />
      </div>
    </div>
  );
};

export default MyExperience;
