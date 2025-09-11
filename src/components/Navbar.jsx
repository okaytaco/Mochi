import React, { useState, useEffect } from 'react';

function Navbar() {
 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    
      setIsScrolled(window.scrollY > 10);
    };


    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
   
    <div 
      className={`fixed z-[999] w-full px-20 py-4 flex justify-between items-center transition-colors  duration-300 rounded-full
        ${isScrolled ? 'bg-zinc-700/10 backdrop-blur-md' : 'bg-transparent'}`
      }
    >
      <div className="logo font-bold">
        <h3 className="text-[#030100]">MOCHI</h3>
      </div>
      <div className="links flex gap-10 text-[#030100]">
        {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} className={`text-lg capitalize font-normal ${index === 4 && "ml-32"}`}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;