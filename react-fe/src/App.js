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
// import {getAllPost,createPost,updatePost,deletePost} from "./api/apiPost";

function App() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [allPosts, setAllPosts] = useState(posts());
  const [postId, setPostId] = useState();
  /***lo añado hoy 30 d ebaril */
  // const fetchPosts = async () => {
  //   const res = await getAllPost();
  //   console.log("***");
  //   console.log(res);
  //   setAllPosts(res);
  // };

  // useEffect(() => {
  //   console.log("***");
  //   fetchPosts();
  // }, []);
  // hasta aqui


  const onPress = () => {
    setIsVisible(!isVisible);
  };
  const findPostById = (id) => {
    return allPosts[id];
  };

  const handleOnSave = (post) => {
    if (postId || postId === 0) {
      const copyOfPosts = allPosts.map((item, index) =>
        index === postId ? post : item
      ); //checar si el index es igual

      setAllPosts(copyOfPosts);
      setPostId();
    } else {
      setAllPosts([...allPosts, post]);
    }

    navigate("/"); 
  };

  const handleOnEdit = (postId) => {
    setIsVisible(true); 
    setPostId(postId);
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          index
          element={<HomePage posts={allPosts} onEdit={handleOnEdit} />}
        />
        <Route path="join-our-team" element={<JoinOurTeam />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<errorPage />} />
        <Route
          path="create-new-post"
          element={
            <CreatePost onSave={handleOnSave} postToUpdate={allPosts[postId]} />
          }
        />
        <Route
          path="post/:postId"
          element={<DetailPostPage findPostById={findPostById} />}
        />
      </Routes>
    </div>
  );
}

export default App;
