import React from "react";
import posts from "../data/posts.json";

function PostList() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px" }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;
