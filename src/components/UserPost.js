import React, { useState, useEffect } from "react";
import axios, { all } from "axios";

import defaultUser from "../assets/default-user.png"

import './UserPost.css'

const API = process.env.REACT_APP_API_URL;


function UserPost ({post, allUsers}) {

  const [comments, setComments] = useState([])
  const [showCommentForm, setShowCommentForm] = useState(false)

  useEffect(() => {
    axios
      .get(`${API}/comments/${post.id}`)
      .then((response) => {
        setComments(response.data)
      })
      .catch((e) => console.error("catch", e));
    }, [])

  const formatDate = (date) => {
    const dateObj = new Date(date)
    const month = dateObj.getMonth() + 1
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()
    const formattedDate = `${month}/${day}/${year}`
    return formattedDate
  }

  for(const comment of comments) {
    const {fname, lname} = allUsers.find((user) => user.id === comment.user_id)
    comment.author = `${fname} ${lname}`
  }

  return (
    <div className="user-post">
     
      <div className="user-post__author">
        <div style={{"display": "flex", "alignItems":"center"}}>
          <img 
            className="user-post__author-img" 
            src={defaultUser}
            alt="user profile"
          />
          <span>Posted by: {post.user}</span>
        </div>
        <ul className="user-post__post-nav">
          <li className="user-post__post-nav__item">New Post</li>
          <li className="user-post__post-nav__item">My Post</li>
          <li className="user-post__post-nav__item">All Post</li>
        </ul>
        <span>Posted on: {formatDate(post.post_made)}</span>
      </div>
      <div className='user-post__title'>
        {post.title}
      </div>
      <div className='user-post__content'>
        {post.content}
      </div>
      <div className='user-post__comments'>
        {comments.map((comment) => {
          return (
            <div className='user-post__comment'>
               <div className="user-post__author">
                <div style={{"display": "flex", "alignItems":"center"}}>
                  <img 
                    className="user-post__author-img" 
                    src={defaultUser}
                    alt="user profile"
                  />
                  <span>{comment.author || "Steve Chen"}</span>
                </div>
                <span>{formatDate(comment.comment_made)}</span>
              </div>
              <span className='user-post__comment-content'>{comment.content}</span>
            </div>
          )
        })}
        <div className="user-post__comment-btn-container">
          <button 
            className="user-post__comment-btn" 
            onClick={() => setShowCommentForm(!showCommentForm)}
            style={{"display": showCommentForm ? "none" : "block"}}
          >
            New Comment
          </button>
        </div>
        <div className="user-post__comment-form" style={{"display": showCommentForm ? "block" : "none"}}>
          <form>
            <textarea className="user-post__comment-input" placeholder="Add a comment..."></textarea>
            <button className="user-post__comment-btn">Add Comment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserPost;