import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen bg-[#fff8ef] flex gap-5 items-center px-30">
        <div className="cardcontainer h-[55vh] w-1/2">
            <div className="card relative rounded-2xl w-full h-full bg-[#153b0a] flex items-center justify-center">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full text-white border-2">&copy;2025</button>
            </div>
        </div>
        <div className="cardcontainer relative flex gap-5 h-[55vh] w-1/2">
            <img className="card rounded-2xl w-full h-full" src="\assets\gc1.jpeg" alt="" />
            <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full text-white border-2">Production Level Presentations</button>
            <div className="card relative rounded-2xl w-full h-full bg-[#2e282a] flex items-center justify-center">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full text-white border-2">5 Star Rated</button>
            </div>
        </div>
    </div>
  )
}

export default Cards