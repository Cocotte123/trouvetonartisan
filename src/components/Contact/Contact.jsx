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
      

    return (
            <div id="ficheArtisanContact">
                <h2>Contact</h2>
                <form id="ficheArtisanFormContact" ref={form} onSubmit={sendEmail}>
                    
                    <input type="text" placeholder="Nom" name="prospectName" required pattern="[a-zA-Z]+[ ][a-zA-Z]+" maxLength={35} />
                    <span>Champ limité à 35 lettres sans caractères spéciaux.</span>
                    <input type="text" placeholder="Mail" name="prospectMail" required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,3}$" />
                    <span>Adresse mail valide</span>
                    <input type="text" placeholder="Objet" name="prospectObject" maxLength={40} required pattern="[^-,`,$,]+" />
                    <span>Champ limité à 40 lettres sans caractères spéciaux.</span>
                    <textarea name="propsectMessage" placeholder="Message" cols="30" rows="5" maxLength={150}  required pattern="[^-,`,$,]+"/>
                    <span>Champ limité à 150 lettres sans caractères spéciaux.</span>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
    )
           
}

export default Contact;