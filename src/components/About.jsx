import React from 'react'


function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full py-20 px-20 bg-[#B7D300] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[3vw] leading-[4vw] tracking-tight">Mochi is a strategic partner for fast-growing
         tech buisnesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] mt-20 pt-10">
        <div className="w-1/2">
        <h1 className="text-7xl">
            Our Approach :  <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error expedita ad laboriosam beatae?
        </h1>
        <button className="flex gap-10 items-center px-10 py-8 bg-zinc-900 mt-10 rounded-full text-white">READ MORE
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
        </button>
        </div>
        <img src="/assets/feature.jpeg" className="w-1/2 h-[70vh] rounded-3xl" />

      </div>
    </div>
  )
}

export default About