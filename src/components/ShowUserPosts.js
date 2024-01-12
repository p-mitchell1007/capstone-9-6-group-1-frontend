import './ShowUserPosts.css'

function ShowUserPosts (props) {

  return (
    <div className="show-user-post">
      <span className="small">
        (remove later: PostId: {props.id}) 
      </span>
      <span>
        {props.user_id} {props.title} {props.content}
      </span>
      
    </div>
  )
}

export default ShowUserPosts;