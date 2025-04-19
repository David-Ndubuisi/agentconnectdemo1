import { useState } from "react";
import { useParams } from "react-router-dom";
import agents from "./data/agents.js";
import "./agent.css";

function Agent() {
  const { id } = useParams();
  const agent = agents.find((a) => a.id === parseInt(id));
  const [showInfo, setShowInfo] = useState(false);

  if (!agent) return <p>Agent not found</p>;

  return (
    <div className="agent-page">
      <div className="agent-header">
        <img src={agent.image} alt={agent.name} className="agent-image" />
        <div className="agent-info">
          <h2>{agent.name}</h2>
          <p className="agent-rating">
            <i class="bx bxs-star"></i> 4.5 (15 reviews)
          </p>
        </div>
      </div>

      <div className="agent-details">
        <h2>Agent Details</h2>
        <p>
          <strong>Total Listings :</strong> {agent.total_listings}
        </p>
        <p>
          <strong>ID Card Number :</strong> {agent.id}
        </p>

        <div className="more-info-toggle">
          <p onClick={() => setShowInfo(!showInfo)} className="toggle-text">
            <strong>More Information</strong>{" "}
            {showInfo ? (
              <i class="bx bx-chevron-down"></i>
            ) : (
              <i class="bx bx-chevron-up"></i>
            )}
          </p>
          {showInfo && (
            <div className="info-box">
              <p>{agent.bio}</p>
              <p>
                <strong>Email:</strong> {agent.email}
              </p>
              <p>
                <strong>Phone:</strong> {agent.phone}
              </p>
            </div>
          )}
        </div>

        <div className="agent-buttons">
          <button id="schdl_insp">Schedule Inspection</button>
          <button>Message</button>
        </div>
      </div>
    </div>
  );
}

export default Agent;
