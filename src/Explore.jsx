import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import properties from "./data/properties";

function Explore() {
  const [searchInput, setSearchInput] = useState("");
  const [filterType, setFilterType] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

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

  // Pagination logic
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  const changePage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) setCurrentPage(pageNum);
  };

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
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setCurrentPage(1);
                }}
              />
              <i className="bx bx-search search-icon"></i>
            </div>

            <div className="search-options">
              <select
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="">Rental type</option>
                <option>Self-contain</option>
                <option>1 bedroom</option>
                <option>2 bedroom</option>
                <option>3 bedroom</option>
                <option>4 bedroom</option>
              </select>
            </div>
          </div>

          <button className="filter-button">
            <i className="bx bx-filter-alt"></i>
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="featured-properties">
        <h2>
          Showing results for:{" "}
          <em>{searchInput || filterType || "All Properties"}</em>
        </h2>
        <div className="properties-container">
          {currentProperties.length > 0 ? (
            currentProperties.map((property) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &laquo;
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => changePage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &raquo;
            </button>
          </div>
        )}
      </div>

      {/* Neighborhood Section */}
      <div className="neighborhood-section">
        <h2>Know your Neighborhood</h2>
        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h4>Markets near Surulere</h4>
            <p>
              There are 2 local markets in Surulere, including Ijesha market,
              Yaba market and Tejuosho...
            </p>
            <a href="#">Know more</a>
          </div>
          <div className="neighborhood-card">
            <h4>Parks, Gyms, malls, Tourist attractions</h4>
            <p>
              There are several parks, malls and tourist attractions in
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
