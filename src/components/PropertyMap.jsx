function PropertyMap({ location }) {
  return (
    <div className="property-map">
      <h2>Map</h2>
      <p>
        <i className="bx bx-map"></i> {location}
      </p>
      <div className="map-image">
        <img src="/map-placeholder.png" alt="Map" />
      </div>
      <div className="map-buttons">
        <button id="schdl_insp">Go to Google app</button>
        <button>Share your location</button>
      </div>
    </div>
  );
}

export default PropertyMap;
