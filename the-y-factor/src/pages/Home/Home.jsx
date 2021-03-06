import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutSection from "../../components/Home/AboutSection/AboutSection";
import IntroAnim from "../../components/IntroAnim";
import BetterYou from "../../components/Home/BetterYou/BetterYou";
import Services from "../../components/Home/Services/Services";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Mission from "../../components/Home/Mission/Mission";
import Contact from "../../components/Home/Contact/Contact";
import Footer from "../../components/Home/Footer/Footer";

const Home = () => {
   return (
      <div>
         <Navbar />
         <IntroAnim />
         <AboutSection />
         <BetterYou />
         <Services />
         <Testimonials />
         <Contact />
         <Footer />
      </div>
   );
};

export default Home;
