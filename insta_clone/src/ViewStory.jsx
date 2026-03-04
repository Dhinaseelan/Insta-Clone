import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import s1 from "./assets/images/s1.png";
import s2 from "./assets/images/s2.png";
import s3 from "./assets/images/s3.png";

const images = { 1: s1, 2: s2, 3: s3 };

function ViewStory() {
  const { id, tot } = useParams();
  const storyId = parseInt(id, 10);
  const total = parseInt(tot, 10);
  const [story, setStory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
  console.log("Params from URL:", { id, tot });
  console.log("Parsed values:", { storyId, total });

  if (storyId < 1 || storyId > total) {
    console.warn("Invalid storyId, redirecting...");
    navigate("/", { replace: true });
    return;
  }

  fetch("http://localhost:3001/Story")
    .then((res) => {
      console.log("Fetch response status:", res.status);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("Fetched data:", data);

      // Ensure id comparison works even if backend sends strings
      const found = data.find(
        (item) => parseInt(item.id, 10) === storyId
      );

      if (!found) {
        console.warn(`No story found with id=${storyId}`);
      }

      setStory(found);
    })
    .catch((err) => console.error("Fetch error:", err));
}, [storyId, total, navigate]);

  const prevId = storyId - 1;
  const nextId = storyId + 1;

  const handleNext = () => {
    if (nextId > total) {
      navigate("/", { replace: true });
    } else {
      navigate(`/story/${nextId}/${total}`);
    }
  };

  return (
    <div>
      {story ? (
        <div className="d-flex justify-content-center align-items-center">
          {prevId >= 1 && (
            <Link to={`/story/${prevId}/${total}`} className="btn btn-link">
              <i className="bi bi-arrow-left-circle-fill"></i>
            </Link>
          )}

          <img src={images[storyId]} alt={story.caption} className="vh-100" />

          <button onClick={handleNext} className="btn btn-link m-2">
            <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ViewStory; 