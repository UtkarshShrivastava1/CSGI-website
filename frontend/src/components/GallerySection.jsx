import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: "https://csitdurg.in/admin/uploads/gallery/94eda6a832079a0340f82964287594f7.jpg",
      alt: "Photo Gallery 1",
      title: "Campus Event",
      description: "Students participating in technical workshops and competitions"
    },
    {
      id: 2,
      src: "https://csitdurg.in/admin/uploads/gallery/643202aefe68f69aa9e2be9fb896c308.jpg",
      alt: "Photo Gallery 2",
      title: "Student Activities",
      description: "Collaborative learning and group projects"
    },
    {
      id: 3,
      src: "https://csitdurg.in/admin/uploads/gallery/6c3d24fd3edabb16b5cf7acf499dd6d7.jpg",
      alt: "Photo Gallery 3",
      title: "Technical Workshop",
      description: "Hands-on training sessions with industry experts"
    },
    {
      id: 4,
      src: "https://csitdurg.in/admin/uploads/gallery/5e20e1bcfb7b6549233347220fa227f9.jpg",
      alt: "Photo Gallery 4",
      title: "Cultural Program",
      description: "Annual cultural fest performances and celebrations"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header with decorative elements */}
        <div className="relative text-center mb-16">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#0d173b]/5"></div>
          <h2 className="relative inline-block text-4xl font-bold text-[#0d173b]">
            Moments <span className="text-[#0d173b]/70">Gallery</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#0d173b]"></div>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Explore our collection of memorable events and activities captured through the lens
          </p>
        </div>

        {/* Featured Large Carousel */}
        <div>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
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
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="mySwiper"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id} style={{ width: '70%', height: '400px' }}>
                <div 
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d173b] via-[#0d173b]/80 to-transparent p-6">
                    <h3 className="text-white font-semibold text-xl mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;