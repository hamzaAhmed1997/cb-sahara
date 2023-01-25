import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herogallery from '@/src/components/Gallery/Herogallery'
const gallerydata = 
[
  {
    image: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0188.jpg",
  },
  {
    image: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0190.jpg",
  },
  {
    image: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0191.jpg",
  },
  {
    image: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0194.jpg",
  },
  {
    image: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0198.jpg",
  },
  {
    image: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0200.jpg",
  },
  {
    image: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0202.jpg",
  },
  {
    image: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0204.jpg",
  },
  {
    image: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0205.jpg",
  },
  {
    image: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0207.jpg",
  },
  
];

const index = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      };
  return (
    <div className="pt-16">
    <Herogallery/>
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
                
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0119.jpg"
                />
              </div>
              
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0121.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0129.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0141.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0148.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0149.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0156.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0161.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0162.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0165.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0186.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0149.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[20px] mb-[10px]  sm:mt-[40px] sm:mb-[30px] md:mt-[70px]">
    <div className=" py-[60px] bg-[#FFC648]">
      <div className='max-w-[1090px] mx-auto cursor-grabbing'>
      <Slider {...settings} >
        {gallerydata.map((item, index) => {
          return (
           <div key={index} className="max-w-[360px] px-2 ">
            <img  src={item.image} className=" max-w-[100%] mx-auto" loading='lazy' alt='Image slider'></img>
           </div>
          );
        })}
      </Slider>
      </div>
    </div>
  </div>

  <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
                
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0230.jpg"
                />
              </div>
              
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0234.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0235.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0238.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0246.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0247.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0250.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0253.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0256.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0258.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0268.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://saharamkt.com/wp-content/uploads/2020/04/IMG_0289.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default index;
