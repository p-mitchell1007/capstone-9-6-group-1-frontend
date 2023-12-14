
import axios from "axios";
import Post from '../components/Post';
import PostIndex from "../components/post-index";
import { useState, useEffect } from "react";
import './Forum.css'
//import { Link } from "react-router-dom";

// Logo2 is being used as the background image on the Forum page
import Logo2 from "../assets/logo2.png";

const API = process.env.REACT_APP_API_URL;
// const PORT = process.env.PORT

export default function Forum () {
  const [posts, setPosts] = useState([]);
  // const [genderIcon, setGenderIcon] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/posts`)
      .then((response) => setPosts(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div className='forum'>
      <div>
        <h1 className='forum-header'>Forum</h1>
        <img className = "logo2 nav-item"src ={Logo2} alt='logo pic'/>
      </div>
      <div className="main-content">
        <div className="aside">
          <div className='post-index-container'>
            <h4>Post Index</h4>
            <ul className="post-index-filter">
              <li className='label'>Select:</li>
              <li className="post-filter-item all-posts">All Posts</li>
              <li className="post-filter-item friends-posts">Friends</li>
              <li className="post-filter-item my-posts">My Posts</li>
            </ul>
            <ul className="post-index">
              {posts.map((post, index) => {
                return < PostIndex key={index} post={post} />; })
              }
            </ul>
          </div>
        </div>
        <div>
          <div className="post-detail">
              <h4>Post Detail</h4>
            <ul className="post-actions">
              <li className='label'>Select:</li>
              <li className="post-actions-item all-posts">view</li>
              <li className="post-actions-item friends-posts">New</li>
              <li className="post-actions-item my-posts">Delete</li>
            </ul>
            <div>
              {posts.map((post, index) => {
              return <Post key={index} post={post} />;  })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
