import React from 'react'
import { useState } from 'react'
import "../styles/comments.css";

 const CommentForm = ({handleSubmit,submitLabel}) => {
  const [text,setText] = useState("");
 const isTextareaDisabled = text.length===0;
  const onSubmit = event =>{
    event.preventDefault();
    handleSubmit(text);
    setText("");
  }

  return (
     
    <div className="postComment">
        <form id="create-Comment" className="create-Comment" onSubmit={onSubmit}>
          <div className="caption">Leave a Replay</div>
          <div className="commentUser">
            <label for="userName" name="userName">
              Name*
            </label>
            <input type="text" id="userName" placeholder="Type your name" />
          </div>
          <div className="commentUser">
            <label for="titleComment" name="titleComment">
              Title*
            </label>
            <input
              type="text"
              id="titleComment"
              placeholder="Add a title to your comment"
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
              value={text}
              onChange={(e)=>setText(e.target.value)}
            />
          </div>
          <div className="saveComment">
            {/* //el boton es comment-form-button */}
            <button className="btn-send-comment" disabled={isTextareaDisabled}>
              {submitLabel} ESCRIBE
            </button>
          </div>
        </form>
      </div>
           
  );
}
export default CommentForm;