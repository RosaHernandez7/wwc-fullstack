import React from "react";
import "../styles/blog.css";
import { Link, NavLink } from "react-router-dom";


const NavBar = ({onPress}) => { 
  return (
    <div className="blog-post-navbar">
      <div className="blog-post-brand">
      <Link to ="/">
        <img
            src="https://itjuana.com/wp-content/uploads/ITJ_tm-logo.png"
            alt="itjuana logo"
            width={80}
            height={80}
          />
      </Link>
{/* 
        <a href="https://itjuana.com/">
          <img
            src="https://itjuana.com/wp-content/uploads/ITJ_tm-logo.png"
            alt="itjuana logo"
            width={80}
            height={80}
          />
        </a> */}
      </div>
      <ul>
        <li><NavLink to="join-our-team">Join our team</NavLink></li>
        <li><NavLink to="contact-us">Contact Us</NavLink></li>
        <li>
          <Link to="create-new-post">
            <button className="btn-new-post">Create New Post</button>
          </Link>
          </li>
      </ul>
    </div>
  );
}

export default NavBar