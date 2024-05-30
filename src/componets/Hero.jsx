import React, { useState, useEffect } from "react";

const slides = [
  { src: "/V+RArchitectsInc.png", alt: "V+R Architects, Inc." },
  { src: "/FREIGHTS.png", alt: "Freight S" },
  { src: "/EXECUTIVEPROTECION.png", alt: "Executive Protection" },
  { src: "/bss.png", alt: "BSS" },
  { src: "/atmm.png", alt: "ATMM" },
  { src: "/cash.png", alt: "Cash" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]);

  return (
    <div className="max-w-[100%] mx-auto overflow-hidden py-2 md:px-5 md:py-5">
      <div className="relative">
        <div className="relative overflow-hidden h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-contain md:object-cover"
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center mb-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                index === currentSlide ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full bg-gray-200 p-1 sm:p-2"
        >
          <img
            src="/previous.png"
            alt="Previous"
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full bg-gray-200 p-1 sm:p-2"
        >
          <img
            src="/forward.png"
            alt="Next"
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;
