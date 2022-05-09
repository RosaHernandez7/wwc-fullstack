import React from "react";
import Post from "./Post";

const ListPost = ({ posts, onEdit, onDelete }) => {
  return (
    <>
      {posts.map((post) => {
        return (
          <Post
            id={post._id}
            key={post._id}
            post={post}
            // onEdit={() => onEdit(post._id)}//the id provided by mongoose
          />
        );
      })}
    </>
  );
};

export default ListPost;
