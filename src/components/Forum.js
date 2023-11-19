import axios from "axios";
import Post from './Post';
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;
const PORT = process.env.PORT
console.log(API)

export default function Forum () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('running usesEffect Function')
    axios
      .get(`${API}/posts`)
      .then((response) => setPosts(response.data))
      // .then((response) => console.log(response))
      .catch((e) => console.error("catch", e));
  }, []);

  return (
    <div>
      {posts.map((post, index) => {
          return <Post key={index} post={post} />; 
        })
      }
    </div>
  )
}
