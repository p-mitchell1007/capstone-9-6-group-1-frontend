import { Link } from "react-router-dom";
import './Home.css'
import NavBar from "./NavBar"

export default function Home() {
  return (
    <div className='home-page'>
      <h1>Home Page</h1>
      <ul>
        <li>Home Page Item1</li>
        <li>Home Page Item2</li>
        <li>Home Page Item3</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

