import React from "react";
import ModalImage from "react-modal-image";

const PhotoGallery = () => {
  const images = [
    { src: "/Gallery/1.png", alt: "Image 1" },
    { src: "/Gallery/2.png", alt: "Image 2" },
    { src: "/Gallery/3.png", alt: "Image 3" },
    { src: "/Gallery/4.png", alt: "Image 4" },
    { src: "/Gallery/5.png", alt: "Image 5" },
    { src: "/Gallery/6.png", alt: "Image 6" },
    { src: "/Gallery/7.png", alt: "Image 7" },
    { src: "/Gallery/8.png", alt: "Image 8" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mt-20 mb-10">Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card">
              <ModalImage
                small={image.src} // Thumbnail
                large={image.src} // Full-size image
                alt={image.alt}
                className="card-img-top card-img-top-New"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
