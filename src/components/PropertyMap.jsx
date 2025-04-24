import React from "react";
import { Link } from "react-router-dom";

function PropertyMap({ location, mapSrc }) {
  return (
    <div className="property-map">
      <h2>Map</h2>
      <p>
        <i className="bx bx-map"></i> {location}
      </p>
      <div className="map-image">
        <iframe
          src={mapSrc}
          width="88%"
          height="390"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          title="Property Location"
        ></iframe>
      </div>
      <div className="map-buttons">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            location
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="schdl_insp">Go to Google Maps</button>
        </a>

        <button>Share your location</button>
      </div>
    </div>
  );
}

export default PropertyMap;
