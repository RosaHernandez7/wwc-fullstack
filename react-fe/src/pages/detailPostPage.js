import React from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import "../styles/comments.css";
import CommentForm from "../components/CommentForm";

export const DetailPostPage = ({ findPostById, onEdit }) => {
  const params = useParams();
  const { postId } = params;
  const post = findPostById(postId);

  return (
    <div>
      <div className="blog-post">
        <div className="blog-post-image">
          <img
            src={post.imageUrl}
            alt="Blog header image"
            width={250}
            height={250}
          />
        </div>
        <div>
          <div className="blog-post-details">
            <p>{post.updatedAt}</p>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          <button className="btn-edit-post" onClick={() => onEdit()}>
            E&nbsp;d&nbsp;i&nbsp;t
          </button>
          {/* const element = (
        <button className="btn-edit-post" onClick={() => onEdit()}>
          {setEditString(strEdit)}
        </button>
        ); */}
        </div>
      </div>
      <Comments currentUserId="1 "/>
      <CommentForm/>
    </div>
  );
};
