import './ShowPostComments.css'

function ShowPostComments (props) {

  return (
    <div className="show-post-comments">
      {console.log(props)}
      <span className="comment-item">id: {props.id} Response to post #{props.post_id}  Content:  {props.content}</span>
    </div>
  )
}

export default ShowPostComments;