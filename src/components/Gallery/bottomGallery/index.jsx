import React, { useState } from 'react'
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { imageResolver } from "@/utils/helpers";


const index = ({data}) => {
    const images = data?.multipleimage.map((img, index) => ({
    title: `${index + 1}`,
    caption: `Image ${index + 1}`,
    url: imageResolver(img.image).path
  }));
    const [isOpen, setIsOpen] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

  return (
    <>
      {isOpen && (
        <Lightbox
          imageTitle={images[imgIndex].title}
          imageCaption={images[imgIndex].caption}
          mainSrc={images[imgIndex].url}
          nextSrc={images[(imgIndex + 1) % images.length].url}
          prevSrc={images[(imgIndex + images.length - 1) % images.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setImgIndex((imgIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setImgIndex((imgIndex + 1) % images.length)}
        />
      )}

<section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <button className="" onClick={() => setIsOpen(true)}>
            <div className="flex flex-wrap -m-1 md:-m-2">
              {data?.multipleimage.map(
                (image, index) => {
                  if (index % 3 === 0) {
                    return (
                      <div className="flex flex-wrap w-1/2">
                        {data?.multipleimage
                          .slice(index, index + 3)
                          .map((img, i) =>
                            img?.image?.data !== null && (
                              <div
                                key={i}
                                className={`w-${i % 3 === 2 ? 'full' : '1/2'} p-2 md:p-2`}
                              >
                                <img
                                  alt="gallery"
                                  loading="lazy"
                                  className="block object-cover object-center w-full h-full rounded-lg"
                                  src={imageResolver(img.image).path}
                                />
                              </div>
                            )
                          )}
                      </div>
                    );
                  }
                  return null;
                }
              )}
            </div>
          </button>
        </div>
      </section>
    </>

  )
}

export default index