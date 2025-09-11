import { motion, useAnimationControls } from "framer-motion";
import React from "react";

function Featured() {
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();

  const letterVariants = {
    initial: { y: "100%" },
    animate: {
      y: "0%",
      transition: { ease: [0.22, 1, 0.36, 1], duration: 0.6 },
    },
  };

  const handleHoverStart = (controls) => controls.start("animate");
  const handleHoverEnd = (controls) => controls.start("initial");

  return (
    <div className="w-full py-20 relative bg-[#fff8ef]">
      <div className="w-full px-20 border-b-[1px] border-zinc-300 pb-12">
        <h1 className="text-6xl font-medium tracking-tight">
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
         
          <motion.div
            onMouseEnter={() => handleHoverStart(controls1)}
            onMouseLeave={() => handleHoverEnd(controls1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Fyde Project"
              />
            </div>
          </motion.div>

          
          <motion.div
            onMouseEnter={() => handleHoverStart(controls2)}
            onMouseLeave={() => handleHoverEnd(controls2)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"
                alt="Vise Project"
              />
            </div>
          </motion.div>
        </div>
      </div>

      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9]">
      
        <h1 className="flex overflow-hidden text-[#846039] text-9xl font-bold leading-none">
          {"FYDE".split("").map((item, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="initial"
              animate={controls1}
              className="inline-block"
              transition={{ delay: index * 0.05 }}
            >
              {item}
            </motion.span>
          ))}
        </h1>

        
        <h1 className="absolute top-0 left-0 flex overflow-hidden text-[#846039] text-9xl font-bold leading-none">
          {"VISE".split("").map((item, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              initial="initial"
              animate={controls2}
              className="inline-block"
              transition={{ delay: index * 0.05 }}
            >
              {item}
            </motion.span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default Featured;

