import React,{useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herogallery from '@/src/components/Gallery/Herogallery'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { imageResolver } from '@/utils/helpers';





const index = ({data}) => {
  const gallerydata = 
[
  {
    image: (imageResolver(data?.galleryimgslider[0]?.image).path),
  },
  {
    image: (imageResolver(data?.galleryimgslider[1]?.image).path),
  },
  {
    image: (imageResolver(data?.galleryimgslider[2]?.image).path),
  },
  {
    image: (imageResolver(data?.galleryimgslider[3]?.image).path),
  },
  {
    image: (imageResolver(data?.galleryimgslider[4]?.image).path),
  },
  {
    image: (imageResolver(data?.galleryimgslider[5]?.image).path),
  },
  {
    image: (imageResolver(data?.galleryimgslider[6]?.image).path),
  },
  {
    image: (imageResolver(data?.galleryimgslider[7]?.image).path),
  },
  {
    image: (imageResolver(data?.galleryimgslider[8]?.image).path),
  },
  {
    image: (imageResolver(data?.galleryimgslider[9]?.image).path),
  },
  
];

const images = [
  { title: "1", caption: "Image 1", url: (imageResolver(data?.galleryimg[0]?.image).path), },
  { title: "2", caption: "Image 2", url: (imageResolver(data?.galleryimg[1]?.image).path), },
  { title: "3", caption: "Image 3", url: (imageResolver(data?.galleryimg[2]?.image).path), },
  { title: "4", caption: "Image 4", url: (imageResolver(data?.galleryimg[3]?.image).path), },
  { title: "5", caption: "Image 5", url: (imageResolver(data?.galleryimg[4]?.image).path), },
  { title: "6", caption: "Image 6", url: (imageResolver(data?.galleryimg[5]?.image).path), },
  { title: "7", caption: "Image 7", url: (imageResolver(data?.galleryimg[6]?.image).path), },
  { title: "8", caption: "Image 8", url: (imageResolver(data?.galleryimg[7]?.image).path), }, 
  { title: "9", caption: "Image 9", url: (imageResolver(data?.galleryimg[8]?.image).path), },
  { title: "10", caption: "Image 10", url: (imageResolver(data?.galleryimg[9]?.image).path), },
  { title: "11", caption: "Image 11", url: (imageResolver(data?.galleryimg[10]?.image).path), },
  { title: "12", caption: "Image 12", url: (imageResolver(data?.galleryimg[11]?.image).path), },

];

const images1 = [
  { title1: "1", caption: "Image 1", url: (imageResolver(data?.multipleimage[0]?.image).path),  },
  { title1: "2", caption: "Image 2", url: (imageResolver(data?.multipleimage[1]?.image).path),  },
  { title1: "3", caption: "Image 3", url: (imageResolver(data?.multipleimage[2]?.image).path),  },
  { title1: "4", caption: "Image 4", url: (imageResolver(data?.multipleimage[3]?.image).path),  },
  { title1: "5", caption: "Image 5", url: (imageResolver(data?.multipleimage[4]?.image).path),  },
  { title1: "6", caption: "Image 6", url: (imageResolver(data?.multipleimage[5]?.image).path),  },
  { title1: "7", caption: "Image 7", url: (imageResolver(data?.multipleimage[6]?.image).path),  },
  { title1: "8", caption: "Image 8", url: (imageResolver(data?.multipleimage[7]?.image).path),  }, 
  { title1: "9", caption: "Image 9", url: (imageResolver(data?.multipleimage[8]?.image).path),  },
  { title1: "10", caption: "Image 10", url: (imageResolver(data?.multipleimage[9]?.image).path),  },
  { title1: "11", caption: "Image 11", url: (imageResolver(data?.multipleimage[10]?.image).path),  },
  { title1: "12", caption: "Image 12", url: (imageResolver(data?.multipleimage[11]?.image).path),  },

];
  console.log("multiple images", data)
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
    <Herogallery data={data?.herogallery}/>
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
                {
                  data?.galleryimg[0]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[0]?.image).path}
                />
                   )
                }
              </div>
              
              
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.galleryimg[1]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[1]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-full p-1 md:p-2">
              {
                  data?.galleryimg[2]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[2]?.image).path}
                />
                   )
                }
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
              {
                  data?.galleryimg[3]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[3]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.galleryimg[4]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[4]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.galleryimg[5]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[5]?.image).path}
                />
                   )
                }
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.galleryimg[6]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[6]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.galleryimg[7]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[7]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-full p-1 md:p-2">
              {
                  data?.galleryimg[8]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[8]?.image).path}
                />
                   )
                }
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
              {
                  data?.galleryimg[9]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[9]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.galleryimg[10]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[10]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.galleryimg[11]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.galleryimg[11]?.image).path}
                />
                   )
                }
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
              {
                  data?.multipleimage[0]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[0]?.image).path}
                />
                   )
                }
              </div>
              
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.multipleimage[1]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[1]?.image).path}
                />
                   )
                }
              </div>
              
              <div className="w-full p-1 md:p-2">
              {
                  data?.multipleimage[2]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[2]?.image).path}
                />
                   )
                }
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
              {
                  data?.multipleimage[3]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[3]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.multipleimage[4]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[4]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.multipleimage[5]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[5]?.image).path}
                />
                   )
                }
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.multipleimage[6]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[6]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.multipleimage[7]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[7]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-full p-1 md:p-2">
              {
                  data?.multipleimage[8]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[8]?.image).path}
                />
                   )
                }
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
              {
                  data?.multipleimage[9]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[9]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.multipleimage[10]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[10]?.image).path}
                />
                   )
                }
              </div>
              <div className="w-1/2 p-1 md:p-2">
              {
                  data?.multipleimage[11]?.image?.data !==null && (
                    <img
                  alt="gallery"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imageResolver(data?.multipleimage[11]?.image).path}
                />
                   )
                }
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
