
function PostIndex (props) {

  return (
    <div className="post-index">
      <ul>
      <li>{props.post.user_id} {props.post.title} </li>
      </ul>
    </div>
  )
}

export default PostIndex;