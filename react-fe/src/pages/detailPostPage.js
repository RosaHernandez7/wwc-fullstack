//rafc
// import React from "react";
// import { useParams } from "react-router-dom";

// export const detailPostPage = (findPostById) => {
//   const params = useParams();
//   const { postId } = params;
//   const post = findPostById(postId);
//   return (
//     <div>
//       {postId}
//       {/* //se puede quitar */}
//       <div className="blog-post">
//         <div className="blog-post-image">
//           <img
//             src={post.imageUrl}
//             alt="Blog header image"
//             width={250}
//             height={250}
//           />
//         </div>
//         <div className="blog-post-details">
//           <p>{post.updatedAt}</p>
//           <h1>{post.title}</h1>
//           <p>{post.body}</p>
//           {/* <a href="#">Read More</a> */}
//           {/* la siguiente parte no esta  */}

//           <Link to={`post/${index}`}>Read More</Link>
//         </div>
//         <button onClick={() => onEdit()}>Edit</button>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { useParams } from "react-router-dom";

export const DetailPostPage = ({ findPostById, onEdit }) => {
  const params = useParams();
  const { postId } = params;
  const post = findPostById(postId);
  // const strEdit = ["E", "D", "I", "T"];
  // function setEditString(strEdit) {
  //   const editText = document.querySelector(".btn-edit-post");
  //   for (let i = 0; i < strEdit.length; i++) {
  //     editText.innerHTML = "hola";
  //   }
  // }
  // alert("esta es la pagina de detalles");
  return (
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
        <button className="btn-edit-post" onClick={() => onEdit()}>E&nbsp;d&nbsp;i&nbsp;t</button>
        {/* const element = (
        <button className="btn-edit-post" onClick={() => onEdit()}>
          {setEditString(strEdit)}
        </button>
        ); */}
      </div>
    </div>
  );
};
