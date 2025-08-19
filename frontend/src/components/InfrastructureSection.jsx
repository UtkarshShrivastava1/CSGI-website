import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import infrastructure images
import Infrastructure1 from "../assets/InfrastructureSection/Infrastructure1.jpg";
import Infrastructure2 from "../assets/InfrastructureSection/Infrastructure2.jpg";
import Infrastructure3 from "../assets/InfrastructureSection/Infrastructure3.jpg";
import Infrastructure4 from "../assets/InfrastructureSection/Infrastructure4.jpg";

const InfrastructureSection = () => {
  // Define infrastructure image data
  const leftSliderImages = [
    {
      src: Infrastructure1,
      alt: "Campus Building",
    },
    {
      src: Infrastructure2,
      alt: "Computer Lab",
    },
  ];

  const rightSliderImages = [
    {
      src: Infrastructure3,
      alt: "Library",
    },
    {
      src: Infrastructure4,
      alt: "Sports Ground",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#7f1d1d] mb-10 md:mb-12">
            Our Infrastructure
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our state-of-the-art campus, designed to foster innovation
            and creativity.
          </p>
          <div className="w-16 h-1 bg-[#2c7ff4] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Swiper */}
          <div className="relative group">
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
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              {leftSliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Swiper */}
          <div className="relative group">
            <Swiper
              spaceBetween={0}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              {rightSliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
