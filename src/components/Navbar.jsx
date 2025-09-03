import React from 'react'

function Navbar() {
  return (
    <div className="w-full px-20 py-8">
        <div className="logo font-bold">
            <h3>MOCHI</h3>
        </div>
        <div className="links">
            {["Services", "Our Work", "About Us", "Insights"].map((item, index)=>(
                <a key={index} className="text-md font-semibold">{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar