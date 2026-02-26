import React from "react";
import Post from "./Post";
import Stories from "./Stories";
function Feed() {
  return (
    <>
      <div>
        <Stories />
      </div>
      <div>
        <Post />
      </div>
    </>
  );
}
export default Feed;
