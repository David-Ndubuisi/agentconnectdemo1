import { useParams } from "react-router-dom";
import agents from "./data/agents.js";

function Agent() {
  const { id } = useParams();
  const agent = agents.find((a) => a.id === parseInt(id));

  if (!agent) return <p>Agent not found</p>;

  return (
    <div className="agent-page">
      <img src={agent.image} alt={agent.name} />
      <h2>{agent.name}</h2>
      <p>{agent.bio}</p>
      <p>
        <strong>Phone:</strong> {agent.phone}
      </p>
      <p>
        <strong>Email:</strong> {agent.email}
      </p>
    </div>
  );
}

export default Agent;
