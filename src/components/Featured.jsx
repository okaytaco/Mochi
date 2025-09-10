import { motion } from "motion/react";
import React, { useState } from "react";


function Featured() {
  const [isHovering, setHovering] = useState(false);

  return (
    <div className="w-full py-18">
      <div className="w-full px-18 border-b-[1px] pb-15">
        <h1 className="text-[4.5vw] font-medium uppercase tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="card w-full flex gap-15 mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#bb6b00] z-[9] text-9xl font-semibold leading-none tracking-tighter">
              <h1 className="absolute flex right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#bb6b00] z-[9] text-9xl font-semibold leading-none tracking-tighter">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={isHovering ? { y: "0" } : { y: "100%" }}
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative rounded-2xl w-1/2 h-[75vh]">
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#bb6b00] z-[9] text-9xl font-semibold leading-none tracking-tighter">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={isHovering ? { y: "0" } : { y: "100%" }}
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.06}}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
