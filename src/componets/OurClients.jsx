import React, { useState, useEffect } from "react";

const clientSlides = [
  { src: "/gtbank.jpg", alt: "GTBank" },
  { src: "/Access-Bank-Logo.png", alt: "Access Bank" },
  { src: "/fcmb.png", alt: "FCMB" },
  { src: "/polaris.png", alt: "Polaris Bank" },
  { src: "/stanbicbank.png", alt: "Stanbic IBTC Bank" },
  { src: "/sterling.png", alt: "Sterling Bank" },
  { src: "/zenith.png", alt: "Zenith Bank" },
  { src: "/firstbank.png", alt: "First Bank" },
  { src: "/wemabank.png", alt: "Wema Bank" },
  { src: "/HERITAGE-BANK.png", alt: "Heritage Bank" },
  { src: "/standardchartered_logo.png", alt: "Standard Chartered Bank" },
  { src: "/fidelity.png", alt: "Fidelity Bank" },
];

const OurClients = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + 3 >= clientSlides.length ? 0 : prevSlide + 3
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? clientSlides.length - 3 : prevSlide - 3
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" max-w-[100%] rounded-lg text-center p-[2em]">
      <div className="container ">
        <div>
          <h2 className="text-[50px] uppercase">Our Clients</h2>
          <p className="text-[20px] text-gray-700 mb-4">
            Some of our clients include
          </p>
        </div>
        <div className="relative overflow-hidden w-9/12 justify-center flex mx-auto bg-blue-50 rounded-lg p-2">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
          >
            {clientSlides.map((slide, index) => (
              <div key={index} className="flex-none w-1/3 p-2">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          {Array.from({ length: Math.ceil(clientSlides.length / 3) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 3)}
                className={`mx-2 w-3 h-3 rounded-full ${
                  index * 3 === currentSlide ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></button>
            )
          )}
        </div> */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full bg-gray-200 p-2"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full bg-gray-200 p-2"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
        </button>
      </div>
    </section>
  );
};

export default OurClients;
