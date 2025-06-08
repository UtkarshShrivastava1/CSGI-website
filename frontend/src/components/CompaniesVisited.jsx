import { useEffect, useRef } from 'react';

const CompaniesVisited = () => {
  // References for both logo containers
  const containerRef = useRef(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  // Companies data
  const companies = [
    {
      name: "Wipro",
      logo: "https://csitdurg.in/Photos/Company-logo/Wipro_Primary_Logo_Color_RGB.svg%20(1).png"
    },
    {
      name: "Accenture",
      logo: "https://csitdurg.in/Photos/Company-logo/Accenture-logo.png"
    },
    {
      name: "Infosys",
      logo: "https://csitdurg.in/Photos/Company-logo/download-removebg-preview.png"
    },
    {
      name: "Tata Technologies",
      logo: "https://csitdurg.in/Photos/Company-logo/TATA+TECHNOLOGIES.png"
    },
    {
      name: "Wipro",
      logo: "https://csitdurg.in/Photos/Company-logo/Wipro_Primary_Logo_Color_RGB.svg%20(1).png"
    },
    {
      name: "Accenture",
      logo: "https://csitdurg.in/Photos/Company-logo/Accenture-logo.png"
    },
    {
      name: "Infosys",
      logo: "https://csitdurg.in/Photos/Company-logo/download-removebg-preview.png"
    },
    {
      name: "Tata Technologies",
      logo: "https://csitdurg.in/Photos/Company-logo/TATA+TECHNOLOGIES.png"
    }
  ];

  // Create a truly seamless animation effect
  useEffect(() => {
    let animationFrameId;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animateScroll = () => {
      if (!firstRowRef.current || !secondRowRef.current) return;

      scrollPosition += scrollSpeed;
      
      // This is the critical part for seamless scrolling:
      // When first row is completely scrolled out of view, reset position
      if (scrollPosition >= firstRowRef.current.offsetWidth) {
        scrollPosition = 0;
      }
      
      // Move both rows at the same speed and position
      firstRowRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      secondRowRef.current.style.transform = `translateX(-${scrollPosition}px)`;
      
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-white py-16 text-[#0d173b]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Companies Visited</h2>
        <div className="h-1 w-24 bg-[#0d173b] mx-auto mb-8"></div>
        <p className="text-center text-[#0d173b] mb-12 max-w-3xl mx-auto">
          Our students have been placed in leading organizations across various
          industries. Here are some of the companies that have visited our campus:
        </p>
        
        {/* Logo Carousel Container */}
        <div className="relative overflow-hidden bg-white py-8 rounded-lg shadow-lg" ref={containerRef}>
          <div className="flex" style={{ width: 'max-content' }}>
            {/* First set of logos */}
            <div className="flex" ref={firstRowRef}>
              {companies.map((company, index) => (
                <div 
                  key={`first-${index}`} 
                  className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 p-4 mx-4 min-w-40 h-28 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Second set of logos (exact duplicate positioned right after the first set) */}
            <div className="flex" ref={secondRowRef}>
              {companies.map((company, index) => (
                <div 
                  key={`second-${index}`} 
                  className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-100 p-4 mx-4 min-w-40 h-28 flex items-center justify-center"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompaniesVisited;