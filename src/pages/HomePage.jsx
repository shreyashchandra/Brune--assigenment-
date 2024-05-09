import Accordian from "../components/Accordian";
import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export const HomePage = () => {
  return (
    <div className="p-2 ">
      <Navbar />
      <HeroSection />
      <Accordian />
      <Footer />
    </div>
  );
};
