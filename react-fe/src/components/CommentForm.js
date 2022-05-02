import React from "react";
import { useState } from "react";
// import "../styles/comments.css";

const CommentForm = (onSave, commentToUpdate) => {
  const newComment = {
    nameUser: "",
    title:"",
    updateAt: new Date().toISOString(),
  };
  const [newCommentState, setNewCommentState] = useState( commentToUpdate || newComment);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewCommentState({ ...newCommentState, [name]: value });
    // console.log(name.value);
  };

  return (
    <div className="postComment">
      <form id="create-Comment" className="create-Comment">
        <div className="caption">Leave a Replay</div>
        <div className="commentUser">
          <label for="userName" name="userName">
            Name*
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Type your name"
            value={newCommentState.nameUser}
            onChange={handleOnChange}
          />
        </div>
        <div className="commentUser">
          <label for="titleComment" name="titleComment">
            Title*
          </label>
          <input
            type="text"
            id="titleComment"
            placeholder="Add a title to your comment"
            value={newCommentState.title}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label for="date" name="date">
            Date
          </label>
          <span>fecha</span>
        </div>
        <div className="comment">
          {/* <label for="commentBody" name="commentBody">
                  Comment:
            </label> */}

          <textarea
            id="commentBody"
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Write your comment ;)"
            // value={text}
            // onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="saveComment">
          {/* //el boton es comment-form-button */}
          <button
            type="button"
            className="btn-send-comment"
            onClick={() => onSave(newCommentState)}
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
};
export default CommentForm;
