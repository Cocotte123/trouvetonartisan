import React, { useContext } from "react";
import '../components/ListeArtisans.css';
/*import Artisans from '../datas/datas.json';*/
import { ListeContext } from "../context/ListeContext";
import { Link } from "react-router-dom";



const ListeArtisans = (props) => {
    const {Artisans} = useContext(ListeContext);

    return(
        <div>
            <h1>{props.category}</h1>
            <div>
                {Artisans.map((artisan)=>{
                    if(props.category===artisan.category){
                        return(
                            <Link to={`/artisan/${artisan.id}`} key={artisan.id}>
                            {artisan.name}
                            </Link>
                        )
                    }
                    else {
                        return null;
                    }
                }

                )

                }
            </div>
        </div>
    )
}

export default ListeArtisans;