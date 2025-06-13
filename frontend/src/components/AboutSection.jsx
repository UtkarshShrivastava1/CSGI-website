import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiBook, FiEye, FiTarget } from "react-icons/fi";
import AboutImageSlider from "./AboutImageSlider";

const AboutSection = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Initialize AOS with enhanced settings
    AOS.init({
      duration: 1000,
      once: false, // Changed to false so animations repeat on scroll
      easing: "ease-out-cubic",
      offset: 120,
      mirror: true, // Animations will trigger each time the element comes into view
    });

    // Set up intersection observer for the section
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.querySelector("#about-section");
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section
      id="about-section"
      className="relative bg-white py-20 overflow-hidden transition-all duration-1000"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-[#7f1d1d] opacity-5 transition-opacity duration-1000"
        style={{
          transform: isInView ? "translateY(0)" : "translateY(-20px)",
          opacity: isInView ? 0.05 : 0,
          transition: "transform 1.2s ease-out, opacity 1.5s ease-out",
        }}
      ></div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="text-[#7f1d1d] font-semibold text-lg mb-4 block transition-all duration-500 hover:opacity-80 hover:tracking-wider">
            About Institution
          </span>
          <h2 className="text-4xl font-bold text-[#7f1d1d] mb-6 transform transition duration-500 hover:scale-105">
            Shaping Future Innovators
          </h2>
          <div className="w-24 h-1 bg-[#7f1d1d] mx-auto rounded-full transition-all duration-500"></div>
        </div>

        {/* Update text colors in cards */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Left Column */}
          <div
            className="space-y-12"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            {/* About Card with hover animations */}
            <div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
              data-aos="flip-left"
              data-aos-delay="100"
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#7f1d1d] p-4 rounded-xl mr-5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <FiBook className="text-3xl text-white transition-all duration-500 group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#7f1d1d] mb-3 transition-all duration-300 group-hover:translate-x-2">
                    About CSIT
                  </h3>
                  <p className="text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-800">
                    Established in 1999, CSIT stands as a beacon of excellence
                    in technical education. Recognized as Chhattisgarh's premier
                    engineering institute, we combine academic rigor with
                    industry relevance to shape tomorrow's leaders.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "24+", label: "Years of Excellence" },
                  { value: "50+", label: "Industry Partners" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-[#f8f9fa] rounded-xl transition-all duration-500 hover:bg-[#7f1d1d] hover:text-white group/stat transform hover:scale-105"
                    data-aos="zoom-in"
                    data-aos-delay={150 + index * 100}
                  >
                    <div className="text-2xl font-bold text-[#7f1d1d] mb-2 group-hover/stat:text-white transition-all duration-300">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600 group-hover/stat:text-white/90 transition-all duration-300">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Slider with entrance animation */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="transform transition-all duration-700 hover:scale-[1.02]"
            >
              <AboutImageSlider />
            </div>
          </div>

          {/* Right Column with staggered entrance */}
          <div
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            {/* Vision Card with hover effects */}
            <div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
              data-aos="flip-right"
              data-aos-delay="200"
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#7f1d1d] p-4 rounded-xl mr-5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <FiEye className="text-3xl text-white transition-all duration-500 group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#7f1d1d] mb-3 transition-all duration-300 group-hover:translate-x-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-800">
                    To cultivate global innovators through transformative
                    education, fostering intellectual growth that bridges
                    technological advancement with societal progress.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card with enhanced list animations */}
            <div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
              data-aos="flip-right"
              data-aos-delay="300"
            >
              <div className="flex items-start mb-6">
                <div className="bg-[#7f1d1d] p-4 rounded-xl mr-5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <FiTarget className="text-3xl text-white transition-all duration-500 group-hover:animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#7f1d1d] mb-3 transition-all duration-300 group-hover:translate-x-2">
                    Our Mission
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    {[
                      "Deliver world-class technical education through innovative pedagogy",
                      "Foster research-driven environment with industry collaborations",
                      "Develop socially responsible technocrats with global perspective",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start transition-all duration-500 hover:pl-3 opacity-0 transform translate-x-4"
                        style={{
                          animation: isInView
                            ? `fadeInRight 0.8s forwards ${0.5 + index * 0.2}s`
                            : "none",
                        }}
                      >
                        <div className="w-2 h-2 bg-[#7f1d1d] rounded-full mt-2 mr-3 transition-all duration-300 hover:scale-150 hover:bg-red-500"></div>
                        <span className="transition-all duration-300 hover:text-[#7f1d1d] font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional stats with counter animation */}
            <div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h3 className="text-2xl font-bold text-[#7f1d1d] mb-6 text-center">
                Our Impact
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "95%", label: "Placement Rate" },
                  { value: "200+", label: "Research Papers" },
                  { value: "15k+", label: "Alumni Network" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center transition-all duration-500 hover:scale-110"
                    data-aos="zoom-in"
                    data-aos-delay={450 + index * 100}
                  >
                    <div className="text-3xl font-bold text-[#7f1d1d] mb-1 transition-all duration-300 hover:text-red-600">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for custom animations */}
      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
