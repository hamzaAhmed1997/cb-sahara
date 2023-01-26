import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herogallery from '@/src/components/Gallery/Herogallery'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { adminPath } from '@/utils/constants';
import { imageResolver } from '@/utils/helpers';

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
const images = [
  { title: "1", caption: "Image 1", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0119.jpg" },
  { title: "2", caption: "Image 2", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0121.jpg" },
  { title: "3", caption: "Image 3", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0141.jpg" },
  { title: "4", caption: "Image 4", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0148.jpg" },
  { title: "5", caption: "Image 5", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0149.jpg" },
  { title: "6", caption: "Image 6", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0156.jpg" },
  { title: "7", caption: "Image 7", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0161.jpg" },
  { title: "8", caption: "Image 8", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0162.jpg" }, 
  { title: "9", caption: "Image 9", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0165.jpg" },
  { title: "10", caption: "Image 10", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0186.jpg" },
  { title: "11", caption: "Image 11", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0149.jpg" },
  { title: "12", caption: "Image 12", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0141.jpg" },

];

const images1 = [
  { title1: "1", caption: "Image 1", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0230.jpg" },
  { title1: "2", caption: "Image 2", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0234.jpg" },
  { title1: "3", caption: "Image 3", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0235.jpg" },
  { title1: "4", caption: "Image 4", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0238.jpg" },
  { title1: "5", caption: "Image 5", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0246.jpg" },
  { title1: "6", caption: "Image 6", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0247.jpg" },
  { title1: "7", caption: "Image 7", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0250.jpg" },
  { title1: "8", caption: "Image 8", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0253.jpg" }, 
  { title1: "9", caption: "Image 9", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0256.jpg" },
  { title1: "10", caption: "Image 10", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0258.jpg" },
  { title1: "11", caption: "Image 11", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0268.jpg" },
  { title1: "12", caption: "Image 12", url: "https://saharamkt.com/wp-content/uploads/2020/04/IMG_0289.jpg" },

];
const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenm, setIsOpenm] = useState(false);

  const [imgIndex, setImgIndex] = useState(0);
  const [imgIndex1, setImgIndex1] = useState(0);


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
      {isOpen && <Lightbox
        imageTitle={images[imgIndex].title}
        imageCaption={images[imgIndex].caption}
        mainSrc={images[imgIndex].url}
        nextSrc={images[(imgIndex + 1) % images.length].url}
        prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setImgIndex((imgIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
      />}

   {isOpenm && <Lightbox
        imageTitle={images1[imgIndex1].title1}
        imageCaption={images1[imgIndex1].caption}
        mainSrc={images1[imgIndex1].url}
        nextSrc={images1[(imgIndex1 + 1) % images1.length].url}
        prevSrc={images1[(imgIndex1 + images1.length - 1) % images1.length].url}
        onCloseRequest={() => setIsOpenm(false)}
        onMovePrevRequest={() => setImgIndex1((imgIndex1 + images1.length - 1) % images1.length)}
        onMoveNextRequest={() => setImgIndex1((imgIndex1 + 1) % images1.length)}
      />}

      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <button className="" onClick={() => setIsOpen(true)}>
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
          </button>
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
        <button onClick={() => setIsOpenm(true)}>
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
          </button>
        </div>
      </section>
      

    </div>
  );
};

export default index;
