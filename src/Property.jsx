import React from "react";
import PropertyHeader from "./components/PropertyHeader.jsx";
import PropertyDetails from "./components/PropertyDetails.jsx";
import PropertyDescription from "./components/PropertyDescription.jsx";
import PropertyMap from "./components/PropertyMap.jsx";
import { useParams } from "react-router-dom";
import properties from "./data/properties.js";

function Property() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <div>Property not found</div>;

  return (
    <div>
      <h2>{property.name}</h2>
      <p>{property.location}</p>
      <p>{property.price}</p>
      <img src={property.image} alt={property.name} />
      {/* Add map, description etc here */}
    </div>
  );
}

export default Property;
