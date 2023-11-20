import axios from "axios";
import Post from './Post';
import PostIndex from "./post-index";
import { useState, useEffect } from "react";
import Logo2 from "../assets/logo2.png"
import './Forum.css'

const API = process.env.REACT_APP_API_URL;
const PORT = process.env.PORT

export default function Forum () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/posts`)
      .then((response) => setPosts(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div className='forum'>
        <h1 className='forum-header'>Forum</h1>
        <img className = "logo2 nav-item"src ={Logo2} alt='logo image'/>
      <div className='post-index'>
        <h4>Post Index</h4>
        {posts.map((post, index) => {
            return <PostIndex key={index} post={post} />; 
          })
        }
      </div>
      <ul className='post-filter'>
        <li className='post-filter-item, all-posts'>All Posts</li>
        <li className='post-filter-item friends-posts'>Friends</li>
        <li className='post-filter-item, my-posts'>My Posts</li>
      </ul>
      <div className="post-detail">
          {posts.map((post, index) => {
          return <Post key={index} post={post} />; 
        })
      }
      </div>
    </div>
  )
}
