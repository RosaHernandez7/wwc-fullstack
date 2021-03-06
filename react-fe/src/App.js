import "./styles/App.css";
import NavBar from "./components/NavBar";

import posts from "./resources/posts";
// import CreatePost from "./pages/CreatePost";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { JoinOurTeam } from "./pages/JoinOurTeam";
import { ContactUs } from "./pages/ContactUs";
import { HomePage } from "./pages/HomePage";
import CreatePost from "./pages/CreatePost";
import { DetailPostPage } from "./pages/DetailPostPage";
import { ErrorPage } from "./components/ErrorPage";
import {getAllPost,createPost,updatePost,deletePost} from "./api/apiPost";

function App() {
  const navigate = useNavigate();
  // const [isVisible, setIsVisible] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  // const [postId, setPostId] = useState();

  /***lo añado hoy 30 d ebaril */
  const fetchPosts = async () => {
    const res = await getAllPost();
    setAllPosts(res);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const findPostById = (id) => {
    return allPosts[id];
  };
  // fetchPosts();

  // useEffect(() => { //se activa una vez, cuando el componenet es renderizado 
  //   // console.log("**use*");
  //   fetchPosts();
  // },[]);
  // hasta aqui

  // const handleOnSave = async (post) => {
  //   console.log(post);
  //   if (postId) {
  //     const  res = await updatePost(post._id,post);
  //     console.log(res);
  //     const copyOfPosts = allPosts.map((item) =>
  //       item._id === res._id? post : item
  //     ); //checar si el index es igual

  //     setAllPosts(copyOfPosts);
  //     // setPostId();
  //   } else {
  //     //create a new post
  //     console.log(post);
  //     const  res = await createPost(post);
  //     // console.log("my response ",res);
  //     setAllPosts([...allPosts, post]);
  //   }

  //   navigate("/"); 
  // };
  const handleOnSave = async (post) => {
    const res = await createPost(post);
    setAllPosts([...allPosts, post]);
    navigate("/", {replace: true});
  };
  const handleOnEdit = async (postId, post) => {
    const res = await updatePost(postId, post);
    const copyOfPosts = allPosts.map((item) =>
      item._id === res._id ? post : item
    );
    setAllPosts(copyOfPosts);
    navigate("/", {replace: true});
  };

  const onDelete = async (id) => {
    const res = await deletePost(id);
    const copyOfPosts = allPosts.filter((item) => item._id !== id);
    setAllPosts(copyOfPosts);
    navigate("/", {replace: true});
  };



  // const handleOnEdit = (postId) => { //se resive un post.id de listpost //ESTE ES DEL BOTON EDIT QUE ESTA EN DETAILPOST
  //   console.log(postId);
  //   // setIsVisible(true); 
  //   setPostId(postId);
  //   navigate("/create-new-post");
  // };
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          index
          element={
            <HomePage
              posts={allPosts}
              onEdit={handleOnEdit}
              onDelete={onDelete}
            />
          }
        />
        <Route path="join-our-team" element={<JoinOurTeam />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />
        <Route
          path="create-new-post"
          element={
            <CreatePost onSave={handleOnSave} />
          }
        />
        <Route
          path="post/:postId"
          element={<DetailPostPage onDelete={onDelete} />}
        />
         <Route
          path="create-new-post/:postId"
          element={
            <CreatePost onSave={handleOnEdit} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
