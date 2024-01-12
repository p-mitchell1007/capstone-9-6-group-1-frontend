import './ShowPostComments.css'

function ShowPostComments (props) {

const getMonthDay = (date) => {
  const dateString = date;
  const dateObject = new Date(date);
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  return(`${month}/${day}`)
}

  return (
    <div className="show-post-comments">
      {console.log(props)}
      <span className="comment-item">Response to post #{props.post_id} || Comment id: {props.id} || commentMade: {getMonthDay(props.comment_made)}<br></br>
      Content:  {props.content}</span>
    </div>
  )
}

export default ShowPostComments;