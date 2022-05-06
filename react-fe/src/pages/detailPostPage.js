import { useParams, useNavigate } from "react-router-dom";
import Comments from "../components/Comments";
import "../styles/comments.css";
import CommentForm from "../components/CommentForm";
import getComment from "../resources/getComments";
import React, { useEffect, useState } from "react";

export const DetailPostPage = ({ findPostById, onEdit }) => {
  const params = useParams();
  const { postId } = params;
  const post = findPostById(postId);

  const navigate = useNavigate();
  const [allComments, setAllComments] = useState(getComment());
  const [commentId, setCommentId] = useState();

  const handleOnSave = (comment) => {
    if (commentId || commentId === 0) {
      const copyOfComments = allComments.map((item, index) =>
        index === commentId ? comment : item
      ); //checar si el index es igual

      setAllComments(copyOfComments);
      setCommentId();
    } else {
      setAllComments([...allComments, comment]);
    }
  };

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
        </div>
      </div>
      {/* <Comments /> */}
      <CommentForm onSave={handleOnSave} commentToUpdate={allComments[commentId]}/>
    </div>
  );
};
