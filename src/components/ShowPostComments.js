import './ShowPostComments.css'

function ShowPostComments (props) {

  return (
    <div className="show-post-comments">
      <span className="post-index-item">{props.content} </span>
    </div>
  )
}

export default ShowPostComments;