import { Link } from "react-router-dom";
import './NavBar.css'
import Logo from "../assets/logo.png"

function NavBar() {
  return (
<div className="nav_bar">

<Link to={`/`}>
{<img className="logo" src={Logo} alt="Logo" />}
</Link>
  <nav>
    <ul className="nav_links">
      <li> <a href ="/home"> Home</a></li>
      <li> <a href ="/forum"> Forum</a> </li>
      <li> <a href ="/about"> About </a> </li>
      {/* <li> <a href ="/mission"> Mission</a> </li> */}
      <li> <a href ="/contact"> Contact</a></li>
    </ul>
  </nav>
</div>  );
}

export default NavBar;