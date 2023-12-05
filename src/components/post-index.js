import './post-index.css'
import defaultMale from "../assets/default-male.png"
import defaultFemale from "../assets/default-female.png"

function PostIndex (props) {

  return (
    <div>
      <span className='profile-img'>
        <defaultMale />
      </span>
      <span className="post-index-item">{props.post.user_id} {props.post.title} </span>
    </div>
  )
}

export default PostIndex;