import { Link } from "react-router-dom";
import './NavBar.css'
import Logo from "../assets/logo.png"
<<<<<<< HEAD
import Forum from '../pages/Forum'
=======
import Logo2 from "../assets/logo2.png"
import Forum from './Forum'
>>>>>>> 5ad89841 (Progress with forum, edit-post, postShow)

export default function NavBar() {
  return (
<div className="nav_bar">
<<<<<<< HEAD
<<<<<<< HEAD
<Link to={`/`}>
{<img className="logo" src={Logo} alt="Logo" />}
</Link>
<nav>
<ul className="nav_links">
<li> <a href ="/articles"> Articles</a> </li>
<li> <a href ="/about"> About </a> </li>
<li> <a href ="/mission"> Mission</a> </li>
<li> <a href ="/contact"> Contact</a></li>
<li style ={{float:"right"}}> <a href ="/signup"> Sign Up</a> </li>
<li style ={{float:"right"}}> <a  href="/login"> Login</a> </li>
</ul>


</nav>
{/* <a className="button" href="/contact"><button> Contact</button></a> */}
=======
  <Link to={`/`}>
  <img className = "logo" src ={Logo}/> 
  </Link>
=======
>>>>>>> 5ad89841 (Progress with forum, edit-post, postShow)
  <nav>
    <img className = "logo nav-item"src ={Logo2}/>
    <ul className="nav_links">
      <li className="nav-item"><Link to={`/`}>Home</Link></li>
      <li className="nav-item"><a href ="/mission"> Mission</a> </li>
      <li className="nav-item"> <Link to ="/about"> About </Link> </li>
      <li className="nav-item"> <Link to ="/posts"> Forum </Link> </li>
    </ul>
  </nav>
  <a className="button" href="/contact"><button> Contact</button></a>
>>>>>>> 2418cfed (updates to Forum,Home, Navbar and Post)
</div>
  );
}