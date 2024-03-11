import { React } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Tokenomics from "./components/Tokenomics";
import RoadMap from "./components/RoadMap";
import OurTeam from "./components/OurTeam";
import Faq from "./components/Faq";
import BrandLogo from "./components/BrandLogo";
import SocialBar from "./components/SocialBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Benefits />
      <Tokenomics />
      <RoadMap />
      <OurTeam />
      <Faq />
      <BrandLogo />
      <SocialBar />
      <Footer />
    </>
  );
}

export default App;
