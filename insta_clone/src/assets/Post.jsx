import React, { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex flex-column align-items-center">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <div className="d-flex mt-2">
                <img
                  className="rounded-circle me-2 "
                  src={post.user.profilePic}
                  alt=""
                />
                <h5>{post.user.username}</h5>
              </div>
              <img className="w-75 hh mb-3 mt-2 " src={post.imageUrl} alt="" />
              <div className="d-flex ">
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                <b>
                  <p>{post.likes} likes</p>
                </b>
              </div>
              <div>
                <p>{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>no posts</div>
      )}
    </div>
  );
};

export default Post;
