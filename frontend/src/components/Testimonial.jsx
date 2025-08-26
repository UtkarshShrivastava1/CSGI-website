import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Quote, Star, GraduationCap } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import testimonial images
import Testimonials1 from "../assets/Testimonials/CSGI/ID-1.jpeg";
import Testimonials3 from "../assets/Testimonials/CSGI/ID-3.jpeg";
import Testimonials4 from "../assets/Testimonials/CSGI/ID-4.jpeg";
import Testimonials5 from "../assets/Testimonials/CSGI/ID-5.jpeg";
import Testimonials6 from "../assets/Testimonials/CSGI/ID-6.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Where Guidance and Innovation Shape Future Pharmacists",
      description:
        "With supportive faculty, modern infrastructure, and advanced labs, every lecture at this institute brought me closer to professional excellence—I highly recommend it to aspiring pharmacists.",
      name: "Seema Deshmukh",
      program: "D.Pharmacy",
      rating: 5,
      image: Testimonials1,
    },

    {
      quote:
        "From CSE Foundation to Senior Functional Consultant at O9 Solutions",
      description:
        "A strong CSE foundation and passion for problem-solving led me to become a Senior Functional Consultant – Delivery at O9 Solutions.",
      name: "JASPREET SINGH BHATIA",
      program: "Computer Science and Engineering",
      rating: 5,
      image: Testimonials3,
    },
    {
      quote: "Opportunities, Friendship, and Guidance at CSIT",
      description:
        "CSIT offers abundant academic opportunities, supportive friends, knowledgeable faculty, and even great canteen food at affordable prices.",
      name: "Saniya ansari",
      program: "B.Pharmacy",
      rating: 5,
      image: Testimonials4,
    },
    {
      quote: "Transforming Students into Confident Pharmacy Professionals",
      description:
        "This pharmacy institute transformed my journey with expert faculty, modern labs, and real-world training, preparing me confidently for my career.",
      name: "Tushendra Kumar Deshmukh",
      program: "B.Pharmacy",
      rating: 5,
      image: Testimonials5,
    },
    {
      quote: "A Transformative Journey of Learning and Lifelong Memories",
      description:
        "My college journey was transformative, with supportive faculty, vibrant campus life, and lasting friendships that enriched me academically, personally, and socially.",
      name: "Minakshi Bind",
      program: "B.Pharmacy",
      rating: 5,
      image: Testimonials6,
    },
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center sm:justify-start space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            className={`${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-14 relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-5 left-5 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-blue-400 mix-blend-multiply filter blur-lg"></div>
        <div className="absolute bottom-5 right-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-indigo-300 mix-blend-multiply filter blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7f1d1d] mb-2 sm:mb-3">
            Students Testimonials
          </h2>
          <div className="flex items-center justify-center mb-3">
            <div className="h-1 w-6 sm:w-8 bg-[#7f1d1d] opacity-30 rounded-full"></div>
            <div className="h-1 w-10 sm:w-14 bg-[#7f1d1d] mx-1 rounded-full"></div>
            <div className="h-1 w-6 sm:w-8 bg-[#7f1d1d] opacity-30 rounded-full"></div>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto px-4">
            What our students say about their experiences
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.1,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 1.3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 35,
            },
            1280: {
              slidesPerView: 1.8,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="testimonial-swiper pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="py-4 sm:py-6 px-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl group max-w-2xl mx-auto">
                {/* Mobile Layout */}
                <div className="block sm:hidden">
                  {/* Mobile Header */}
                  <div className="bg-gradient-to-br from-[#7f1d1d] to-red-900 p-6 text-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white border-opacity-20 shadow-lg mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-white text-lg font-bold mb-1">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center justify-center gap-2 text-red-200 mb-2">
                      <GraduationCap
                        size={12}
                        className="opacity-70 flex-shrink-0"
                      />
                      <p className="text-xs leading-tight">
                        {testimonial.program}
                      </p>
                    </div>
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Mobile Content */}
                  <div className="p-5">
                    <div className="mb-3">
                      <Quote
                        size={20}
                        className="text-[#7f1d1d] opacity-20 mx-auto"
                      />
                    </div>
                    <p className="text-base sm:text-lg font-medium mb-3 text-[#7f1d1d] leading-snug text-center">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed text-center">
                      {testimonial.description}
                    </p>
                    <div className="h-1 w-10 bg-[#7f1d1d] rounded-full opacity-30 mx-auto mt-4"></div>
                  </div>
                </div>

                {/* Desktop/Tablet Layout */}
                <div className="hidden sm:flex">
                  {/* Left column with image background */}
                  <div className="w-1/3 bg-gradient-to-br from-[#7f1d1d] to-red-900 p-4 lg:p-5 relative flex flex-col items-center justify-center text-center">
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-white border-opacity-20 shadow-lg mb-3 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-white text-sm lg:text-base font-bold mb-1">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-red-200 mb-2">
                      <GraduationCap
                        size={12}
                        className="opacity-70 flex-shrink-0"
                      />
                      <p className="text-xs leading-tight">
                        {testimonial.program}
                      </p>
                    </div>

                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Right column with testimonial content */}
                  <div className="w-2/3 p-4 lg:p-5 flex flex-col justify-center">
                    <div className="mb-3">
                      <Quote size={20} className="text-[#7f1d1d] opacity-20" />
                    </div>

                    <p className="text-base lg:text-lg font-medium mb-3 text-[#7f1d1d] leading-snug">
                      "{testimonial.quote}"
                    </p>

                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {testimonial.description}
                    </p>

                    <div className="h-1 w-10 lg:w-12 bg-[#7f1d1d] rounded-full opacity-30"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Statistics */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <div className="px-3 sm:px-4 py-2 bg-white shadow-md rounded-full flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <p className="text-xs sm:text-sm text-gray-600">
              <span className="font-medium text-[#7f1d1d]">100+</span> student
              testimonials
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .testimonial-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          background: #7f1d1d;
          opacity: 0.3;
          width: 8px;
          height: 8px;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        @media (max-width: 640px) {
          .testimonial-swiper .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            margin: 0 3px;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
