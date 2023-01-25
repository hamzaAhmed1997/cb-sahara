import React from "react";
import Link from "next/link";

const CardItem = ({ title, image }) => {
  return (
    <div className=" container relative p-[10px] w-[300px] h-[300px] mx-auto">
      <div className=" text-center">
        <img
          src={image}
          className="h-full w-full block"
          loading="lazy"
          alt="services cards"
        />
        <div class="overlay h-[305px] m-[10px] absolute top-0 left-0 right-0 bottom-0 bg-[#6A0000] opacity-0  hover:opacity-90">
          <div class="text absolute top-[50%] left-[50%] ">
            <h2 className="text-[#FFB400] font-bold leading-[1] text-[24px]">{title}</h2>
            <Link href={`#`}>
          <button className="mt-[20px] text-[#6A0000] bg-[#FFB400] transition text-center text-[16px]  font-bold leading-[1] py-[15px] px-[30px] rounded">
            {title}
          </button>
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;