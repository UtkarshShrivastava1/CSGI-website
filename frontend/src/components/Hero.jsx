import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import csitBanner from "../assets/csitbanner.jpg";
import csitBanner2 from "../assets/csitbanner2.jpg";
import csitBanner3 from "../assets/csitbanner3.jpg";
import csitBanner4 from "../assets/csitbanner.jpg";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom CSS for arrows and mobile responsiveness
const customStyles = `
  .hero-swiper .swiper-button-next,
  .hero-swiper .swiper-button-prev {
    background-color: rgba(255, 255, 255, 0.7);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    color: #0d173b;
    font-weight: bold;
  }

  .hero-swiper .swiper-button-next:hover,
  .hero-swiper .swiper-button-prev:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .hero-swiper .swiper-button-next:after,
  .hero-swiper .swiper-button-prev:after {
    font-size: 18px;
  }

  .hero-swiper .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }

  .hero-swiper .swiper-pagination-bullet-active {
    background-color: #0d173b;
  }

  /* Updated mobile styles */
  @media (max-width: 768px) {
    .hero-swiper {
      height: auto !important;
      max-height: 50vh;
    }
    
    .hero-swiper .swiper-slide {
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-swiper img {
      object-fit: contain !important;
      width: 100% !important;
      max-height: 50vh !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`;

const Hero = () => {
  const slides = [
    { image: csitBanner, alt: "College Campus Banner 1" },
    { image: csitBanner2, alt: "College Campus Banner 2" },
    { image: csitBanner3, alt: "College Campus Banner 3" },
    { image: csitBanner4, alt: "College Campus Banner 4" },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <style>{customStyles}</style>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full object-contain md:object-cover md:max-h-[80vh]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
