import { useState } from "react";
import { AboutMe, Contact, Project, Skill } from "./mainComponents";
import Navbar from "./commonComponents/Navbar";
import MyExperience from "./mainComponents/MyExperience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <AboutMe />
      <Skill />
      <MyExperience />
      <Contact />
      <Project />
    </>
  );
}

export default App;
