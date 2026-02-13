import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function Imageslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div className="max-w-screen-2xl mx-auto  ">
      <Slider {...settings}>
        
        <div className="h-96 md:h-96">

          <img
            src="bookfront1.jpg"
            alt="slide 1"
            className="w-full h-full object-cover  object-center"

          />
        </div>

            <div className="h-96 md:h-96">

          <img
            src="newbook3.jpg"
            alt="slide 1"
            className="w-full h-full object-cover   object-center"

          />
        </div>

        <div className="h-96 md:h-96">
          <img
            src="bookfront2.jpg"
            alt="slide 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

      </Slider>
    </div>
  )
}

export default Imageslider
