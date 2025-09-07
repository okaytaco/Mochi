import React from 'react';

function Footer() {
  return (

    <div className="w-full min-h-screen bg-zinc-100 p-20 relative text-black">
      
      <div className="w-full flex justify-between items-start">
        <div className="heading">
           <h1 className="text-[6vw] font-bold uppercase leading-none">EYE-</h1>
           <h1 className="text-[6vw] font-bold uppercase leading-none">OPENING</h1>
        </div>
       
        <h1 className="text-[6vw] font-bold uppercase leading-none">PRESENTATIONS</h1>
      </div>

      
      <div className="h-[1px] w-full bg-zinc-400 my-20"></div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-10">

        <div>
          <h4 className="mb-5 text-zinc-500">S:</h4>
          {["Instagram", "X", "Facebook", "LinkedIn"].map((item, index) => (
            <a key={index} href="#" className="block text-md font-light underline mb-2">{item}</a>
          ))}
        </div>

       
        <div>
           <h4 className="mb-5 text-zinc-500">L:</h4>
           <a href="#" className="block text-md font-light underline mb-2">202-1965 W 4th Ave</a>
           <a href="#" className="block text-md font-light underline mb-2">Vancouver, Canada</a>
           <a href="#" className="block text-md font-light underline mb-2">30 Chukarina St</a>
           <a href="#" className="block text-md font-light underline mb-2">Lviv, Ukraine</a>
           <h4 className="mt-10 mb-5 text-zinc-500">E:</h4>
           <a href="#" className="block text-md font-light underline mb-2">singhaniketk707@gmail.com</a>
        </div>

        
        <div className="md:text-right">
            <h4 className="mb-5 text-zinc-500">M:</h4>
             {["Home", "Services", "Our work", "About us", "Insights", "Contact"].map((item, index) => (
                <a key={index} href="#" className="block text-md font-light underline mb-2">{item}</a>
            ))}
        </div>

      </div>

      
      <div className="absolute bottom-10 left-0 w-full flex items-center justify-between px-20">
        <h4 className="font-semibold text-2xl">Mochi</h4>
        <div className="text-zinc-500">
          <span>© Mochi 2025.</span>
          <a href="#" className="underline ml-4">Legal Terms</a>
        </div>
        <h4 className="text-zinc-500">Website by okaytaco <a className="font-normal underline" href="https://github.com/okaytaco">@GitHub</a></h4>
      </div>

    </div>
  );
}

export default Footer;