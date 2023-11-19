import { Link } from "react-router-dom";
import './NavBar.css'
import Logo from "../assets/logo.png"
import Forum from '../pages/Forum'

export default function NavBar() {
  return (
<div className="nav_bar">
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
  <nav>
    <ul className="nav_links">
    <li><a href ="/mission"> Mission</a> </li>
    <li> <Link to ="/about"> About </Link> </li>
    <li> <Link to ="/posts"> Forum </Link> </li>
    </ul>
  </nav>
  <a className="button" href="/contact"><button> Contact</button></a>
>>>>>>> 2418cfed (updates to Forum,Home, Navbar and Post)
</div>
  );
}