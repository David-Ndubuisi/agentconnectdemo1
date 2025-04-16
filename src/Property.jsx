import React from "react";
import PropertyHeader from "./components/PropertyHeader.jsx";
import PropertyDetails from "./components/PropertyDetails.jsx";
import PropertyDescription from "./components/PropertyDescription.jsx";
import PropertyMap from "./components/PropertyMap.jsx";
import PropertyPayment from "./components/PropertyPayment";
import { useParams } from "react-router-dom";
import properties from "./data/properties.js";
import "./components/PropertyPage.css";

function Property() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) return <div>Property not found</div>;

  return (
    <div className="property-page">
      <PropertyHeader property={property} />

      <PropertyDetails
        location={property.location}
        price={property.price}
        availability={property.availability}
        agentId={property.agentId}
      />

      <PropertyDescription description={property.description} />

      <PropertyMap location={property.location} mapSrc={property.mapSrc} />

      <PropertyPayment />
    </div>
  );
}

export default Property;
