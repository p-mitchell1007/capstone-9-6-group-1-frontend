<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import Forum from './Forum'

const Post = ({ post, index }) => {
  return (
    <div>
      <p>'This is a post'</p>
      console.log('this is a post')
=======

=======
import './Post.css'
>>>>>>> 5ad89841 (Progress with forum, edit-post, postShow)
function Post (props) {

  return (
    <div className="post">
<<<<<<< HEAD
      <h3>{props.post.title}</h3>
      <p>{props.post.content}</p>
>>>>>>> 2418cfed (updates to Forum,Home, Navbar and Post)
=======
      <h4>User Id: {props.post.user_id}</h4>
      <h3>Title: {props.post.title}</h3>
      <p>Content: {props.post.content}</p>
>>>>>>> 5ad89841 (Progress with forum, edit-post, postShow)
    </div>
  )
}

<<<<<<< HEAD
export default Post
=======
export default Post;
>>>>>>> 2418cfed (updates to Forum,Home, Navbar and Post)
