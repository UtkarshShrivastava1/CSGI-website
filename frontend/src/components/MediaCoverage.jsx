import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const customStyles = `
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background-color: #0d173b;
    opacity: 0.5;
    transition: all 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    width: 20px;
    border-radius: 4px;
  }
`;

const MediaCoverage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const mediaItems = [
    {
      id: 1,
      image:
        "https://csitdurg.in/admin/uploads/gallery/f6ff4a7b9d0f1d9235efe753a6339eea.jpg",
      category: "Featured Story",
      title: "Making Headlines",
      description:
        "Our institution's achievements highlighted in regional media coverage",
      date: "March 15, 2024",
    },
    {
      id: 2,
      image: "https://csitdurg.in/admin/uploads/gallery/26.jpeg",
      category: "Academic News",
      title: "Excellence in Education",
      description:
        "Our students' remarkable achievements making national headlines",
      date: "March 10, 2024",
    },
  ];

  const handleSideItemClick = (index) => {
    setActiveSlide(index);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const openImageModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeImageModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <style>{customStyles}</style>

      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <img
            src={modalImage}
            alt="Expanded View"
            className="max-h-full max-w-full object-contain rounded-lg shadow-xl"
          />
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0d173b] mb-4">
            Media Coverage
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-[#0d173b] mx-auto rounded-full"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed mt-6">
            Discover our institution's journey through media highlights and
            achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2 relative">
            <Swiper
              ref={swiperRef}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              effect="creative"
              creativeEffect={{
                prev: { shadow: true, translate: [0, 0, -400] },
                next: { translate: ["100%", 0, 0] },
              }}
              modules={[Autoplay, Pagination, EffectCreative]}
              className="rounded-2xl overflow-hidden shadow-xl"
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            >
              {mediaItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="relative h-72 sm:h-[500px] group cursor-pointer"
                    onClick={() => openImageModal(item.image)}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d173b] via-[#0d173b]/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
                      <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-base mb-2 sm:mb-4">
                        <span className="px-2 sm:px-3 py-1 bg-white/20 rounded-full uppercase font-medium tracking-wide">
                          {item.category}
                        </span>
                        <span className="text-white/60">{item.date}</span>
                      </div>
                      <h3 className="text-lg sm:text-3xl font-bold mb-1 sm:mb-4">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-between items-center px-2 sm:px-4 -translate-y-1/2">
              <button
                onClick={handlePrevClick}
                className="bg-white shadow-md w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d173b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextClick}
                className="bg-white shadow-md w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#0d173b]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg h-full">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0d173b]">
                  Latest Updates
                </h3>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d173b]/5">
                  <span className="w-2 h-2 rounded-full bg-[#0d173b] animate-pulse"></span>
                  <span className="text-xs font-medium text-[#0d173b]">
                    Live
                  </span>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {mediaItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      activeSlide === index
                        ? "bg-[#0d173b] text-white"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => handleSideItemClick(index)}
                  >
                    <div className="flex gap-3 sm:gap-4 items-start">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm mb-1">
                          <span
                            className={`px-2 py-1 rounded-full ${
                              activeSlide === index
                                ? "bg-white/20 text-white"
                                : "bg-[#0d173b]/10 text-[#0d173b]"
                            }`}
                          >
                            {item.category}
                          </span>
                          <span
                            className={
                              activeSlide === index
                                ? "text-white/60"
                                : "text-gray-400"
                            }
                          >
                            {item.date}
                          </span>
                        </div>
                        <h4
                          className={`font-semibold text-sm sm:text-base line-clamp-2 ${
                            activeSlide === index
                              ? "text-white"
                              : "text-[#0d173b]"
                          }`}
                        >
                          {item.title}
                        </h4>
                        <span
                          className={`text-xs ${
                            activeSlide === index
                              ? "text-white/60"
                              : "text-gray-400"
                          }`}
                        >
                          Click to view
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
