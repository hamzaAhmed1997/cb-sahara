import { imageResolver } from "@/utils/helpers";
import React from "react";

const FlipImages = ({data}) => {
  return (
    <div className="w-full my-[40px]">
      <div className=" max-w-[1140px] w-full mx-auto px-4">
        <div className="grid w-full grid-cols-1 gap-4 mx-auto sm:grid-cols-3 lg:grid-cols-6">
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <div class="flip-card w-[139px] h-[139px] mx-auto">
                  <div class="flip-card-inner relative w-full h-full ">
                    <div class="flip-card-front absolute">
                      <img src={imageResolver(item.beforeflip)?.path} alt="Avatar" loading="lazy"/>
                    </div>
                    <div class="flip-card-back absolute">
                    <img src={imageResolver(item.afterflip)?.path} alt="Avatar" loading="lazy" />
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

export default FlipImages;
