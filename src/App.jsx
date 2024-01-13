import { useState } from "react";
import { AboutMe, Contact, Project, Skill, Home } from "./mainComponents";
import Navbar from "./commonComponents/Navbar";
import MyExperience from "./mainComponents/MyExperience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Skill />
      <MyExperience />
      <AboutMe />
      <Project />
      <Contact />
    </>
  );
}

export default App;
