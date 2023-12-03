import "./About.css"
import Monir from "../assets/monir.jpg"
import Blanca from "../assets/blanca.jpeg"
import Phillip from "../assets/phillip.jpeg"
import Raymond from "../assets/raymond.jpeg"
function About (){
    return(
        <div clssName="about">
            <h1> About us</h1>
            <p> An application that allows expecting/current parents and professional counselors 
                to come together. It helps you connect with other expecting/current parents through 
                a chat/forum, has addition resources for parent dealing with stress, postpartum depression, 
                and other related issues that come with having a family. It also provides users with therapists 
                to work with for effectively dealing with postpartum issues.

                <section className="dev">
                    <h1>Developers:🧑‍💻</h1>
                        <ul>
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
                        </ul>
                </section>
            </p>
        </div>
    )
}
export default About;