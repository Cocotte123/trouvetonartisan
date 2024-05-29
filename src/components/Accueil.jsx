import React from "react";
import '../components/Accueil.css';
import Artisans from '../datas/datas.json';



const Accueil = () => {
    const topArtisans = Artisans.filter(artisan =>
        artisan.top === true
      );
    const listTopArtisans = topArtisans.map(artisan =>

        <div key={artisan.id}>{artisan.name}</div>
    )

    return <ul>{listTopArtisans}</ul>;
           
}

export default Accueil;