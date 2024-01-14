import React from "react";
import Footer from "../../commonComponents/Footer/Footer";
import "./style.css";

const Contact = () => {
  return (
    <div>
      <div className="contact_main spacing_main">
        <h1 className="contact_main_heading">
          Get in <span className="text_bold">Touch with me</span>
        </h1>
        <div className="contact_main_wrapper">
          <div className="contact_section1">
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Email" />
            <textarea type="text" placeholder="How can I help?*" />
            <button>Get In Touch</button>
          </div>
          <div className="contact_section2">
            <h1>
              Lets <span className="text_outline">talk</span> for
            </h1>
            <h1> something special</h1>
            <p className="contact_section2_para">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <h3>muneeba.dilawaze@gmail.com</h3>
            <h3>+923017900292</h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
