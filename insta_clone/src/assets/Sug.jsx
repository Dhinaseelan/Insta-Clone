import React, { useEffect, useState } from "react";

const Sug = () => {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/suggestions")
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/profile")
      .then((res) => res.json())
      .then((data) => {
        console.log("Profile data:", data);
        setProfile(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {profile && (
        <div className="d-flex mt-2">
          <img
            className="rounded-circle me-2"
            src={profile.profilePic}
            alt={profile.username || "profile"}
          />
          <h5>{profile.username}</h5>
        </div>
      )}
    </div>
  );
};

export default Sug;
