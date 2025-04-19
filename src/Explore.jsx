import React, { useState } from "react";
import "./styles.css";
import properties from "./data/properties";

function Explore() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };
  return (
    <div>
      <div className="search-bar-wrapper">
        <div className="search-bar-container">
          <div className="search-input-group-flex">
            <div className="search-input-group">
              <input type="text" placeholder="Search preferred location" />
              <i className="bx bx-search search-icon"></i>
            </div>

            <div className="search-options">
              <select>
                <option>Rental type</option>
                <option>Self-contain</option>
                <option>1 Bedroom</option>
                <option>2 Bedroom</option>
              </select>
            </div>
          </div>

          <button className="filter-button">
            <i className="bx bx-filter-alt"></i>
          </button>
        </div>
      </div>
      <div className="featured-properties">
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
        <button className="signup exp-btn">View More</button>
      </div>

      <div className="featured-properties">
        <h2>Popular Locations near Surulere</h2>
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
      <div className="neighborhood-section">
        <h2>Know your Neighborhood</h2>
        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h4>Markets near Surulere</h4>
            <p>
              There are 2 local markets in Surulere, including a food market
              called Ijesha market, Yaba market and Tejuosho...
            </p>
            <a href="#">Know more</a>
          </div>

          <div className="neighborhood-card">
            <h4>Parks, Gyms, malls, Tourists attractions</h4>
            <p>
              There are several parks, malls and tourists attractions in
              Surulere. Some people consider it the heart of Lagos...
            </p>
            <a href="#">Know more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
