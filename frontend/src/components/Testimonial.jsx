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
import Testimonials2 from "../assets/Testimonials/CSGI/ID-2.jpeg";
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
      quote: "Grateful for the Strong Foundation and Values from CSIT",
      description:
        "CSIT gave me a strong foundation, dedicated faculty support, and invaluable experiences that shaped both my academic and professional journey.",
      name: "Aniket Nikose",
      program: "Electrical and Electronics Engineering",
      rating: 5,
      image: Testimonials2,
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
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={`${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white py-14 relative overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-5 left-5 w-32 h-32 rounded-full bg-blue-400 mix-blend-multiply filter blur-lg"></div>
        <div className="absolute bottom-5 right-10 w-40 h-40 rounded-full bg-indigo-300 mix-blend-multiply filter blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact header */}
        {/* <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-[#0d173b] bg-opacity-10 rounded-full text-[#0d173b] font-medium text-xs mb-3">STUDENT VOICES</span>
          <h2 className="text-3xl font-bold text-[#0d173b] mb-2">Testimonials</h2>
          <div className="flex items-center justify-center mb-3">
            <div className="h-1 w-8 bg-[#0d173b] opacity-30 rounded-full"></div>
            <div className="h-1 w-14 bg-[#0d173b] mx-1 rounded-full"></div>
            <div className="h-1 w-8 bg-[#0d173b] opacity-30 rounded-full"></div>
          </div>
        </div> */}
        {/* Header section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#7f1d1d] mb-2">
            Students Testimonials
          </h2>
          <div className="flex items-center justify-center mb-3">
            <div className="h-1 w-8 bg-[#7f1d1d] opacity-30 rounded-full"></div>
            <div className="h-1 w-14 bg-[#7f1d1d] mx-1 rounded-full"></div>
            <div className="h-1 w-8 bg-[#7f1d1d] opacity-30 rounded-full"></div>
          </div>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            What our students say about their experiences
          </p>
        </div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="py-6 px-2"
              style={{ width: "70%", maxWidth: "650px" }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl group">
                <div className="flex flex-col md:flex-row">
                  {/* Left column with image background - made narrower */}
                  <div className="md:w-1/3 bg-gradient-to-br from-[#7f1d1d] to-red-900 p-4 relative flex flex-col items-center justify-center text-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white border-opacity-20 shadow-lg mb-3 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-white text-sm font-bold mb-1">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-blue-200 mb-2">
                      <GraduationCap size={12} className="opacity-70" />
                      <p className="text-xs">{testimonial.program}</p>
                    </div>

                    <div className="mt-2">
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>

                  {/* Right column with testimonial content */}
                  <div className="md:w-2/3 p-5 flex flex-col justify-center">
                    <div className="mb-3">
                      <Quote size={24} className="text-[#7f1d1d] opacity-20" />
                    </div>

                    <p className="text-lg font-medium mb-3 text-[#7f1d1d] leading-snug">
                      "{testimonial.quote}"
                    </p>

                    <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                      {testimonial.description}
                    </p>

                    <div className="h-1 w-12 bg-[#7f1d1d] rounded-full opacity-30"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-8">
          <div className="px-4 py-1 bg-white shadow-md rounded-full flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            <p className="text-xs text-gray-600">
              <span className="font-medium text-[#7f1d1d]">100+</span> student
              testimonials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
