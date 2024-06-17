import React, { useContext } from "react";
import '../components/FicheArtisan.css';
import { ListeContext } from "../context/ListeContext";
import { useParams } from "react-router-dom";
import Star from '../components/Star';
import { AiTwotoneShop } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";

const FicheArtisan = () => {
    const {Artisans} = useContext(ListeContext);
    const {artisanId} = useParams();
    const artisan = Artisans.find((e)=>e.id === artisanId);
    const website = artisan.website;
    return(
        <div id="ficheArtisanContainer">
            <h1>{artisan.name}</h1>
            <div id="ficheArtisanDetails">
                <div id="ficheArtisanStar">
                    <Star note={artisan.note}/>
                </div>
                <p>{artisan.note}</p>
                <div id="ficheArtisanData">
                <p><AiTwotoneShop /> {artisan.specialty}</p>
                <p><BsGeoAlt /> {artisan.location}</p>
                {website.length > 0
                    ? <p><a href="#"><SiMaildotru /> {artisan.website}</a></p>
                    :<p><SiMaildotru /> Pas de site internet</p>
                }
                
                </div>               
            </div>
            <div id="ficheArtisanAbout">
                <h2>A Propos</h2>
                <p>{artisan.about}</p>
            </div>
            <div id="ficheArtisanContact">
                <h2>Contact</h2>
                <form id="ficheArtisanFormContact">
                    <input type="text" placeholder="Nom" name="prospectName" required />
                    <input type="email" placeholder="Mail" name="prospectMail" required />
                    <input type="text" placeholder="Objet" name="prospectObject" required />
                    <textarea name="propsectMessage" placeholder="Message" cols="30" rows="10"/>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )           
}

export default FicheArtisan;