import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// Import gallery images
import GalleryImage1 from "../assets/GallerySection/Gallery1.jpg";
import GalleryImage2 from "../assets/GallerySection/Gallery2.jpg";
import GalleryImage3 from "../assets/GallerySection/Gallery3.jpg";
import GalleryImage4 from "../assets/GallerySection/Gallery4.jpg";

const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(null);
  const swiperRef = useRef(null);

  const galleryImages = [
    {
      id: 1,
      src: GalleryImage1,
      alt: "Photo Gallery 1",
      title: "Campus Event",
      description:
        "Students participating in technical workshops and competitions",
    },
    {
      id: 2,
      src: GalleryImage2,
      alt: "Photo Gallery 2",
      title: "Student Activities",
      description: "Collaborative learning and group projects",
    },
    {
      id: 3,
      src: GalleryImage3,
      alt: "Photo Gallery 3",
      title: "Technical Workshop",
      description: "Hands-on training sessions with industry experts",
    },
    {
      id: 4,
      src: GalleryImage4,
      alt: "Photo Gallery 4",
      title: "Cultural Program",
      description: "Annual cultural fest performances and celebrations",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative text-center mb-16">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#7f1d1d]/5"></div>
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-[#7f1d1d]">
            Moments <span className="text-[#7f1d1d]/70">Gallery</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#7f1d1d]"></div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {galleryImages.map((image) => (
              <SwiperSlide
                key={image.id}
                style={{ width: "85%", maxWidth: "500px", height: "400px" }}
              >
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#7f1d1d] via-[#7f1d1d]/80 to-transparent p-4 sm:p-6">
                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 ml-2 sm:ml-4 transition-colors duration-200 hover:text-[#7f1d1d]"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous Slide"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 mr-2 sm:mr-4 transition-colors duration-200 hover:text-[#7f1d1d]"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next Slide"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setActiveImage(null)}
          tabIndex={0}
          aria-hidden="true"
        >
          <div className="max-w-4xl w-[90%] md:w-auto bg-white rounded-lg overflow-hidden shadow-lg relative">
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-3 right-3 bg-white rounded-full shadow p-1"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
