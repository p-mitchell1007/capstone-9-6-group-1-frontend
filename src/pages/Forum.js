
import axios from "axios";
import UserPost from "../components/UserPost.js";
import ShowPostComments from "../components/ShowPostComments.js";
import { useState, useEffect } from "react";

import Post from "../components/Post.js";

import './Forum.css'

// Logo2 is being used as the background image on the Forum page
import Logo2 from "../assets/logo4.png";

const API = process.env.REACT_APP_API_URL;

export default function Forum () {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState([5]);

  const [allForumUsers, setAllForumUsers] = useState([]); 
  const [allForumPosts, setAllForumPosts] = useState([]); 
  const [allForumComments, setAllForumComments] = useState([]); 
  const [currentUser, setCurrentUser] = useState([]);
  const [ selectedPosts, setSelectedPosts ] = useState([])
  // const [ relatedComments, setRelatedComments ] = useState([])
  // const [postFilterStatus, setPostFilterStatus ] = useState(['post-filter-menu hide'])
  // const [ loggedInUserID, setLoggedInUserID ] = useState([5])
  // const [postId, setPostId] = useState([1]);
  // const [genderIcon, setGenderIcon] = useState([]);
  
  
  
  useEffect(() => {
    axios
      .get(`${API}/forum/`)
      .then((response) => {

        const posts = getUserNameForEachPost(response.data.allPosts, response.data.allUsers)
        setAllForumPosts(posts)   
        setAllForumUsers(response.data.allUsers)     
      })
      .catch((e) => console.error("catch", e));
    }, []);
  
    
    // const postMenuToggle = () => {
    //   const postFilterMenu = document.getElementById('post-filter-menu')
    //   postFilterMenu.classList = postFilterMenu.classList.contains('hide') ? 'show' : 'hide'
    // }

    // const commentToggle = (event) => {
    //   const clicked = event.target.id
    //   const postFilterMenuItem = document.getElementById(clicked)
    //   postFilterMenuItem.innerHTML = `Now showing ${postFilterMenuItem.id}`
    // }

    // iterate through all posts and update the data with the user name
    const getUserNameForEachPost = (posts, users) => {
      return posts.map((post) => {
        const user = users.find((user) => user.id === post.user_id)
        return {
          ...post,
          user: `${user.fname} ${user.lname}`
        }
      })
    }

  return (
    <div className='forum'>
      <div className="forum__container">
        <h3 className="forum__title">Forum Posts</h3>
        <div className="forum__posts">
          {allForumPosts.map((post) => (
            <UserPost  post={post}  id={post.id} allUsers={allForumUsers}/>
          ))}
        </div>
      </div> 
    </div>
  )
}

