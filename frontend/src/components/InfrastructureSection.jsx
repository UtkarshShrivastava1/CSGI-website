import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const InfrastructureSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0d173b]">
            Our <span className="text-[#0d173b]">Infrastructure</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our state-of-the-art campus, designed to foster innovation and creativity.
          </p>
          <div className="w-16 h-1 bg-[#0d173b] mx-auto mt-4 rounded-full"></div>
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
              <SwiperSlide>
                <img
                  src="https://csitdurg.in/admin/uploads/gallery/014b3f5676f89fa6d8aa5f45e06fabdb.jpg"
                  alt="Infrastructure 1"
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://csitdurg.in/admin/uploads/gallery/90504c70957c87d4c3b75f85f24e7bcf.jpg"
                  alt="Infrastructure 2"
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </SwiperSlide>
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
              <SwiperSlide>
                <img
                  src="https://csitdurg.in/admin/uploads/gallery/59a90dd20e3be9628132249ff4a3046d.jpg"
                  alt="Activity 1"
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://csitdurg.in/admin/uploads/gallery/454f2a205a8fd1f568ec9e92d294b217.jpg"
                  alt="Activity 2"
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
