import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Profile from "./Profile.jsx";
import Explore from "./Explore.jsx";
import Contact from "./Contact.jsx";
import Property from "./Property.jsx";
import Agent from "./Agent.jsx";
import livingRoomImage from "../public/images/2375ade4898768c14c2355d620e056b4.jpeg"; // Import image
import FeaturedProperties from "./FeaturedProperties.jsx";
import Services from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";
import Features from "./Features.jsx";
import NewListing from "./NewListing.jsx";
import CallToAction from "./CallToAction.jsx";
import Footer from "./Footer.jsx";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  return (
    <Router>
      <MainContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

function MainContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation(); // Get current route

  return (
    <div>
      {/* Conditionally render Navbar only if NOT on login or signup page */}
      {!["/login", "/signup", "/contact"].includes(location.pathname) && (
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}

      <Routes>
        <Route
          path="/explore"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Explore isLoggedIn={isLoggedIn} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/agent/:id" element={<Agent />} />
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <div className="landing-container">
                <section className="hero-section">
                  <div className="hero-text">
                    <h1>
                      Discover your perfect new home with{" "}
                      <span>AgentConnect</span>.
                    </h1>
                  </div>
                  <div className="hero-image">
                    <img src={livingRoomImage} alt="Living Room" />
                  </div>
                </section>

                <div className="search-container">
                  <div className="search-container-upper">
                    <p>Find your space now</p>
                  </div>
                  <div className="search-container-lower">
                    <select className="search-dropdown">
                      <option>Location</option>
                      <option>Surulere</option>
                      <option>Ikoyi</option>
                      <option>Lekki</option>
                    </select>
                    <select className="search-dropdown">
                      <option>Property Type</option>
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Office Space</option>
                    </select>
                    <select className="search-dropdown">
                      <option>Price Range</option>
                      <option>NGN 700k - 1M</option>
                      <option>NGN 1M - 2M</option>
                      <option>NGN 2M - 5M</option>
                    </select>
                    <div className="search-input-wrapper">
                      <button type="search">
                        <i className="bx bx-search"></i> Search
                      </button>
                    </div>
                  </div>
                </div>
                <FeaturedProperties />
                <Services />
                <Testimonials />
                <Features />
                <CallToAction />
                <Footer />
              </div>
            ) : (
              <div>
                <div className="search-bar-wrapper">
                  <h2>
                    Finding a house couldn't <br />
                    get any <span className="highlight">easier!</span>
                  </h2>
                </div>
                <FeaturedProperties />
                <NewListing />
              </div>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
