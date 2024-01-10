
import axios from "axios";
import ShowUserPosts from "../components/ShowUserPosts.js";
import ShowPostComments from "../components/ShowPostComments.js";
import { useState, useEffect } from "react";
import './Forum.css'

// Logo2 is being used as the background image on the Forum page
import Logo2 from "../assets/logo4.png";

const API = process.env.REACT_APP_API_URL;
// const PORT = process.env.PORT



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
  
  // * * * * * * Testing Post * * * * * * *
  
  
  useEffect(() => {
    axios
      .get(`${API}/forum/`)
      .then((response) => {
        console.log('response.data', response.data)
        setAllForumUsers(response.data.allUsers)
        setAllForumPosts(response.data.allPosts)
        setAllForumComments(response.data.allComments)
        
        // setCurrentUser(response.data.user)
        // setSelectedPosts(response.data.posts)
        // setRelatedComments(response.data.comments)
        // console.log('user',response.data.user)
        // console.log('posts',response.data.posts)
        // console.log('comments',response.data.comments)
        // console.log('currentUser',currentUser)
        // console.log('selectedPosts',selectedPosts)
        // console.log('relatedComments',relatedComments)
      })
      .catch((e) => console.error("catch", e));
    }, []);
    
    console.log('allForumUsers!', allForumUsers)
    console.log('allForumPost!!', allForumPosts)
    console.log('allForumComments!!!', allForumComments)
    
    /*  
    - get the user Id of the loggedInUser
  - getUserPosts: query the post table for posts by loggedInUser
  - getPostComments: onClick property of posts - query the
  comments table for comments related to selectedPost
  - Sort posts and comments in reverse chronological order
  - Components needed:
  - LoggedInUser
  - ShowUserPosts
  - ShowPostComments
  */

 // * * * * * * Testing Post * * * * * * *
    // const getLoggedInUser = () => {
      
    // }
    // const getPostCreatorInfo = (allForumPosts) => {
    //   const postUserId = allForumPosts.map(post =>{
    //     console.log('allForumPosts.map',post.userId)
    //     post.userId
    //   })
    //   return allForumUsers.find((user) => {
    //     user.id === postUserId
    //   })
    // }
    


  return (
    <div className='forum'>
      <div>
        {/* <h1 className='forum-header'>Forum</h1> */}
        {/* <img className = "logo2 nav-item"src ={Logo2} alt='logo pic'/> */}
      </div>
      <div className="forum-content">
        <div className="aside">
          <div className='post-index-container'>
            <h4>Aside</h4>
            <ul className="post-index-filter">
              <li className='label'>Select:</li>
              <li className="post-filter-item all-posts">All Posts</li>
              <li className="post-filter-item friends-posts">Friends</li>
              <li className="post-filter-item my-posts">My Posts</li>
            </ul>
            <ul className="post-index-element">
              
            </ul>
          </div>
        </div>

          <div className="post-detail">
              <div>
              {currentUser.map((user) => (
                <li>remove later: {user.id} {user.fname} {user.lname}</li>
              ))}
              </div>
            <div>
              <h3>Forum Post Detail</h3>
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
                    </span>
                  </div>
                  <div className='post-card-comment-row'>
                    {/* {allForumComments.map((comment) => (
                    <p className='post-card-comment'>{comment.content}</p>
                   ))} */}
                    {allForumComments.map((comment) => {
                      if (comment.post_id === post.id) {
                        return (
                          <span className='post-card-comment' key ={comment.id}>{comment.content}</span>
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
              
             
           
              {/* <ul className="post-actions">
                <li className='label'>Select:</li>
                <li className="post-actions-item all-posts">View</li>
                <li className="post-actions-item friends-posts">New</li>
                <li className="post-actions-item my-posts">Delete</li>
              </ul> */}
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

/* * * * * * 
1. Default forum view shows all posts in reverse chronological order, with a thumbnail of poster's image or their 1st and last initial
2. user selects between view of "Friends" posts, "My" posts and the default "All"
3. Initial Query gets all posts
4. Keep track of the current user so that "Friends" posts and "My" will work
5. Feature: Show comments related to selected posts
6. Feature: Create posts
7. Feature: Delete post
8. Feature: Create Comments
9. Feature: Delete Comments
10. Hovering over thumbnail will show their name (and or image -- may be a future feature)

let data = [ 
  {'id':'1, info: 'a'}, 
  {'id': 2, 'info': 'b'}, 
  {'id': 3, info: 'c'}, 
  {'id': 4, 'info': 'd'}, 
  {'id': 5, 'info': 'e'}
]; 
let dataB = [
  {'id':'1, info: 'able'}, 
  {'id': 2, 'info': 'beta'}, 
  {'id': 3, info: 'chi'}, 
  {'id': 4, 'info': 'delta'}, 
  {'id': 5, 'info': 'epsilon'}
]; 

let view = data.map((element) =>{dataB.map((datab) => {
  (return 

}
* * * 
*/