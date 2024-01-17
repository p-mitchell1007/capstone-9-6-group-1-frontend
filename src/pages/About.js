import "./About.css"
import Monir from "../assets/monir.jpg"
import Blanca from "../assets/blanca.jpeg"
import Phillip from "../assets/phillip.jpeg"
import Raymond from "../assets/raymond.jpeg"
function About (){
    return(
        <div className="about">
            <h1 className="about-title"> About Reflections</h1>
            <p> Reflections is a lifeline for parents seeking connection and shared experiences. 
            Join our community and discover the strength that comes from connecting with others who truly understand. 
            Parenthood is a journey best traveled together, and Reflections is your companion on this incredible 
            adventure. </p>

                <section className="dev">
                    <h1>Developers 👩🏼‍💻🧑‍💻</h1>
                        <div className="developers">
                        {/* <ul> */}
                                <div className="blanca">
                                    <img src={Blanca} alt="Blanca's Avatar" />
                                        <a href="https://www.github.com/winterbelle">
                                                <strong>Blanca Altamirano</strong>
                                        </a>
                                </div>

                                <div>
                                    <img src={Monir} alt="Monir's Avatar" />
                                        <a href="https://github.com/monir9h">
                                                <strong>Monir Hossen</strong>
                                        </a>
                                </div>

                                <div>
                                    <img src={Raymond} alt="Raymond's Avatar" />
                                        <a href="https://github.com/raymondjohnson">
                                                <strong>Raymond Johnson</strong>
                                        </a>
                                </div>

                                <div>
                                    <img src={Phillip} alt="Phillip's Avatar" />
                                        <a href="https://github.com/p-mitchell1007">
                                                <strong>Phillip Mitchell</strong>
                                        </a>
                                </div>
                        {/* </ul> */}
                        </div>
                </section>
        </div>
    )
}
export default About;