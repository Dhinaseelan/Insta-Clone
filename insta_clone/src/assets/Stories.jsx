import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Story")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="d-flex mt-3">
      {stories.length > 0 ? (
        stories.map((story) => (
          <div className="mx-1" key={story.id}>
             
            <Link to={`/story/${story.id}/${stories.length}`}>
              <div className="gradient-border">
                <img
                  className="rounded-circle story-db"
                  src={story.user.profilePic}
                  alt="dp"
                />
              </div>
            </Link>

            
            <p
              className="text-truncate"
              style={{ width: "50px" }}
            >
              {story.user.username}
            </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Stories;