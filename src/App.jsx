import { motion } from "framer-motion";
import ReactLenis from "lenis/react";
import "./App.css";
import Header from "./Header";
import Study from "./Study";
import Skill from "./Skill";
import Project from "./Project";
import Contect from "./Contect";
import FramerMotion from "./FramerMotion";

function App() {
  return (
    <ReactLenis root>
      <motion.div className="bg-[#0a0a0a] p-5 select-none h-auto w-auto min-w-screen min-h-screen mx-auto flex flex-col gap-3">
        <FramerMotion>
          <Header />
          <Skill />
          <Study />
          <Project />
          <Contect />
        </FramerMotion>
      </motion.div>
    </ReactLenis>
  );
}

export default App;
