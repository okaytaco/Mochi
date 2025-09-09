import React from 'react'

function LandingPage() {
  return (
    <div className="w-full h-screen bg-[#d4dccd] pt-1">
        <div className="textstructure mt-60 px-20">
            {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index)=> {
                return <div className="masker">
                    <div className="w-fit flex items-baseline gap-[1vw] text-[7vw] leading-[1]">
                        {index === 1 && (<img src="/assets/mochiimg.jpeg" alt="decorative graphic" className="inline-block w-[9vw] h-[1cap]"/>)}
                <h1 className="uppercase font-bold text-[#2e282a] tracking-tighter leading-[6.5vw]">
                    {item}
                </h1>
                </div>
            </div>
            })}
        </div>
        <div className="border-t-[1px] border-zinc-900 mt-32 flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=> 
            <p className="text-md font-normal tracking-tight leading-none">{item}</p> 
            )}
        </div>
    </div>
  )
}

export default LandingPage