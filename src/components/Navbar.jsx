import React from "react";
import '../components/Navbar.css';
/*import Artisans from '../datas/datas.json';*/
import { Link } from "react-router-dom";




const Navbar = ({handleChange}) => {
    /*const [queryArtisan, setQueryArtisan] = useState("");
    const handleChange = (event) => {
        setQueryArtisan(event.target.value);
    }*/
    /*const  handleSubmit = (event) => {
        event.preventDefault(); 
        setQueryArtisan("");
    };*/
    
    return (
        <nav>
            <form action="submit">
                <input type="text" placeholder="Rechercher" onChange={handleChange}></input>
                
            </form>
            <Link to='/'>Accueil</Link>
            <Link to='/batiment'>Bâtiment</Link>
            <Link to='/fabrication'>Fabrication</Link>
            <Link to='/services'>Services</Link>
            <Link to='/alimentation'>Alimentation</Link>
            
        </nav>
    )
}

export default Navbar;

/*<ul>
<li onClick={()=>{setMenu("batiment")}}><Link to='/batiment'>Bâtiment</Link></li>
                <li onClick={()=>{setMenu("fabrication")}}><Link to='/fabrication'>Fabrication</Link></li>
                <li onClick={()=>{setMenu("services")}}><Link to='/services'>Services</Link></li>
                <li onClick={()=>{setMenu("alimentation")}}><Link to='/alimentation'>Alimentation</Link></li>
</ul>
                */                