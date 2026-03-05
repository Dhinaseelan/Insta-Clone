import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();

  return (
    <nav className="menu-root" aria-label="Main navigation">
      {/* Sidebar for larger screens */}
      <div className="menu-sidebar" role="navigation">
        <img
          className="logo-z"
          src="/src/assets/images/insta-text-logo1.png"
          alt="logo"
        />
        <button className="menu-item" type="button" aria-label="Home">
          <i className="bi bi-house-door" aria-hidden="true"></i>
          <span className="menu-label">Home</span>
        </button>

        <button className="menu-item" type="button" aria-label="Search">
          <i className="bi bi-search" aria-hidden="true"></i>
          <span className="menu-label">Search</span>
        </button>

        <button className="menu-item" type="button" aria-label="Explore">
          <i className="bi bi-compass" aria-hidden="true"></i>
          <span className="menu-label">Explore</span>
        </button>

        <button className="menu-item" type="button" aria-label="Reels">
          <i className="bi bi-play-btn" aria-hidden="true"></i>
          <span className="menu-label">Reels</span>
        </button>

        <button className="menu-item" type="button" aria-label="Messages">
          <i className="bi bi-chat-left-text" aria-hidden="true"></i>
          <span className="menu-label">Messages</span>
        </button>

        <button className="menu-item" type="button" aria-label="Notifications">
          <i className="bi bi-heart" aria-hidden="true"></i>
          <span className="menu-label">Notifications</span>
        </button>

        <button className="menu-item" type="button" aria-label="Create">
          <i className="bi bi-plus-square" aria-hidden="true"></i>
          <span className="menu-label">Create</span>
        </button>

        <button
          className="menu-item"
          type="button"
          aria-label="Profile"
          onClick={() => navigate("/profile")}
        >
          <i className="bi bi-person" aria-hidden="true"></i>
          <span className="menu-label">Profile</span>
        </button>

        <div className="menu-bottom-desktop">
          <button className="menu-item" type="button" aria-label="Threads">
            <i className="bi bi-threads" aria-hidden="true"></i>
            <span className="menu-label">Threads</span>
          </button>

          <button className="menu-item" type="button" aria-label="More">
            <i className="bi bi-list" aria-hidden="true"></i>
            <span className="menu-label">More</span>
          </button>
        </div>
      </div>

      {/* Bottom nav for small screens */}
      <div className="menu-bottom" role="navigation" aria-label="Mobile navigation">
        <button className="bottom-item" type="button" aria-label="Home">
          <i className="bi bi-house-door" aria-hidden="true"></i>
        </button>

        <button className="bottom-item" type="button" aria-label="Search">
          <i className="bi bi-search" aria-hidden="true"></i>
        </button>

        <button className="bottom-item" type="button" aria-label="Create">
          <i className="bi bi-plus-square" aria-hidden="true"></i>
        </button>

        <button className="bottom-item" type="button" aria-label="Notifications">
          <i className="bi bi-heart" aria-hidden="true"></i>
        </button>

        <button
          className="bottom-item"
          type="button"
          aria-label="Profile"
          onClick={() => navigate("/profile")}
        >
          <i className="bi bi-person" aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
}

export default Menu;