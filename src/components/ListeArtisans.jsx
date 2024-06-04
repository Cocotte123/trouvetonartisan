import React, { useContext, useState } from "react";
import '../components/ListeArtisans.css';
/*import Artisans from '../datas/datas.json';*/
import { ListeContext } from "../context/ListeContext";
import { Link } from "react-router-dom";



const ListeArtisans = (props) => {
    const {Artisans} = useContext(ListeContext);
    

    return(
        <div>
            <h1>{props.category}</h1>
            <p>{props.queryArtisan}</p>
            <div>
                {Artisans.filter(artisan=>artisan.name.toLowerCase().includes(props.queryArtisan.toLowerCase()) ||
                        artisan.specialty.toLowerCase().includes(props.queryArtisan.toLowerCase()) ||
                        artisan.location.toLowerCase().includes(props.queryArtisan.toLowerCase()) ).map((artisan)=>{
                    if(props.category===artisan.category)
                    {
                       return(
                            <Link to={`/artisan/${artisan.id}`} key={artisan.id}>
                            {artisan.name}
                            </Link>
                        )
                    } 
                    else 
                    {
                        return null;
                    }
                    }
                    )
                   }
            </div>
        </div>
    );
}

export default ListeArtisans;