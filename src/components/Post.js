
function Post (props) {

  return (
    <div className="post">
      <h3>{props.post.title}</h3>
      <p>{props.post.content}</p>
    </div>
  )
}

export default Post;