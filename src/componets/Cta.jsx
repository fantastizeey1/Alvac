import React from "react";

const Cta = () => {
  return (
    <section className="bg-[url('/cta-bg.png')] max-w-[100%] bg-cover w-full h-[400px] flex justify-center text-center items-center p-10  relative">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="z-50">
        <h2 className="md:text-[50px] text-[30px] text-gray-50 mb-9">
          Feel free to contact us
        </h2>
        <p className="md:text-[20px] text-[17px] text-gray-50 mb-9">
          For your bookings click the link below
        </p>
        <a style={{ "--clr": "#7808d0" }} className="button" href="#">
          <span className="button__icon-wrapper">
            <svg
              width="10"
              className="button__icon-svg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>

            <svg
              className="button__icon-svg  button__icon-svg--copy"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              fill="none"
              viewBox="0 0 14 15"
            >
              <path
                fill="currentColor"
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              ></path>
            </svg>
          </span>
          Contact us Now
        </a>
      </div>
    </section>
  );
};

export default Cta;
