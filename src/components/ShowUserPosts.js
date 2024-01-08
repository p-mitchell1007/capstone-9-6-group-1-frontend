import './ShowUserPosts.css'

function ShowUserPosts (props) {

  return (
    <div className="show-user-post">
      <span className="post-index-item">{props.posts.user_id} {props.posts.title} </span>
      <span>

      </span>
    </div>
  )
}

export default ShowUserPosts;