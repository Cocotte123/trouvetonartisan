import React, { useContext } from "react";
import '../components/FicheArtisan.css';
import { ListeContext } from "../context/ListeContext";
import { useParams } from "react-router-dom";


const FicheArtisan = () => {
    const {Artisans} = useContext(ListeContext);
    const {artisanId} = useParams();
    const artisan = Artisans.find((e)=>e.id === artisanId);
    return(
        <div>
            <h1>{artisan.name}</h1>
            <p>{artisan.specialty}</p>
            <p>{artisan.note}</p>
        </div>
    )           
}

export default FicheArtisan;