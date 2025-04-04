import React, { useState } from "react";
import "./styles.css";
import featuredHouse1 from "../public/images/image.jpg";
import featuredHouse2 from "../public/images/real-estate-for-rent-rented.png";
import featuredHouse3 from "../public/images/wallpaperflare.com_wallpaper.jpg";
import featuredHouse4 from "../public/images/image2.jpg";
import featuredHouse5 from "../public/images/Nigerian-House-Plan-Designs.jpg";

const properties = [
  {
    id: 1,
    name: "Luxury Apartment",
    price: "NGN500,000",
    location: "14 Shubomi street, Surulere, Lagos",
    availability: "2 Flats available",
    image: featuredHouse1,
  },
  {
    id: 2,
    name: "Modern Duplex",
    price: "NGN700,000",
    location: "13 Adeniran Ogunsanya street, Surulere, Lagos",
    availability: "1 Flat available",
    image: featuredHouse2,
  },
  {
    id: 3,
    name: "Green Residence",
    price: "NGN700,000",
    location: "14 Adeniran Ogunsanya street, Surulere, Lagos",
    availability: "1 Flat available",
    image: featuredHouse3,
  },
  {
    id: 4,
    name: "Green Residence",
    price: "NGN700,000",
    location: "14 Adeniran Ogunsanya street, Surulere, Lagos",
    availability: "1 Flat available",
    image: featuredHouse4,
  },
  {
    id: 5,
    name: "Green Residence",
    price: "NGN700,000",
    location: "14 Adeniran Ogunsanya street, Surulere, Lagos",
    availability: "1 Flat available",
    image: featuredHouse5,
  },
];

const FeaturedProperties = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="featured-properties">
      <h2>Featured Properties</h2>
      <div className="properties-container">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={property.image}
              alt={property.name}
              className="property-image"
            />
            <div className="property-details">
              <h3>{property.price}</h3>
              <p>{property.location}</p>
              <p>{property.availability}</p>
              <button
                className={`favorite-btn ${
                  favorites.includes(property.id) ? "saved" : ""
                }`}
                onClick={() => toggleFavorite(property.id)}
              >
                {favorites.includes(property.id) ? "★ Saved" : "☆ Save"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
