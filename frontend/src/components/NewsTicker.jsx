import React from "react";

const customStyles = `
  @keyframes tickerScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .ticker-container {
    width: 100%;
    height: 32px; /* Decreased from 40px */
    overflow: hidden;
    position: relative;
    background: #7f1d1d;  /* Changed from #0d173b to #7f1d1d */
  }

  .ticker-wrapper {
    display: flex;
    width: max-content;
    animation: tickerScroll 30s linear infinite;
    gap: 2rem;
  }

  .ticker-wrapper:hover {
    animation-play-state: paused;
  }

  @media (min-width: 768px) {
    .ticker-container {
      height: 35px; /* Decreased from 48px */
    }
  }
`;

const NewsTicker = () => {
  const newsItems = [
    "Admissions Open for Session 2025-26",
    "We are now accepting applications for our distinguished Engineering and Pharmacy programs",
    "Join an institution renowned for academic excellence, cutting-edge research, and state-of-the-art facilities",
  ];

  // Double the items array to ensure seamless loop
  const duplicatedItems = [...newsItems, ...newsItems];

  return (
    <div className="bg-[#7f1d1d] text-white">
      <style>{customStyles}</style>
      <div className="ticker-container">
        <div className="ticker-wrapper flex items-center text-sm md:text-base">
          {/* First copy of items */}
          {duplicatedItems.map((item, index) => (
            <span
              key={`first-${index}`}
              className="px-7 whitespace-nowrap after:content-[''] after:ml-4 after:opacity-50"
            >
              {item}
            </span>
          ))}
          {/* Second copy for seamless loop */}
          {duplicatedItems.map((item, index) => (
            <span
              key={`second-${index}`}
              className="px-7 whitespace-nowrap after:content-[''] after:ml-4 after:opacity-50"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
