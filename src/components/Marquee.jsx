import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".003" className="w-full py-15 rounded-tl-3xl rounded-tr-3xl bg-[#291c1c]">
      
      <div className="text border-t-2 border-b-2 border-[#846039] flex overflow-hidden whitespace-nowrap">
        
        
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="flex flex-shrink-0" 
        >
          
          {[1, 2, 3].map((item, index) => (
             <h1 key={index} className="text-[#fff8ef] text-[22vw] leading-none font-bold pb-9 pr-25">
              WE ARE MOCHI
            </h1>
          ))}
        </motion.div>
        
       
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="flex flex-shrink-0"
        >
          {[1, 2, 3].map((item, index) => (
             <h1 key={index} className="text-white text-[22vw] leading-none font-bold pb-9 pr-25  ">
              WE ARE MOCHI
            </h1>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

export default Marquee;