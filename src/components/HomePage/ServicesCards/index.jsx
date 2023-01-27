import React from "react";
import CardItem from "./CardItem";



const ServicesCards = ({data}) => {
  return (
    <div className="w-full " id="onlineOrder">
     <div className="py-[80px] max-w-[1300px] mx-auto px-4">
     <div className="mb-[50px]">
        <p className="text-center text-[#FFB400] text-[40px] font-bold leading-[1]  ">
          {data?.orderHeading}
        </p>
        <h2 className="text-center pb-2 text-[#FFB400] text-[25px] sm:text-[30px] leading-[1.2] mt-[8px] mb-[16px] ">
        {data?.orderDescription}
        </h2>
      </div>
      <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2"
      data-aos="fade-left"
      data-aos-duration="3000">
        {data?.orderCard?.map((item, index) => {
          return (
            <div key={index}>
              <CardItem title={item?.cardtext} button={item?.ctatext} link={item?.ctalink} image={item?.cardimage} />
            </div>
          );
        })}
      </div>
     </div>
    </div>
  );
};

export default ServicesCards;
