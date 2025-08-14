import { Carousel } from "flowbite-react";
import photogallery from "../data/photogallery.json";

export default function PhotoGallery() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <h1 className="font-cinzel text-xl">PHOTO GALLERY</h1>
      <Carousel slideInterval={5000}>
        {photogallery.map((photo) => (
          <img key={photo.id} src={photo.img} alt={photo.alt} />
        ))}
      </Carousel>
    </div>
  );
}
