function PropertyHeader({ image, name, price }) {
  return (
    <div className="property-header">
      <img src={image} alt={name} className="property-main-image" />
      <div className="property-header-info">
        <h1></h1>
        <h3></h3>
      </div>
    </div>
  );
}

export default PropertyHeader;
