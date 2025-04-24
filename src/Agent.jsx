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
            <i className="bx bxs-star"></i> {agent.ratings} (
            {parseInt(agent.ratings) * 3} reviews)
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
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${agent.email}?subject=Property Inquiry from AgentConnect&body=Hi ${agent.name}, I got your contact from AgentConnect and I'm interested in your listings.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", color: "#0077cc" }}
                >
                  {agent.email}
                </a>
              </p>
              <p>
                <strong>Phone:</strong> {agent.phone}
              </p>
            </div>
          )}
        </div>

        <div className="agent-buttons">
          <button id="schdl_insp">Schedule Inspection</button>
          <a
            href={`https://wa.me/234${agent.phone.replace(
              /^0/,
              ""
            )}?text=Hi%20${encodeURIComponent(
              agent.name
            )},%20I%20got%20your%20number%20from%20AgentConnect.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Message</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Agent;
