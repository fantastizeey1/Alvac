import React from "react";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Workstation from "./componets/Workstation";
import Comitment from "./componets/Comitment";
import OurClients from "./componets/OurClients";
import Cta from "./componets/Cta";
import Testimonials from "./componets/Testimonials";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
const App = () => {
  return (
    <div className="max-w-[99vw] p-4">
      <Header />
      <Hero />
      <Workstation />
      <Comitment />
      <OurClients />
      <Testimonials />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
