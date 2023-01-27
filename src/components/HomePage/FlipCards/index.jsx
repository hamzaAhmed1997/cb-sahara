import { imageResolver } from "@/utils/helpers";
import React from "react";
 

const FlipCards = ({data }) => { 
  return (
    <div className="w-full my-[30px]">
      <div className=" max-w-[1140px] w-full mx-auto px-4" data-aos="fade-right"
         data-aos-duration="3000">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3"
        >
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <div class="flip-cards mx-auto w-[359px] h-[280px]">
                  <div class="flip-cards-inner ">
                    <div class="flip-cards-front mb-[20px]">
                      <img src={imageResolver(item?.facilityimg).path} alt=""className="w-[139px] h-[139px]" />
                    </div>
                    <div class="flip-cards-back text-center p-[35px] flex flex-col justify-center bg-[#6A0000] text-[#ffff]">
                      <h2 className="mb-[20px] text-[21px] font-bold leading-[1.2] ">{item?.facilityheading}</h2>
                      <p className="text-[14px]"> {item.facilitydescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
