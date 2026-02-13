import React from 'react'

function banner() {
  return (
    <>
    
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  flex flex-col md:flex-row my-10'>
        <div className="w-full order-1 md:order-2 md:w-1/2 mt-12 md:mt-32">
          <div className='space-y-12'>
            <h1 className="text-4xl font-bold "> Hey! Welcome here to explore Something{" "}
              <span className="text-sky-600">new Everyday!</span> </h1>
            <p className='text-xl '>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, vel dicta possimus, doloribus, tenetur quo facere suscipit repudiandae fuga impedit sapiente reiciendis. Nisi id ad, debitis eius ipsum at vero!

            </p>
          </div>
        </div>
        <div className=" order-2 w-full md:w-1/2 pt-20">
          <img src="ban.jpg" alt="bannerimg" className="md:w-[182] h-[122] " width="700" height="700" />
        </div>
        
      </div>

    </>
  )
}

export default banner
