import React from "react";
import Link from "next/link";
import Slider from "react-slick";
const myData = [
  {
    img: "images/HomeHero.jpg",
    headline: "HAND SLAUGHTERED",
    pragraph:
      "Organizing real estate investment opportunities for private investors for over 30 years.",
  },
  {
    img: "images/HomeHero.jpg",
    headline: "SHOP ALL YOU NEED",
    pragraph:
      "Organizing real estate investment opportunities for private investors for over 30 years.",
  },
  {
    img: "images/HomeHero.jpg",
    headline: "Quality performance is the way to success",
    pragraph:
      "Organizing real estate investment opportunities for private investors for over 30 years.",
  },
];

export default function HomeHero() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div className="">
      <Slider {...settings}>
        {myData.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="text-center "
                style={{
                  background: `url(${item.img}) no-repeat center center/cover`,
                }}
              >
                <div className="bg-gradient-to-r from-[#353232b0] py-[300px]">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    className="max-w-[950px] mx-auto px-4 "
                  >
                    <h2 className="text-[20px] text-[#ffffff] font-normal uppercase underline mb-[30px] ">
                      {item.headline}
                    </h2>
                    <p className="mb-[30px] text-[30px] leading-[42px]  font-[600] text-[#ffb400] ">
                      {item.pragraph}
                    </p>
                    <Link href={``} legacyBehavior>
                      <a href={``}>
                        <button className="text-[18px] leading-[18px] font-[400] text-[#ffb400] hover:text-white py-3 px-6 border-[2px] transition border-[#ffb400] rounded hover:bg-[#ffb400] ">
                          Order Online
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
