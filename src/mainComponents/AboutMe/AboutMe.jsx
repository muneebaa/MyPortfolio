import React from "react";
import girlImg from "../../assets/girl2.svg";
import "./style.css";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="hidden_div"></div>
      <div className="about_main spacing_main">
        <div className="about_section1">
          <img src={girlImg} />
        </div>
        <div className="about_section2">
          <div className="about_section2_head">
            <h1>
              About <span className="text_bold">Me</span>
            </h1>
          </div>
          <div className="about_section2_para">
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2022, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, I'm building cutting-edge web applications using modern
              technologies such as Next.js, TypeScript, React.js, Tailwindcss,
              Bootstrap, Supabase and much more.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me painting
              and crafting different stuff. This multifaceted approach to life
              allows me to bring a unique perspective to my development
              projects, infusing them with a blend of technical prowess and
              creative ingenuity.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
