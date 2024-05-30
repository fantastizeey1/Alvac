import React from "react";

const Commitment = () => {
  return (
    <section className="bg-gray-300 max-w-[100%] p-6 rounded-lg ">
      <div className="container">
        <div className="about__content text-center mx-auto">
          <h2 className="text-blue-950 md:text-[50px] mb-3 uppercase">
            Our Commitment
          </h2>
          <p className="p-3 mb-3 font-serif text-[20px]">
            Alvac Company Limited is committed to the provision of specialized
            Cash in Transit services through safe, secured, and consistent
            service delivery. We are driven by our dedication to meeting the
            needs of our customers with integrity. Our culture of teamwork goes
            a long way in assisting us to meet our commitment to our customers.
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
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
