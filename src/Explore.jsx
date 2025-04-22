import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import properties from "./data/properties";

function Explore() {
  const [searchInput, setSearchInput] = useState("");
  const [filterType, setFilterType] = useState("");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredProperties = properties.filter((property) => {
    const searchLower = searchInput.toLowerCase();
    const matchesSearch =
      property.name.toLowerCase().includes(searchLower) ||
      property.location.toLowerCase().includes(searchLower);

    const matchesType = filterType
      ? property.type.toLowerCase() === filterType.toLowerCase()
      : true;

    return matchesSearch && matchesType;
  });

  return (
    <div>
      {/* Search Section */}
      <div className="search-bar-wrapper">
        <div className="search-bar-container">
          <div className="search-input-group-flex">
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Search location"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <i className="bx bx-search search-icon"></i>
            </div>

            <div className="search-options">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="">Rental type</option>
                <option>Self-contain</option>
                <option>1 bedroom</option>
                <option>2 bedroom</option>
              </select>
            </div>
          </div>

          <button className="filter-button">
            <i className="bx bx-filter-alt"></i>
          </button>
        </div>
      </div>

      {/* Live Suggestions */}
      {searchInput || filterType ? (
        <div className="featured-properties">
          <h2>
            Showing results for: <em>{searchInput || filterType}</em>
          </h2>
          <div className="properties-container">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div key={property.id} className="property-card">
                  <Link
                    to={`/property/${property.id}`}
                    className="property-card-link"
                  >
                    <img
                      src={property.image}
                      alt={property.name}
                      className="property-image"
                    />
                    <div className="property-details">
                      <h3>{property.price}</h3>
                      <p>{property.location}</p>
                      <p>{property.availability}</p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p>No matching properties found.</p>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Default full property grid */}
          <div className="featured-properties">
            <div className="properties-container">
              {properties.map((property) => (
                <div key={property.id} className="property-card">
                  <Link
                    to={`/property/${property.id}`}
                    className="property-card-link"
                  >
                    <img
                      src={property.image}
                      alt={property.name}
                      className="property-image"
                    />
                    <div className="property-details">
                      <h3>{property.price}</h3>
                      <p>{property.location}</p>
                      <p>{property.availability}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <button className="signup exp-btn">View More</button>
          </div>
        </>
      )}

      {/* Neighborhood Section */}
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
