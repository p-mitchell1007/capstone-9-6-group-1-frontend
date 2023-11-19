<<<<<<< HEAD
import { Link } from 'react-router-dom';
import Forum from './Forum'

const Post = ({ post, index }) => {
  return (
    <div>
      <p>'This is a post'</p>
      console.log('this is a post')
=======

function Post (props) {

  return (
    <div className="post">
      <h3>{props.post.title}</h3>
      <p>{props.post.content}</p>
>>>>>>> 2418cfed (updates to Forum,Home, Navbar and Post)
    </div>
  )
}

<<<<<<< HEAD
export default Post
=======
export default Post;
>>>>>>> 2418cfed (updates to Forum,Home, Navbar and Post)
