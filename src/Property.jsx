import React from "react";
import PropertyHeader from "./components/PropertyHeader.jsx";
import PropertyDetails from "./components/PropertyDetails.jsx";
import PropertyDescription from "./components/PropertyDescription.jsx";
import PropertyMap from "./components/PropertyMap.jsx";
import { useParams } from "react-router-dom";
import properties from "./data/properties.js";
import "./components/PropertyPage.css";

function Property() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <div>Property not found</div>;

  return (
    <div className="property-page">
      <PropertyHeader
        image={property.image}
        name={property.name}
        price={property.price}
      />

      <PropertyDetails
        location={property.location}
        price={property.price}
        availability={property.availability}
      />

      <PropertyDescription description={property.description} />

      <PropertyMap location={property.location} />
    </div>
  );
}

export default Property;
