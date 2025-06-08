import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import campus1 from "../assets/campus1.jpg";
import campus2 from "../assets/campus2.jpg";
import campus3 from "../assets/campus3.jpg";
import campus4 from "../assets/campus4.jpg";

const AboutImageSlider = () => {
  return (
    <div 
      className="hidden lg:block relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] group"
      data-aos="zoom-in"
    >
      <Swiper
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-2xl overflow-hidden"
      >
        {[campus1, campus2, campus3, campus4].map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image} 
              alt={`Campus View ${index + 1}`} 
              className="w-full h-72 object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutImageSlider;
