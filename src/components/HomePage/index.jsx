import React from "react";
import SaharaMarket from "./SaharaMarket";
import ImageSlider from "./ImageSlider";
import HomeFoodSection from "../Common/HomeFoodSection";
import HomeSingleSlider from "../Common/HomeSingleSlider";
import Testimonial from "./Testominial";
import ServicesCards from "./ServicesCards";
import HomeHero from "./HomeHero";
import FlipImages from "./FlipImages";
import FlipCards from "./FlipCards";
import ContactForm from "../ContactPage/ContactForm";
import ContactMap from "./ContactMap";

const HomePage = () => {
  const order = 1;
  const position="1"
  return (
    <div>
      <HomeHero />
      <ServicesCards />
      <FlipImages/>
      <SaharaMarket />
      <FlipCards/>
      <ImageSlider />
      <HomeFoodSection order={order} position={position} />
      <HomeSingleSlider />
      <SaharaMarket/>
      <HomeFoodSection />
      <HomeSingleSlider />
      <HomeFoodSection />
      <HomeFoodSection order={order} />
      <HomeSingleSlider />
      <Testimonial />
      <ContactForm/>
      <ContactMap/>
    </div>
  );
};

export default HomePage;
