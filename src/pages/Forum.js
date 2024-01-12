
import axios from "axios";
import ShowUserPosts from "../components/ShowUserPosts.js";
import ShowPostComments from "../components/ShowPostComments.js";
import { useState, useEffect } from "react";
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
  // const [postFilterStatus, setPostFilterStatus ] = useState(['post-filter-menu hide'])
  const [currentUser, setCurrentUser] = useState([]);
  // const [ loggedInUserID, setLoggedInUserID ] = useState([5])
  const [ selectedPosts, setSelectedPosts ] = useState([])
  const [ relatedComments, setRelatedComments ] = useState([])
  // const [postId, setPostId] = useState([1]);
  // const [genderIcon, setGenderIcon] = useState([]);
  
  
  
  useEffect(() => {
    axios
      .get(`${API}/forum/`)
      .then((response) => {
        setAllForumUsers(response.data.allUsers)
        setAllForumPosts(response.data.allPosts)
        setAllForumComments(response.data.allComments)
        
      })
      .catch((e) => console.error("catch", e));
    }, []);
  
    
    const postMenuToggle = () => {
      // console.log('* * * Entered postMenuToggle!! * * * ')
      const postFilterMenu = document.getElementById('post-filter-menu')
      // console.log('postFilterMenu', postFilterMenu.classList)
      postFilterMenu.classList = postFilterMenu.classList.contains('hide') ? 'show' : 'hide'
    }
    const commentToggle = (event) => {
      const clicked = event.target.id
      // console.log('* * * Entered commentToggle!! * * * ')
      const postFilterMenuItem = document.getElementById(clicked)
      // console.log('postFilterMenuItem', postFilterMenuItem.classList)
      postFilterMenuItem.innerHTML = `Now showing ${postFilterMenuItem.id}`
    }
    const getCurrentUser = (event) => {
      event.preventDefault();
      let inputId = document.getElementById('input-id').innerText;
      {allForumUsers.map((user)=>{
        console.log('user',user.id, user.fname, user.lname)
      
      })}
        setCurrentUser(inputId)
   
    }

    const filterPosts = (filter) => {
      // 1. get current user
      // 2. find posts related that user
      // 3. find comments related to those posts
      // 4. render posts and comments to page

    }
  return (
    <div className='forum'>
      <span>
        id:
        <input id="input-id" placeholder='Enter id'></input>
        <button onClick={getCurrentUser}>Submit</button>
      </span>
      
      <div className="forum-content">
        {allForumUsers.map((user) => {
          if (user.id === currentUser.id) {
            return (
              <div>
                {user.id} {user.fname} {user.lname}
              </div>
            )
          } 
          return null;
        })}
      <div>
      
        </div>

        <div className="post-detail">
          <div>
            <h3>Forum Posts</h3>
          <div className='post-card-container'>
            <div className='post-card'>
              {allForumPosts.map((post) => (
              <div className='post-card-content-frame' key={post.id}>
                <div className='post-card-content-row'>
                  <span className='post-card-img'>
                    image
                  </span>  
                  <span className="post-item">
                    <span 
                      className='post-card-title'>{post.title}
                    </span>
                    <span className="post-card-content">
                      {post.content}
                    </span>
                  </span>
                  <span className='post-filter' onClick={postMenuToggle}>
                    ...
                    <span id="post-filter-menu" className='hide'>
                      <ul >
                        <li id="all-posts" onClick={commentToggle}>All Posts</li>
                        <li id="friends-posts" onClick={commentToggle}>Friends</li>
                        <li id="my-posts" onClick={commentToggle}>My Posts</li>
                      </ul>
                    </span>
                  </span>
                </div>
                <span className='post-card-comment-row '>
                  {allForumComments.map((comment) => {
                    if (comment.post_id === post.id) {
                      return (
                        <span className='post-card-comment' key ={comment.id}>
                          {/* {comment.content} */}
                        <ShowPostComments id = {comment.id} post_id={comment.post_id} content={comment.content} comment_made={comment.comment_made}/>
                        </span>
                      )
                    } 
                    return null;
                  })}
                </span>
              </div>
              ))}
            </div>
          </div>

            {selectedPosts.map((post) => (
              <div>
                <p>{post.title}</p>
                <p>{post.content}</p>
              </div>

            ))}
            
          </div>
          <div>

          </div>
          <div>
        
          </div>
        </div>

      </div>
    </div>
  )
}

