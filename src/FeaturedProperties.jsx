import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import properties from "./data/properties";

const FeaturedProperties = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  // Limit to the first 6 properties
  const featured = properties.slice(0, 6);

  return (
    <div className="featured-properties">
      <h2>Featured Properties</h2>
      <div className="properties-container">
        {featured.map((property) => (
          <div key={property.id} className="property-card">
            <img
              src={property.image}
              alt={property.name}
              className="property-image"
            />
            <div className="property-details">
              <Link
                to={`/property/${property.id}`}
                className="property-card-link"
              >
                <h3>{property.price}</h3>
                <p>{property.location}</p>
                <p>{property.availability}</p>
              </Link>
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
      <Link to="/explore">
        <button className="signup exp-btn">Explore</button>
      </Link>
    </div>
  );
};

export default FeaturedProperties;
