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
        setProfile(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="suggestion m-4 position-fixed">
        {profile && (
          <div className="d-flex mt-2">
            <img
              className="rounded-circle me-2"
              src={profile.profilePic}
              alt={profile.username || "profile"}
            />
            <h5>{profile.username}</h5>
            <small className="ms-auto text-primary">switch</small>
          </div>
        )}
        <div className="d-flex mt-2">
          <small>Suggestions for you</small>
          <b className="ms-auto text-primary">See all</b>
        </div>
        {suggestions.length > 0 ? (
          <div>
            {suggestions.map((suggestion) => (
              <div key={suggestion.id}>
                <div className="d-flex mt-4 mb-auto">
                  <img
                    className="rounded-circle me-2 "
                    src={suggestion.profilePic}
                    alt=""
                  />
                  <h6 className="font-size-small">{suggestion.username}</h6>
                  <small className="ms-auto text-primary">follow</small>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>no suggestions</div>
        )}
      </div>
    </div>
  );
};

export default Sug;
