import React from "react";
import { motion } from "framer-motion";

function FramerMotion({ children }) {
  const container = {
    hidden: { opacity: 0, filter: "blur(50px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        staggerChildren: 0.3, // Staggering the children animations by 0.1 seconds
      },
    },
  };

  const item = {
    hidden: { opacity: 0, filter: "blur(50px)", x: -20 },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {React.Children.map(children, (child, index) => (
        <motion.span key={index} variants={item}>
          {child}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default FramerMotion;
