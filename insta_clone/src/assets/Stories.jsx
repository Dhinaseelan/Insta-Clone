import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Stories.css"; 

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Story")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="stories-container">
      {stories.length > 0 ? (
        stories.map((story) => (
          <div className="story-item" key={story.id}>
            <Link to={`/story/${story.id}/${stories.length}`}>
              <div className="gradient-border">
                <img
                  className="story-pic"
                  src={story.user.profilePic}
                  alt={story.user.username}
                />
              </div>
            </Link>
            <p className="story-username">{story.user.username}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Stories;