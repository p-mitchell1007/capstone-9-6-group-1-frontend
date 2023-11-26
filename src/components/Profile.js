import axios from "axios";
// import Post from './Post';
// import PostIndex from "./post-index";

import { useState, useEffect } from "react";
import Logo2 from "../assets/logo2.png"
import './Profile.css'
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;
const PORT = process.env.PORT

export default function Forum () {
  // const [posts, setPosts] = useState([]);
  const [userPw, setUserPw] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/profile`)
      .then((response) => setPosts(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div className='profile'>
      <div>
        <h1 className='forum-header'>Forum</h1>
        <img className = "logo2 nav-item"src ={Logo2} alt='logo image'/>
      </div>
      <div className="main-content">
        <div className="aside">
          <div className='post-index'>
            <h4>Post Index</h4>
            <ul className="post-index-filter">
              <li className='label'>Select:</li>
              <li className="post-filter-item all-posts">All Posts</li>
              <li className="post-filter-item friends-posts">Friends</li>
              <li className="post-filter-item my-posts">My Posts</li>
            </ul>
            {posts.map((post, index) => {
              return <PostIndex key={index} post={post} />; 
            })
          }
          </div>
        </div>
        <div>
          <div className="post-detail">
            <ul className="post-actions">
              <li className='label'>Select:</li>
              <li className="post-actions-item all-posts">view</li>
              <li className="post-actions-item friends-posts">New</li>
              <li className="post-actions-item my-posts">Delete</li>
            </ul>
              {posts.map((post, index) => {
              return <Post key={index} post={post} />; 
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}
