import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Sug.css";

const Sug = () => {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/suggestions")
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3001/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  async function follow(id, username) {
    axios
      .post("http://localhost:3001/followers", { id, username })
      .then(() => alert("followed"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="suggestion-container">
      {profile && (
        <div className="profile-header">
          <img
            className="profile-pic"
            src={profile.profilePic}
            alt={profile.username || "profile"}
          />
          <h5 className="profile-name">{profile.username}</h5>
          <small className="switch-link">switch</small>
        </div>
      )}

      <div className="suggestion-header">
        <small>Suggestions for you</small>
        <b className="see-all">See all</b>
      </div>

      {suggestions.length > 0 ? (
        <div className="suggestion-list">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="suggestion-item">
              <img
                className="suggestion-pic"
                src={suggestion.profilePic}
                alt={suggestion.username}
              />
              <h6 className="suggestion-name">{suggestion.username}</h6>
              <button
                className="follow-btn"
                onClick={() => follow(suggestion.id, suggestion.username)}
              >
                Follow
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>no suggestions</div>
      )}
    </div>
  );
};

export default Sug;