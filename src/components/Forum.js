// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Post from './Post';
import axios from "axios";
import './Forum.css'

const API = process.env.REACT_APP_API_URL;

export default function Forum() {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
  axios
    .get(`${API}/posts`)
    .then((response) => setPosts(response.data))
    .catch((e) => console.error("catch", e));
}, []);


  return (
  <div className="forum">
    {posts.map((post) => {
     return <Post post={post}/>
      // return <Post key={index} post={post} index={index} />;
    })}
    
  </div>
  );
}