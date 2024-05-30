import React from "react";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row  max-w-[100%] gap-4 justify-center md:justify-evenly items-center mb-20">
      <div className=" w-full md:w-[48%] bg-[url('/Gemi-lag.jpg')] bg-cover h-[300px]  md:h-[700px] mt-2 relative">
        <div className="absolute inset-0 bg-white opacity-60"></div>
        <div className="absolute inset-0 flex justify-center items-center flex-col md:p-28 text-white p-5 z-10">
          <h2 className="md:text-[50px] text-[30px] mb-2 text-gray-950 md:mb-9">
            Who we are
          </h2>
          <p className="md:text-[20px] text-[14px] text-gray-950 md:mb-9 text-center">
            Alvac Company Limited (Alvac) was established in Nigeria on June 24,
            2002, with a vision to revolutionize Cash In Transit (CIT) services
            in the country. After securing all necessary regulatory approvals,
            we proudly commenced full operations in August 2004. Since then, we
            have been dedicated to providing secure, reliable, and efficient
            cash logistics solutions, earning the trust and satisfaction of our
            clients across Nigeria.
          </p>
        </div>
      </div>
      <div id="Contact" className="w-full md:w-[48%] p-4">
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
          Contact
        </h1>
        <form
          action="https://formspree.io/f/xdoqvywq"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols gap-4 w-full py-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="uppercase text-sm py-2">
                name
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="phone number" className="uppercase text-sm py-2">
                Phone
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="mail" className="uppercase text-sm py-2">
                Email
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="email"
                name="Mail"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="Subject" className="uppercase text-sm py-2">
                Subject
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="Subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="Message" className="uppercase text-sm py-2">
                Message
              </label>
              <textarea
                className="border-2 rounded-lg p-3 flex border-gray-300"
                name="Message"
                id=""
                cols="5"
                rows="5"
              ></textarea>
            </div>
            <button className="bg-[#001b5e] text-gray-100 mt-4 w-1/2 p-4">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
