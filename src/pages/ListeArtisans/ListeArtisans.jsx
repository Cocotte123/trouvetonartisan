import React, { useContext } from "react";
import '../../pages/ListeArtisans/ListeArtisans.css';
import { ListeContext } from "../../context/ListeContext";
import { Link } from "react-router-dom";
import Star from '../../components/Star/Star';
import { AiTwotoneShop } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";



const ListeArtisans = (props) => {
    const {Artisans} = useContext(ListeContext);
    

    return(
        <div id="listeArtisansPage">
            
            <h1>Nos artisans en {props.category}</h1>
            <div id="cartListeArtisansContainer">
                <div className="row">
                    <div className="col cards">
                        {Artisans.filter(artisan=>artisan.name.toLowerCase().includes(props.queryArtisan.toLowerCase()) ||
                                artisan.specialty.toLowerCase().includes(props.queryArtisan.toLowerCase()) ||
                                artisan.location.toLowerCase().includes(props.queryArtisan.toLowerCase()) ).map((artisan)=>{
                            if(props.category===artisan.category)
                            {
                            return(
                                    <Link to={`/artisan/${artisan.id}`} key={artisan.id}>
                                    <div  className="card text-center" id="artisanListeCard">
                                        <div className="card-body">
                                        <h5 className="card-title">{artisan.name}</h5>
                                        <div id="listeArtisanStar">
                                            <Star note={artisan.note}/>
                                        </div>
                                        <p className="card-text">{artisan.note}</p>
                                        <p className="card-text"><AiTwotoneShop /> {artisan.specialty}</p>
                                        <p className="card-text"><BsGeoAlt /> {artisan.location}</p>
                                </div>
                            </div>
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
            </div>
        </div>
    );
}

export default ListeArtisans;