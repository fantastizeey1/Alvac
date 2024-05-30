import React from "react";

const Workstation = () => {
  return (
    <section className="p-3 mx-[20px] max-w-[100%] lg:mx-[80px]">
      <h2 className="text-center text-[50px] uppercase">Our Services</h2>
      <div className="flex flex-1 flex-row gap-3 flex-wrap">
        <div className="card">
          <h2 className="card-title text-blue-900 text-center">
            Cash Movement
          </h2>
          <p className="small-desc text-center">
            We manage all logistics and risks involved in both intra and
            inter-state cash movement via road. Let us worry about your cash
            handling and safety while you focus on your business.
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
        <div className="card">
          <h2 className="card-title text-blue-900 text-center">
            Air Freight Movement
          </h2>
          <p className="small-desc text-center">
            We manage all the logistics and risks involved in inter-state cash
            movement via the airways known as End-to-End Service. Let us take
            the burden off you while you take care of your core business.
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
        <div className="card">
          <h2 className="card-title text-blue-900 text-center">
            Security Services
          </h2>
          <p className="small-desc text-center">
            We are experts in the deployment of security services to the
            nation’s financial institutions and corporate entities, a
            collaborative service with the Nigerian Police Force. We provide
            professional security services.
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
        <div className="card">
          <h2 className="card-title text-blue-900 text-center">ATM Services</h2>
          <p className="small-desc text-center">
            We manage all the logistics and risks involved in Automated Teller
            Machine (ATM) cash loading. We take care of your ATM cash loading to
            promote the smooth running of your business.
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
        <div className="card">
          <h2 className="card-title text-blue-900 text-center">
            Private Cars and Bullion Vans Hire
          </h2>
          <p className="small-desc text-center">
            We offer the best combination of prices & services for renting a
            private car and bullion van in Nigeria. Our prices are very
            affordable. We provide more than just a car!
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
        <div className="card">
          <h2 className="card-title text-blue-900 text-center">
            Executive Protections & Security Services
          </h2>
          <p className="small-desc text-center">
            We are a specialist security service dedicated to mitigating
            potential threats, regardless of type, at the earliest moment and
            lowest denominator possible.
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workstation;
