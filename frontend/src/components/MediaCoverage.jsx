import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// Add custom styles for pagination
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

  const mediaItems = [
    {
      id: 1,
      image: "https://csitdurg.in/admin/uploads/gallery/f6ff4a7b9d0f1d9235efe753a6339eea.jpg",
      category: "Featured Story",
      title: "Making Headlines",
      description: "Our institution's achievements highlighted in regional media coverage",
      date: "March 15, 2024"
    },
    {
      id: 2,
      image: "https://csitdurg.in/admin/uploads/gallery/26.jpeg",
      category: "Academic News",
      title: "Excellence in Education",
      description: "Our students' remarkable achievements making national headlines",
      date: "March 10, 2024"
    }
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

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Add custom styles */}
      <style>{customStyles}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0d173b] opacity-[0.02]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#0d173b] rounded-full"></span>
            <h2 className="text-5xl font-bold text-[#0d173b] mb-6 tracking-tight">
              Media <span className="relative inline-block">
                Coverage
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#0d173b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mt-8">
            Discover our institution's journey through media highlights and achievements
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Swiper */}
          <div className="lg:col-span-2 relative">
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                renderBullet: function (index, className) {
                  return '<span class="' + className + '"></span>';
                }
              }}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ['100%', 0, 0],
                },
              }}
              modules={[Autoplay, Pagination, EffectCreative]}
              className="rounded-3xl overflow-hidden shadow-2xl"
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            >
              {mediaItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative h-[500px] group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-red-800 via-[#0d173b]/50 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium uppercase tracking-wider transform transition-all duration-500 group-hover:scale-105 group-hover:bg-white/30">
                          {item.category}
                        </span>
                        <span className="text-white/60 text-sm transform transition-all duration-500 group-hover:scale-105">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mt-2 mb-4 transform transition-all duration-500 group-hover:scale-105 group-hover:translate-y-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-base leading-relaxed transform transition-all duration-500 group-hover:scale-105 group-hover:translate-y-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute top-1/2 left-0 right-0 z-10 flex items-center justify-between px-4 transform -translate-y-1/2">
              <button 
                onClick={handlePrevClick}
                className="group w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 hover:bg-white hover:scale-110 shadow-xl -translate-x-1/2 hover:shadow-2xl hover:-translate-x-[60%]"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[#0d173b]/20 group-hover:border-[#0d173b]/40 transition-all duration-500 group-hover:scale-90"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0d173b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <svg className="w-8 h-8 text-[#0d173b] transform group-hover:-translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </button>
              <button 
                onClick={handleNextClick}
                className="group w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 hover:bg-white hover:scale-110 shadow-xl translate-x-1/2 hover:shadow-2xl hover:translate-x-[60%]"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-[#0d173b]/20 group-hover:border-[#0d173b]/40 transition-all duration-500 group-hover:scale-90"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#0d173b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <svg className="w-8 h-8 text-[#0d173b] transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Side Content */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-red-800 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-[#0d173b] transform transition-all duration-500 hover:scale-105">Latest Updates</h3>
                </div>
                <div className="flex items-center gap-2 bg-[#0d173b]/5 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#0d173b] animate-pulse"></span>
                  <span className="text-sm text-[#0d173b] font-medium">Live Updates</span>
                </div>
              </div>
              <div className="space-y-6">
                {mediaItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`group p-4 rounded-2xl cursor-pointer transition-all duration-500 ${
                      activeSlide === index 
                        ? 'bg-gradient-to-br from-red-800 via-red-700 to-red-800 text-white scale-105 shadow-lg' 
                        : 'bg-gray-50 hover:bg-gray-100 hover:scale-105'
                    }`}
                    onClick={() => handleSideItemClick(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 transform transition-all duration-500 group-hover:scale-110">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          View Details
                        </div>
                      </div>
                      <div className="flex-1 transform transition-all duration-500 group-hover:translate-x-2">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            activeSlide === index 
                              ? 'bg-white/20 text-white' 
                              : 'bg-[#0d173b]/10 text-[#0d173b]'
                          }`}>
                            {item.category}
                          </span>
                          <span className={`text-xs ${
                            activeSlide === index ? 'text-white/60' : 'text-gray-400'
                          }`}>
                            {item.date}
                          </span>
                        </div>
                        <h4 className={`font-semibold line-clamp-2 text-base ${
                          activeSlide === index ? 'text-white' : 'text-[#0d173b]'
                        }`}>
                          {item.title}
                        </h4>
                        <div className="mt-3 flex items-center gap-2">
                          <div className={`w-8 h-1 rounded-full ${
                            activeSlide === index ? 'bg-white/60' : 'bg-[#0d173b]/60'
                          }`}></div>
                          <span className={`text-xs ${
                            activeSlide === index ? 'text-white/60' : 'text-gray-400'
                          }`}>
                            Click to view
                          </span>
                        </div>
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
