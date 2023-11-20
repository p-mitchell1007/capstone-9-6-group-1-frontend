
function PostIndex (props) {

  return (
    <div className="post-index">
      <p>User Id: {props.post.user_id}</p>
      <p>Title: {props.post.title}</p>
    </div>
  )
}

export default PostIndex;