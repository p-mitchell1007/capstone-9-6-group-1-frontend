import defaultMale from "../assets/default-male.png"
import defaultFemale from "../assets/default-female.png"
import './CurrentUser.css'

function CurrentUser (props) {

  return (
    <div className="logged-in-user">
      <span className='logged-in-user-img'>
        <img src={defaultFemale} alt="default male image" />
      </span>
      <span className="post-index-item">{props.post.user_id} {props.post.fname} {props.post.lname}</span>
    </div>
  )
}

export default CurrentUser;