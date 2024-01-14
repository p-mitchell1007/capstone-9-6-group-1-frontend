import defaultUser from "../assets/default-user.png"
import defaultFemale from "../assets/default-female.png"
import './CurrentUser.css'

function CurrentUser (props) {

  return (
    <div className="logged-in-user">
      <span className='logged-in-user-img'>
        (remove later: UserId: {props.id}) </span>
      <span>
        {props.fname} {props.lname}
      </span>
    </div>
  )
}

export default CurrentUser;