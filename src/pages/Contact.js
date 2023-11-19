

import "./Contact.css"
import {useRef} from "react";
import emailjs from '@emailjs/browser';

function Contact (){

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fqrvf1i', 'template_egywkod', form.current, 'kdP-mfHFFsGk8L30n')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

    return(
        <section>
       
        <h2 className="page_title">Contacting Reflections</h2>
        <form ref= {form} onSubmit={sendEmail} className="contact-form">
        <input type ="text" placeholder="Name" name ="user_name" required/>
        <input type ="email" placeholder="Email" name ="user_email" required/>
        <textarea placeholder="Type your message here" name ="message" required />
        <input type ="file"  />
        <input className="submit-button" type ="submit"/> 
         </form>
       

        </section>

    )



    
}

export default Contact;