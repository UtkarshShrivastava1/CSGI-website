import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Add custom styles for the news ticker
const customStyles = `
  .news-ticker {
    width: 100%;
    height: auto;
  }

  .news-ticker .swiper-slide {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    .news-ticker .swiper-slide {
      padding: 0.25rem 1rem;
      min-height: 3rem;
    }
    
    .news-ticker p {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;

const NewsTicker = () => {
  return (
    <div className="bg-red-800 text-white overflow-hidden">
      <style>{customStyles}</style>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          speed: 1000,
        }}
        loop={true}
        modules={[Autoplay]}
        className="news-ticker"
      >
        <SwiperSlide>
          <p className="text-center px-4 md:px-0">
            Admissions Open for Session 2025-26
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-center px-4 md:px-0">
            We are now accepting applications for our distinguished Engineering
            and Pharmacy programs.{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="text-center px-4 md:px-0 text-sm md:text-base">
            Join an institution renowned for academic excellence, cutting-edge
            research, and state-of-the-art facilities. Join us on a journey to
            professional success and innovation
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewsTicker;
