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

const HomePage = () => {
  const order = 1;
  return (
    <div>
      <HomeHero />
      <ServicesCards />
      <FlipImages/>
      <SaharaMarket />
      <FlipCards/>
      <ImageSlider />
      <HomeFoodSection order={order} />
      <HomeSingleSlider />
      <SaharaMarket order={order} />
      <HomeFoodSection order={order} />
      <HomeSingleSlider />
      <HomeFoodSection />
      <HomeFoodSection order={order} />
      <HomeSingleSlider />
      <Testimonial />
    </div>
  );
};

export default HomePage;
