
function PostIndex (props) {
  

  return (
    <div className="post-index">
      <li>{props.post.user_id} {props.post.title} </li>
    </div>
  )
}

export default PostIndex;