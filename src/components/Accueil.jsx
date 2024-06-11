import React from "react";
import '../components/Accueil.css';
import Artisans from '../datas/datas.json';
import { Link } from "react-router-dom";
import Star from '../components/Star';
import { AiTwotoneShop } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";

const Accueil = () => {
    const topArtisans = Artisans.filter(artisan =>
        artisan.top === true
      );
    
    
      

    const listTopArtisans = topArtisans.map(artisan =>

        <Link to={`/artisan/${artisan.id}`} key={artisan.id}>
            
                    <div  class="card text-center" id="artisanCard">
                        <div class="card-body">
                        <h5 class="card-title">{artisan.name}</h5>
                        <div id="topArtisanStar">
                            <Star note={artisan.note}/>
                        </div>
                        <p class="card-text">{artisan.note}</p>
                        <p class="card-text"><AiTwotoneShop /> {artisan.specialty}</p>
                        <p class="card-text"><BsGeoAlt /> {artisan.location}</p>
                        </div>
                    </div>
                
            
        </Link>
    )

    return (<div id="accueilPage">
            <div id="explanationContainer">
                <h1>Comment trouver mon artisan ?</h1>
                <div id="explanationText" class='mx-auto'>
                    <p>1. Choisir la catégorie d’artisanat dans le menu</p>
                    <p>2. Choisir un artisan</p>
                    <p>3. Le contacter via le formulaire de contact</p>
                    <p>4. Une réponse sera apportée sous 48h</p>
                </div>
                
            </div>
            <div id="artisansMoisContainer">
                <h2>Nos trois artisans du mois</h2>
                <div id="cartContainer">
                    <div class="row">
                        <div class="col cards">
                            {listTopArtisans}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        



        );
           
}

export default Accueil;