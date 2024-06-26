import React, {useRef} from "react";
import '../../components/Contact/Contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
            publicKey: process.env.REACT_APP_PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
      console.log(process.env)

    return (
            <div id="ficheArtisanContact">
                <h2>Contact</h2>
                <form id="ficheArtisanFormContact" ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Nom" name="prospectName" required />
                    <input type="email" placeholder="Mail" name="prospectMail" required />
                    <input type="text" placeholder="Objet" name="prospectObject" required />
                    <textarea name="propsectMessage" placeholder="Message" cols="30" rows="10"/>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
    )
           
}

export default Contact;