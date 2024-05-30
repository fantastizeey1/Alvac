import React, { useState, useEffect } from "react";

const testimonials = [
  {
    className: "one",
    imgSrc: "/mission_statement.png",
    imgAlt: "Mission Statement",
    title: "Our Mission",
    text: "We offer secured, competitive cash logistics anchored on sound process, driven by cutting-edge technology and competent team.",
  },
  {
    className: "two",
    imgSrc: "/download.jpg",
    imgAlt: "Vision Statement",
    title: "Our Vision",
    text: "To be the recognized leader and the most preferred in the provision of integrated cash management solution in Sub-Sahara Africa.",
  },
  {
    className: "three",
    imgSrc: "/sellingpoint.jpg",
    imgAlt: "Unique Selling Points",
    title: "Our Unique Selling Points",
    text: "Track record of success in the Cash In Transit sector. Strong technically competent team. Focus & timely execution of services.",
  },
  {
    className: "four",
    imgSrc: "/Ourvalues.png",
    imgAlt: "Values Statement",
    title: "Our Values",
    text: "Customer Service: Delivering timely and satisfactory services to our clients. Learning and Development: Consistently improving to drive innovation. Integrity: Our words and our actions align. Quality: Providing world class products and services. Professionalism: We are bound by the ethics of our profession.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-4 max-w-[100%] bg-blue-50">
      <div className="">
        <div className="md:w-[80%] w-full mx-auto p-2 mb-6">
          <h3 className="md:text-[20px] text-[15px] text-center">
            “Here in Alvac we help to take your CIT lead generation to the next
            level. We have several objectives: shortening the time it took us to
            get cash movement to clients, improving the quality of the leads by
            arming sales with more intelligence about the leads, establishing
            reporting and measurement and expanding our lead generating efforts.
            Alvac has a wealth of knowledge in the field of CIT lead generation
            and management and knows how to apply that knowledge in a practical
            and results-oriented way.”
          </h3>
        </div>

        <div className="relative w-[80%] mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-row ${
                testimonial.className
              } gap-5 items-center justify-start p-10 bg-white rounded-lg mb-3 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } flex justify-center md:flex-row flex-col items-center gap-2`}
              style={{ display: index === currentIndex ? "flex" : "none" }}
            >
              <div className="">
                <img
                  className="max-w-[125px] max-h-[85px]"
                  src={testimonial.imgSrc}
                  alt={testimonial.imgAlt}
                />
              </div>

              <div className="flex flex-col">
                <h3 className="md:text-[20px] text-[18px] text-center md:text-left mb-2">
                  {testimonial.title}
                </h3>
                <p className="text-[12px] text-center md:text-left">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}

          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-2 w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
