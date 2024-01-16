import defaultUser from "../assets/default-user.png"
import "../components/NewComment.css"


function NewComment () {

  
  return (
    <div className="new-comment">
      <form action="submit" method="post">
        <input type="text" name="user-id" placeholder="2" id="user-id" />
        <input type="text" name="post_id" placeholder="2" id="post_id" />
        <input type="text" name="content" placeholder="2" id="content" />
        <button type="submit"></button>
      </form>
    </div>
  )
}

export default NewComment;