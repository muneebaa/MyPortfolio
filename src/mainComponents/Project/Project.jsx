import React from "react";
import project1 from "../../assets/project4.png";
import project2 from "../../assets/project5.png";
import project3 from "../../assets/project6.png";
import openIcon from "../../assets/openIcon2.png";

import "./style.css";

const projectsArr = [
  {
    image: project1,
    serialNumber: "01",
    title: "Neverleft (Web and Mobile App(React Native))",
    link: "https://www.neverleft.co.uk/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "rtl",
  },
  {
    image: project2,
    serialNumber: "02",
    title: "Funnelshero",
    link: "https://www.perspective.co/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "ltr",
  },
  {
    image: project3,
    serialNumber: "03",
    title: "Blockcircle",
    link: "https://blockcircle.com/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "rtl",
  },
];

const Project = () => {
  return (
    <div className="project_main spacing_main" id="project">
      <h1 className="project_main_heading">
        My <span className="text_bold">Projects</span>
      </h1>
      <div>
        {projectsArr.map((item) => (
          <div className="project_all_projects">
            <div
              className="all_projects_image"
              style={{ order: item.type === "rtl" ? 1 : 2 }}
            >
              <img src={item.image} width={"100%"} height={"100%"} />
            </div>
            <div
              className="project_all_text"
              style={{ order: item.type === "rtl" ? 2 : 1 }}
            >
              <h1 className="project_all_text_serial">{item.serialNumber}</h1>
              <h2 className="project_all_text_title">{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} target="_blank">
                <img src={openIcon} width={"20px"} height={"20px"} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
