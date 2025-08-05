import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import csitBanner from "../assets/Banners/PC/csitbanner.jpg";
import csitBanner2 from "../assets/Banners/PC/csitbanner2.jpg";
import csitBanner3 from "../assets/Banners/PC/csitbanner3.jpg";
import csitBanner4 from "../assets/Banners/PC/csitbanner4.jpg";
import csitBanner5 from "../assets/Banners/PC/csitbanner5.jpg";

import BannerPhone from "../assets/BannerPhone.png";
import BannerPhone2 from "../assets/BannerPhone2.png";
import BannerPhone3 from "../assets/BannerPhone3.png";
import BannerPhone4 from "../assets/BannerPhone4.png";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom CSS for arrows and mobile responsiveness
const customStyles = `
  /* Base styles */
  .hero-swiper {
    margin: 0 !important;
    padding: 0 !important;
    line-height: 0 !important;
  }

  /* Navigation buttons - arrows only */
  .hero-swiper .swiper-button-next,
  .hero-swiper .swiper-button-prev {
    width: 30px;
    height: 30px;
    color: rgba(255, 255, 255, 0.7);
    background: none;
    font-weight: bold;
  }

  .hero-swiper .swiper-button-next:hover,
  .hero-swiper .swiper-button-prev:hover {
    color: rgba(255, 255, 255, 0.9);
  }

  .hero-swiper .swiper-button-next:after,
  .hero-swiper .swiper-button-prev:after {
    font-size: 24px;
    font-weight: bold;
  }

  .hero-swiper .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
  }

  .hero-swiper .swiper-pagination-bullet-active {
    background-color: #0d173b;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .hero-swiper {
      height: 45vh !important; /* Reduced from 60vh to 45vh */
      width: 100vw !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 0 !important;
    }
    
    .hero-swiper .swiper-slide {
      height: 45vh; /* Reduced from 60vh to 45vh */
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin: 0;
      padding: 0;
    }

    .hero-swiper img {
      width: 100vw !important;
      height: 45vh !important; /* Reduced from 60vh to 45vh */
      object-fit: contain !important; /* Changed from cover to contain */
      object-position: center !important;
      margin: 0 !important;
      padding: 0 !important;
      vertical-align: bottom !important;
    }

    /* Adjust navigation position for mobile */
    .hero-swiper .swiper-button-next,
    .hero-swiper .swiper-button-prev {
      transform: translateY(-50%) scale(0.8);
      width: 25px;
      height: 25px;
    }

    .hero-swiper .swiper-button-next:after,
    .hero-swiper .swiper-button-prev:after {
      font-size: 20px;
    }

    .hero-swiper .swiper-pagination {
      bottom: 5px !important;
    }
  }
`;

const Hero = () => {
  const desktopSlides = [
    { image: csitBanner, alt: "College Campus Banner 1" },
    { image: csitBanner2, alt: "College Campus Banner 2" },
    { image: csitBanner3, alt: "College Campus Banner 3" },
    { image: csitBanner4, alt: "College Campus Banner 4" },
    { image: csitBanner5, alt: "College Campus Banner 4" },
  ];

  const mobileSlides = [
    { image: BannerPhone, alt: "College Campus Mobile Banner 1" },
    { image: BannerPhone2, alt: "College Campus Mobile Banner 2" },
    { image: BannerPhone4, alt: "College Campus Mobile Banner 4" },
  ];

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  return (
    <div className="w-screen overflow-hidden p-0 m-0 leading-[0px]">
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
            <div className="w-full h-full m-0 p-0 leading-[0px]">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-contain md:object-cover m-0 p-0 align-bottom"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
