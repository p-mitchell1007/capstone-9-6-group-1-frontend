import defaultMale from "../assets/default-male.png"
import defaultFemale from "../assets/default-female.png"

import './Post.css'

function Post (props) {

  return (
    <div className="post">
      <span className="post-detail-img">
        <img src={defaultFemale} alt="default male image" />
      </span>
      <span className="post-detail-content">
        <h4>User Id: {props.post.user_id}</h4>
        <h3>Title: {props.post.title}</h3>
        <p>Content: {props.post.content}</p>
      </span>
    </div>
  )
}

export default Post
