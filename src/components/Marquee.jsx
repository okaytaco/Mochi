import { motion } from 'motion/react'
import React from 'react'

function Marquee() {
  return (
    <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#153b0a]">
        <div className="text border-t-1 border-b-1 border-[#5c6909] flex gap-30 overflow-hidden whitespace-nowrap">
            <motion.h1 
            initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}}
             className="text-[#d4dccd] text-[22vw] leading-none font-semibold pb-9">WE ARE MOCHI</motion.h1>
             <motion.h1 
            initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}}
             className="text-[#d4dccd] text-[22vw] leading-none font-semibold pb-9">WE ARE MOCHI</motion.h1>
             <motion.h1 
            initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}}
             className="text-[#d4dccd] text-[22vw] leading-none font-semibold pb-9">WE ARE MOCHI</motion.h1>            
        </div>
    </div>
  )
}

export default Marquee
