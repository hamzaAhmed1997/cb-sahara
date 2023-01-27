import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { imageResolver } from "@/utils/helpers";


const HomeFoodSection = ({ order,position, data}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full my-[100px]">
      
      <div className=" max-w-[1140px] w-full mx-auto px-4">
        <div className="grid md:grid-cols-3">
          <div
            className={` sm:p-[15px] md:col-span-2 ${
              order == 1 ? "order-2": "order-1"
            }`}

          >
            <h2 className=" text-[36px] text-center border-b-[3px] text-[#6A0000] pb-2 border-[#FFB400]  font-bold leading-[1.2] mb-[16px] ">
              {data?.title}
            </h2>
            <p className="text-[#6A0000] text-[17px] font-400 leading-[2em] md:p-[10px] ">
              {data?.description}
            </p>
          </div>
          <div
            className={`py-[30px] px-[10px] w-full flex justify-center  ${
              order == 1 ? "order-1": "order-2" 
            }`}
            
          >
            <img
              src={imageResolver(data?.image).path}
              alt="food image"
              className="shadow"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFoodSection;
