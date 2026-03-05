import React, { useEffect, useState } from "react";
import "./Post.css"; // add a CSS file for responsive tweaks

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="post-container">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            {/* User info */}
            <div className="post-header">
              <img
                className="profile-pic"
                src={post.user.profilePic}
                alt={post.user.username}
              />
              <h5 className="username">{post.user.username}</h5>
            </div>

            {/* Post image */}
            <img className="post-image" src={post.imageUrl} alt="post" />

            {/* Actions */}
            <div className="post-actions">
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-send"></i>
            </div>

            {/* Likes & caption */}
            <div className="post-likes">
              <b>{post.likes} likes</b>
            </div>
            <div className="post-caption">
              <p>{post.caption}</p>
            </div>
          </div>
        ))
      ) : (
        <div>no posts</div>
      )}
    </div>
  );
};

export default Post;