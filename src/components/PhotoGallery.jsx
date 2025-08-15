import { Carousel } from "flowbite-react";
import { useState } from "react";
import photogallery from "../data/photogallery.json";

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-[#010101] py-14 text-center">
      <h1 className="font-cinzel text-4xl mt-9 mb-4">PHOTO GALLERY</h1>

      <div className="mx-auto max-w-4xl">
        <Carousel
          slideInterval={5000}
          onSlideChange={(index) => setCurrentIndex(index)}
          className="aspect-[16/9] relative overflow-hidden p-10"
        >
          {photogallery.map((photo) => (
            <div key={photo.id} className="relative w-full h-full">
              <img
                src={photo.img}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <img
                src={photo.img}
                alt={photo.alt}
                className="relative z-10 object-contain w-full h-full"
              />
            </div>
          ))}
        </Carousel>

        <div className="flex justify-center gap-2 mt-6 overflow-x-auto px-4">
          {photogallery.map((photo, index) => (
            <img
              key={photo.id}
              src={photo.img}
              alt={photo.alt}
              onClick={() => setCurrentIndex(index)}
              className={`
              h-16 w-24 object-cover cursor-pointer 
              border-2 rounded-lg transition-all duration-200 
              hover:scale-105 hover:brightness-110
              ${
                currentIndex === index
                  ? "border-white-500"
                  : "border-gray-700 opacity-70"
              }
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
