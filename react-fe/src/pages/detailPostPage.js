
// import { useParams, useNavigate } from "react-router-dom";
// import Comments from "../components/Comments";
// import "../styles/comments.css";
// import CommentForm from "../components/CommentForm";
// import getComment from "../resources/getComments";
// import React, { useEffect, useState } from "react";

// export const DetailPostPage = ({ findPostById, onEdit }) => {
//   const params = useParams();
//   const { postId } = params;
//   const post = findPostById(postId);

//   const navigate = useNavigate();
//   const [allComments, setAllComments] = useState(getComment());
//   const [commentId, setCommentId] = useState();

//   const handleOnSave = (comment) => {
//     if (commentId || commentId === 0) {
//       const copyOfComments = allComments.map((item, index) =>
//         index === commentId ? comment : item
//       ); //checar si el index es igual

//       setAllComments(copyOfComments);
//       setCommentId();
//     } else {
//       setAllComments([...allComments, comment]);
//     }
//   };

//   return (
//     <div>
//       <div className="blog-post">
//         <div className="blog-post-image">
//           <img
//             src={post.imageUrl}
//             alt="Blog header image"
//             width={250}
//             height={250}
//           />
//         </div>
//         <div>
//           <div className="blog-post-details">
//             <p>{post.updatedAt}</p>
//             <h1>{post.title}</h1>
//             <p>{post.body}</p>
//           </div>
//           <button className="btn-edit-post" onClick={() => onEdit()}>
//             E&nbsp;d&nbsp;i&nbsp;t
//           </button>
//         </div>
//       </div>
//       {/* <Comments /> */}
//       {/* <CommentForm onSave={handleOnSave} commentToUpdate={allComments[commentId]}/> */}
//     </div>
//   );
// };
import React, { useEffect, useState, useCallback} from "react";
import { useParams } from "react-router-dom";
import Post from '../components/Post';
import Comment from '../components/Comment'
import CommentInput from '../components/CommentInput'
import { getPostById } from "../api/apiPost";
import { getComments, saveComment, updateComment, deleteComment } from '../api/apiComments'

export const DetailPostPage = ({onDelete}) => {
  const params = useParams();
  const { postId } = params;
  const [post, setPost] = useState({});
  const [postComments, setPostComments] = useState([])
  const [toEditComment, setToEditComment] = useState()

  const fetchPost = useCallback(async () => {
    const res = await getPostById(postId);
    setPost(res);
    const comments = await getComments(postId)
    if (comments) {
      setPostComments(comments)
    }        
  }, [postId]);
 
  useEffect(() => {
    fetchPost();
  }, [postId, fetchPost]);
  
  const handleOnSave = async comment => {
    const savedComment = await saveComment(postId, comment)
    if (savedComment)
      setPostComments([...postComments, savedComment])
  }

  const handleOnEdit = async comment => {
    const updatedComment = await updateComment(postId, comment._id, comment)
    if (updatedComment) {
      const copyOfComments = Array.from(postComments);
      const result = copyOfComments.filter(c => c._id !== comment._id)
      setPostComments([...result, updatedComment])
    }
    setToEditComment()
  }

  const handleOnDelete = async commentId => {
    const deletedComment = await deleteComment(postId, commentId)
    if (deletedComment) {
      const copyOfComments = Array.from(postComments);
      const result = copyOfComments.filter(c => c._id !== commentId)
      setPostComments(result)
    }
  }

  return (
    <>
      <Post
        id={ post._id }
        post={ post }
        isDetails={ true }
        onDelete={ onDelete }
      />
      <div className="comments-section">
        {
          postComments.map(c => (
            <Comment
              key={c._id}
              comment={ c }
              onEdit={ () => setToEditComment(c) }
              onDelete={ handleOnDelete }
            />
          ))
        }
        <CommentInput
          comment={ toEditComment }
          onSave={ handleOnSave }
          onEdit={ handleOnEdit }
        />
      </div>
    </>
  );
};

