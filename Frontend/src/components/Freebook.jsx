import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from './Cards';
const Freebook = () => {
    const filterData=list.filter((data)=>data.category==="Free")
    ;
   var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1, // ✅ FIX
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

  return (
    <>
   <div className=' bg-gradient-to-b from-indigo-50 via-violet-100 to-pink-50 pb-25'>

    <div className='text-center max-w-screen-2xl container mx-auto md:px-20 px-4'>


        <h1 className='font-Bold text-4xl pb-10 pt-10 bg-gradient-to-b text-violet-800 '>Explore Free Books   <span className='text-rose-900'>:)</span></h1>
    </div>
    <div className='max-w-screen-2xl mx-auto md:px-20 px-0 sm-px-2 '>
      <Slider {...settings}>
  {filterData.map((item) => (
    <div key={item.id} className="flex justify-center">
      <Cards  className="sm:pl-6"item={item} />
    </div>
  ))}
</Slider>

    </div>
        </div> 
    </>
  )
}

export default Freebook
