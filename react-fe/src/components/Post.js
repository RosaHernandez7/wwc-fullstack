import React from "react";
import "../styles/blog.css";
import { Link } from "react-router-dom";

const Post = ({post, onEdit, index}) => {
  return (
    <div className="blog-post">
      <div className="blog-post-image">
        <img src={post.imageUrl} alt="Blog header image" width={250} height={250}/>
      </div>
      <div className="blog-post-details">
        <p>{post.updatedAt}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {/* <a href="#">Read More</a> */}
        <Link to={`post/${index}`}>
          Read More
        </Link>
      </div>
      <button
        onClick={()=>onEdit()}
      >
        Edit
      </button>
    </div>
  );
}

export default Post;