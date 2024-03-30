import React from "react";
import ExperienceCard from "../../commonComponents/ExperienceCard";
import zweidevsLogo from "../../assets/zweidevs2.svg";
import essLogo from "../../assets/EssLogo.png";
import vuLogo from "../../assets/vulogo.png";
import "./style.css";

const MyExperience = () => {
  return (
    <div id="experience">
      <div className="hidden_div"></div>
      <div className="experience_main spacing_main">
        <h1 className="experience_main_heading">
          My <span className="text_bold">Experience</span>
        </h1>

        <div className="experience_main_wrapper">
          <ExperienceCard
            image={zweidevsLogo}
            title={"Zweidevs"}
            description={
              <div>
                <p>
                  As a Software Engineer at Zweidevs, I successfully completed
                  over <b>10 projects</b> spanning web and mobile applications.
                  During this tenure, I acquired expertise in technologies such
                  as
                  <b> React, React Native, Firebase, Craft.js, Next.js,</b> and
                  various other tools, contributing significantly to my
                  professional development.
                </p>
                <p>
                  Additionally, I had the opportunity to collaborate with
                  <b> clients</b> from <b>around the world</b>, ensuring
                  exceptional experiences and outcomes for their projects
                </p>
              </div>
            }
            start_date={"Dec 2022"}
            end_date={"Present"}
            link={"https://www.zweidevs.com/"}
          />
          <ExperienceCard
            image={essLogo}
            title={"Expert System Solution"}
            description={
              <div>
                As an Associate Software Engineer at Expert System Solutions, I
                have successfully contributed to multiple projects utilizing
                React.js, where I gained a deep understanding of core concepts
                such as Redux and API integrations. My proactive approach and
                problem-solving skills have significantly contributed to
                streamlining project workflows, resulting in quicker and more
                efficient project deliveries for the company.
                <p>
                  I collaborated with a diverse team, learning about version
                  control systems and agile development practices. These
                  experiences enhanced my technical skills and prepared me for
                  future roles in software engineering.
                </p>
              </div>
            }
            start_date={"May 2022"}
            end_date={"Dec 2022"}
            link={"https://esspk.com/"}
          />

          <ExperienceCard
            image={vuLogo}
            title={"VU360 Solutions"}
            description={
              <p>
                As an intern at Vu360 Solutions, I gained valuable hands-on
                experience working with React.js while actively contributing to
                a CRM project. This experience not only enhanced my technical
                skills but also provided me with insights into real-world
                software development processes, preparing me for future roles in
                the industry.
              </p>
            }
            start_date={"Apr 2022"}
            end_date={"May 2022"}
            link={"https://vu360solutions.com/"}
          />
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
