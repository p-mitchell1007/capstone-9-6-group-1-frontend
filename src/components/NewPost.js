import defaultUser from "../assets/default-user.png"
import "../components/NewPost.css"

function NewPost () {

  
  return (
    <div className="new-post">
      <form action="submit" method="post">
        <input type="text" name="user-id" placeholder="2" id="user-id" />
        <input type="text" name="title" placeholder="2" id="title" />
        <input type="text" name="content" placeholder="2" id="content" />
        <button type="submit"></button>
      </form>
      
    </div>
  )
}

export default NewPost;