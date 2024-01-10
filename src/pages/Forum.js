
import axios from "axios";
import ShowUserPosts from "../components/ShowUserPosts.js";
import ShowPostComments from "../components/ShowPostComments.js";
import { useState, useEffect } from "react";
import './Forum.css'

// Logo2 is being used as the background image on the Forum page
import Logo2 from "../assets/logo4.png";

const API = process.env.REACT_APP_API_URL;

// let theID = 5;
export default function Forum () {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState([5]);

  const [allForumUsers, setAllForumUsers] = useState([]); 
  const [allForumPosts, setAllForumPosts] = useState([]); 
  const [allForumComments, setAllForumComments] = useState([]); 

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
        console.log('response.data', response.data)
        setAllForumUsers(response.data.allUsers)
        setAllForumPosts(response.data.allPosts)
        setAllForumComments(response.data.allComments)
        
      })
      .catch((e) => console.error("catch", e));
    }, []);
    
    console.log('allForumUsers!', allForumUsers)
    console.log('allForumPost!!', allForumPosts)
    console.log('allForumComments!!!', allForumComments)

  return (
    <div className='forum'>
      
      <div className="forum-content">
        <div className="aside">
        User Info
        </div>

          <div className="post-detail">
              <div>
              {currentUser.map((user) => (
                <li>remove later: {user.id} {user.fname} {user.lname}</li>
              ))}
              </div>
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
                    <span>
                      <span className='post-card-title'>{post.title}</span>
                      <span className="post-card-content">{post.content}</span>
                    </span>
                    <span>
                      ...
                      <span className='post-filter'>
                        <ul>
                          <li className="post-filter-item all-posts">All Posts</li>
                          <li className="post-filter-item friends-posts">Friends</li>
                          <li className="post-filter-item my-posts">My Posts</li>
                        </ul>
                      </span>
                    </span>
                  </div>
                  <div >
                    {allForumComments.map((comment) => {
                      if (comment.post_id === post.id) {
                        return (
                          <div className='post-card-comment-row'> <span className='post-card-comment' key ={comment.id}>{comment.content}</span></div>
                         
                        )
                      } 
                      return null;
                    })}
                  </div>
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

