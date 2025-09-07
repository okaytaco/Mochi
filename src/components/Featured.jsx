import React from 'react'

function Featured() {
  return (
    <div className="w-full py-18">
        <div className="w-full px-18 border-b-[1px] pb-15">
            <h1 className="text-[4.5vw] tracking-tight">Featured Projects</h1>
        </div>
        <div className="px-20">
        <div className="cards w-full flex gap-15 mt-10">
                <div className="card rounded-2xl w-1/2 h-[75vh] bg-red-500">

                </div>
                <div className="card rounded-2xl w-1/2 h-[75vh] bg-red-500">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured