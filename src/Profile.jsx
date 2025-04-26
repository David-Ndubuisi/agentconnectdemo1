import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./profile.css";
import profilePic from "../public/images/pexels-andrewperformance1-697509.jpg";

const Profile = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="profile-container">
      {/* Top section with profile image */}
      <div className="profile-header">
        <div className="profile-close-btn" onClick={handleClose}>
          <i class="bx bx-chevron-left"></i>
        </div>{" "}
        {/* Add onClick */}
        <div className="profile-avatar">
          <img src={profilePic} alt="User" />
        </div>
        <h2>Boluwatife Gerald</h2>
        <p className="profile-plan">
          Free plan{" "}
          <span className="upgrade">
            (<Link to="#">upgrade</Link>)
          </span>
        </p>
      </div>

      {/* General section */}
      <div className="profile-section">
        <h2>General</h2>
        <ul className="profile-links">
          <li>
            <i className="bx bx-list-ul"></i> Property Request{" "}
            <span className="badge-new">pro</span>
          </li>
          <li>
            <i className="bx bx-user"></i> Personal Information{" "}
            <i className="bx bx-chevron-down"></i>
          </li>
          <li>
            <i className="bx bx-bookmark"></i> Saved Properties{" "}
            <i className="bx bx-chevron-down"></i>
          </li>
          <li>
            <i className="bx bx-lock-alt"></i> Privacy{" "}
            <i className="bx bx-chevron-down"></i>
          </li>
          <li id="logout">
            <i className="bx bx-log-out"></i> Log out{" "}
            <i className="bx bx-chevron-right"></i>
          </li>
        </ul>
      </div>

      {/* Extras section */}
      <div className="profile-section">
        <h2>Extras</h2>
        <ul className="profile-links">
          <li>
            <i className="bx bx-error-circle"></i> Inspection Safety
          </li>
          <li>
            <i className="bx bx-help-circle"></i> Help and Support
          </li>
          <li>
            <i className="bx bx-refresh"></i> Switch Account Type
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
