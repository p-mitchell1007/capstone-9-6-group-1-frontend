

import './Post.css'

function Post (props) {

  return (
    <div className="post">
      <h4>User Id: {props.post.user_id}</h4>
      <h3>Title: {props.post.title}</h3>
      <p>Content: {props.post.content}</p>
    </div>
  )
}

export default Post
