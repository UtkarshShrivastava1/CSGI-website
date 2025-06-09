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

const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(null);
  const swiperRef = useRef(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://csitdurg.in/admin/uploads/gallery/94eda6a832079a0340f82964287594f7.jpg",
      alt: "Photo Gallery 1",
      title: "Campus Event",
      description:
        "Students participating in technical workshops and competitions",
    },
    {
      id: 2,
      src: "https://csitdurg.in/admin/uploads/gallery/643202aefe68f69aa9e2be9fb896c308.jpg",
      alt: "Photo Gallery 2",
      title: "Student Activities",
      description: "Collaborative learning and group projects",
    },
    {
      id: 3,
      src: "https://csitdurg.in/admin/uploads/gallery/6c3d24fd3edabb16b5cf7acf499dd6d7.jpg",
      alt: "Photo Gallery 3",
      title: "Technical Workshop",
      description: "Hands-on training sessions with industry experts",
    },
    {
      id: 4,
      src: "https://csitdurg.in/admin/uploads/gallery/5e20e1bcfb7b6549233347220fa227f9.jpg",
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
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#0d173b]/5"></div>
          <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-[#0d173b]">
            Moments <span className="text-[#0d173b]/70">Gallery</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#0d173b]"></div>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
            Explore our collection of memorable events and activities captured
            through the lens
          </p>
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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d173b] via-[#0d173b]/80 to-transparent p-4 sm:p-6">
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
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 ml-2 sm:ml-4 hover:bg-gray-100"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous Slide"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 mr-2 sm:mr-4 hover:bg-gray-100"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next Slide"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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
