import { Link } from "react-router-dom";
import './NavBar.css'
import Logo from "../assets/logo.png"
import Logo2 from "../assets/logo2.png"
import Forum from './Forum'

export default function NavBar() {
  return (
<div className="nav_bar">
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
</div>
  );
}