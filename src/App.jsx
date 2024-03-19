import { useState } from "react";
import { AboutMe, Contact, Project, Skill, Home } from "./mainComponents";
import Navbar from "./commonComponents/Navbar";
import MyExperience from "./mainComponents/MyExperience";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
        <Home />
        <Skill />
        <MyExperience />
        <AboutMe />
        <Project />
        <Contact />
      </Router>
    </>
  );
}

export default App;
