import React, { useEffect, useRef, useState } from "react";
import Footer from "../../commonComponents/Footer/Footer";
import emailjs from "@emailjs/browser";
import {
  Audio,
  Discuss,
  FidgetSpinner,
  LineWave,
  MutatingDots,
  Puff,
} from "react-loader-spinner";
import { toast } from "react-toastify";
import "./style.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [error, setError] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const notifySuccess = () => toast.success("Wohoo! Email sent successfully.");
  const notifyError = (err) => toast.error(err);

  const sendEmail = () => {
    setLoading(true);

    if (data.from_email && data.from_name && data.message) {
      console.log("asdas--", form.current);
      emailjs
        .sendForm(
          "service_1omkr04",
          "template_1qi43qc",
          form.current,
          "RGHtqO4VBcytDSOen"
        )
        .then(
          (result) => {
            setLoading(false);
            notifySuccess();
            setData({
              from_name: "",
              from_email: "",
              message: "",
            });
            console.log(result.text);
          },
          (error) => {
            setLoading(false);
            notifyError("Oops! Something went wrong.");
            console.log(error.text);
          }
        );
    } else {
      setLoading(false);
      // if (!data.from_name) {
      setError((prevState) => ({
        ...prevState,
        from_name: !data.from_name ? "fill data" : "",
        from_email: !data.from_email ? "fill data" : "",
        message: !data.message ? "fill data" : "",
      }));
      // }

      notifyError("Fill all fields to send email");
    }
  };
  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div id="contact">
      <div className="hidden_div"></div>
      <div className="contact_main spacing_main">
        <h1 className="contact_main_heading">
          Get in <span className="text_bold">Touch with me</span>
        </h1>
        <div className="contact_main_wrapper">
          <form ref={form} className="contact_section1">
            <label>Name</label>
            <input
              type="text"
              name="from_name"
              value={data.from_name}
              placeholder="John Doe"
              onChange={(e) => {
                setData((prevState) => ({
                  ...prevState,
                  from_name: e.target.value,
                }));
                const fullNamePattern =
                  /^[A-Za-z\s]+$/.test(e.target.value) &&
                  e.target.value.trim().length >= 2;
                console.log("sssss-s-----s-s-s--", fullNamePattern);
                setError((prevState) => ({
                  ...prevState,
                  from_name: fullNamePattern,
                }));
              }}
            />
            {data.from_name !== "" && (
              <div>
                {!error.from_name && (
                  <span style={{ color: "red", fontSize: 12, marginTop: 5 }}>
                    Invalid full name.
                  </span>
                )}
              </div>
            )}

            <label>Email</label>
            <input
              type="email"
              value={data.from_email}
              name="from_email"
              onChange={(e) => {
                setData((prevState) => ({
                  ...prevState,
                  from_email: e.target.value,
                }));

                const emailFormat =
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                setError((prevState) => ({
                  ...prevState,
                  from_email: !emailFormat.test(e.target.value),
                }));
              }}
              placeholder="john.doe@gmail.com"
            />
            {!data.from_email && error.from_email && (
              <span style={{ color: "red", fontSize: 12, marginTop: 5 }}>
                Invalid email.
              </span>
            )}
            <label>Message</label>
            <textarea
              name="message"
              placeholder="How can I help?*"
              value={data.message}
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  message: e.target.value,
                }))
              }
            />
            {!data.message && error.message && (
              <span style={{ color: "red", fontSize: 12, marginTop: 5 }}>
                Message can not be empty
              </span>
            )}
            <div
              onClick={() => sendEmail()}
              className="contact_submit_btn"
              style={{
                pointerEvents: loading ? "none" : null,
                backgroundColor: loading ? "#cdcdcd" : "black",
                color: loading ? "#5A5A5A" : "white",
              }}
            >
              <span> Get In Touch</span>
              <Puff
                visible={loading}
                height="20"
                width="20"
                color="#5A5A5A"
                ariaLabel="puff-loading"
                wrapperStyle={{
                  width: "20px",
                  height: "20px",
                  marginLeft: "10px",
                }}
                wrapperClass=""
              />
            </div>
          </form>
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
