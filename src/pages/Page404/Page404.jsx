import React from "react";
import '../../pages/Page404/Page404.css';
import ImagePage404 from '../../images/404.jpg';




const Page404 = () => {
    return (
        <div id="page404">
            <h1>404</h1>
            <img src={ImagePage404} alt="Téléphone cassé"/>
            <a href='/' id="retour"  role="button">Retour à l'accueil</a>
        </div>
    )
           
}

export default Page404;