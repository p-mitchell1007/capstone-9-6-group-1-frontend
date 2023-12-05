function PostShow (props) {

  
  return (
    <div className="post-show">
      <ul>
        <li><p>User Id: {props.post.user_id}</p></li>
        <li><p>Include user image </p></li>
        <li><p>Title: {props.post.title}</p></li>
        <li><p>Content: {props.post.content}</p></li>
      </ul>
      
    </div>
  )
}

export default PostShow;
