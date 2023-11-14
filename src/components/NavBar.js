import { Link } from "react-router-dom";
import './NavBar.css'
import Logo from "../assets/logo.png"
export default function NavBar() {
  return (
<div className="nav_bar">
<Link to={`/`}>
<img className = "logo" src ={Logo}/> 
</Link>
<nav>
<ul className="nav_links">
<li><a href ="/mission"> Mission</a> </li>
<li> <Link to ="/about"> About </Link> </li>
</ul>
</nav>
<a className="button" href="/contact"><button> Contact</button></a>
</div>
  );
}