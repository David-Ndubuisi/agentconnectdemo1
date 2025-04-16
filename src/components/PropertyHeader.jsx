import { useState } from "react";
function PropertyHeader({ property }) {
  const [current, setCurrent] = useState(0);

  // Dynamically pull available image keys
  const images = [property.image, property.image2, property.image3].filter(
    Boolean
  );

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="property-header">
      <div className="carousel">
        <div className="carousel-image-wrapper" key={current}>
          <img
            src={images[current]}
            alt={`${property.name} ${current + 1}`}
            className="property-main-image"
          />
        </div>

        {images.length > 1 && (
          <>
            <button className="prev" onClick={prevSlide}>
              ‹
            </button>
            <button className="next" onClick={nextSlide}>
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PropertyHeader;
