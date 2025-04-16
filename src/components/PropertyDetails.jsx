import { useParams, useNavigate } from "react-router-dom";

function PropertyDetails({ price, location, availability, agentId }) {
  const navigate = useNavigate();

  return (
    <div className="property-details2">
      <h2>Property Details</h2>
      <div className="details-grid">
        <p>
          <strong>Price:</strong> {price} /Year
        </p>
        <p>
          <strong>Toilets:</strong> -
        </p>
        <p>
          <strong>Address:</strong> {location}
        </p>
        <p>
          <strong>Property Type:</strong> Flat
        </p>
        <p>
          <strong>Bedrooms:</strong> 1 bedroom
        </p>
        <p>
          <strong>Market Status:</strong>{" "}
          <span className="status">{availability}</span>
        </p>
        <p>
          <strong>Bathrooms:</strong> 1 bathroom
        </p>
        <p>
          <strong>
            Reviews <i class="bx bxs-star"></i> :
          </strong>{" "}
          3.5 (12 reviews)
        </p>
      </div>
      <div className="details-buttons">
        <button id="schdl_insp">Schedule Inspection</button>
        <button onClick={() => navigate(`/agent/${agentId}`)}>
          Contact Agent
        </button>
      </div>
    </div>
  );
}

export default PropertyDetails;
