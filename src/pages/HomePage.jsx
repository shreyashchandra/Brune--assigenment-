import Accordian from "../components/Accordian";
import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export const HomePage = () => {
  return (
    <div className="p-2 ">
      <Navbar />
      <div className="w-96 m-auto md:w-full">
        <HeroSection />
      </div>
      <Accordian />
      <Footer />
    </div>
  );
};
