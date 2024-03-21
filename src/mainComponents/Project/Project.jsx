import React, { useEffect, useState } from "react";
import Pagination from "../../commonComponents/Pagination";
import project1 from "../../assets/project4.png";
import project2 from "../../assets/project5.png";
import project3 from "../../assets/project6.png";
import project4 from "../../assets/project7.png";
import project5 from "../../assets/project8.png";
import project6 from "../../assets/project9.png";
import project7 from "../../assets/project10.png";
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
    page: 1,
  },
  {
    image: project2,
    serialNumber: "02",
    title: "Funnelshero",
    link: "https://www.perspective.co/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "ltr",
    page: 1,
  },
  {
    image: project3,
    serialNumber: "03",
    title: "Blockcircle",
    link: "https://blockcircle.com/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "rtl",
    page: 1,
  },
  {
    image: project4,
    serialNumber: "04",
    title: "Hello PTO",
    link: "https://www.neverleft.co.uk/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "rtl",
    page: 2,
  },
  {
    image: project5,
    serialNumber: "05",
    title: "Champions Choice",
    link: "https://www.perspective.co/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "ltr",
    page: 2,
    mobile: true,
  },
  {
    image: project6,
    serialNumber: "06",
    title: "Countries",
    link: "https://blockcircle.com/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "rtl",
    page: 2,
  },
  {
    image: project7,
    serialNumber: "04",
    title: "Hello PTO",
    link: "https://www.neverleft.co.uk/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "rtl",
    page: 3,
  },
  {
    image: project7,
    serialNumber: "05",
    title: "Champions Choice",
    link: "https://www.perspective.co/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "ltr",
    page: 3,
  },
  {
    image: project7,
    serialNumber: "06",
    title: "Countries",
    link: "https://blockcircle.com/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitiamolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.",
    type: "rtl",
    page: 3,
  },
];

const Project = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="project">
      <div className="hidden_div"></div>
      <div className="project_main spacing_main" id="project">
        <h1 className="project_main_heading">
          My <span className="text_bold">Projects</span>
        </h1>
        <div>
          {projectsArr
            .filter((j) => j.page === currentPage)
            .map((item) => (
              <div className="project_all_projects">
                <div
                  className="all_projects_image"
                  style={
                    windowWidth <= 1000
                      ? {
                          order: 1,
                          height: item.mobile ? "400px" : "200px",
                        }
                      : {
                          order: item.type === "rtl" ? 1 : 2,
                          height: item.mobile ? "400px" : "200px",
                        }
                  }
                >
                  <img src={item.image} width={"100%"} height={"100%"} />
                </div>
                <div
                  className="project_all_text"
                  style={
                    windowWidth <= 1000
                      ? {
                          order: 2,
                        }
                      : {
                          order: item.type === "rtl" ? 2 : 1,
                        }
                  }
                >
                  <h1 className="project_all_text_serial">
                    {item.serialNumber}
                  </h1>
                  <h2 className="project_all_text_title">{item.title}</h2>
                  <p className="project_desc"> {item.description}</p>
                  <a href={item.link} target="_blank">
                    <img src={openIcon} width={"20px"} height={"20px"} />
                  </a>
                </div>
              </div>
            ))}
          <Pagination totalPages={3} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default Project;
