// import defaultMale from "../assets/default-male.png"
// import defaultFemale from "../assets/default-female.png"

import './Post.css'

function Post ({post}) {

  return (
    <div className='post' key={post.id}>
      <span className="post-item">
            <span 
              className='post-card-title'>{post.title}
            </span>
            <span className="post-card-content">
              {post.content}
            </span>
          </span>
    </div>
  )
}

export default Post;
