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

const HomePage = ({data, contact}) => {
  const order = 1;
  const position="1"
  return (
    <div>
      <HomeHero data={data?.ourDishes}/>
      <ServicesCards data={data?.onlineOrder} />
      <FlipImages data={data?.flipImage}/>
      <SaharaMarket data={data?.welcome}/>
      <FlipCards data={data?.ourfacilities}/>
      <ImageSlider data={data?.imageslider} />
      <HomeFoodSection  order={order} position={position} />
      <HomeSingleSlider />
      <SaharaMarket order={order}/>
      <HomeFoodSection />
      <HomeSingleSlider />
      <HomeFoodSection />
      <HomeFoodSection order={order} />
      <HomeSingleSlider />
      <Testimonial data={data?.testimonials}/>
      <ContactForm data={contact}/>
      <ContactMap/>
    </div>
  );
};

export default HomePage;
