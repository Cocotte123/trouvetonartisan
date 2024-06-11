import React from "react";
import '../components/Navbar.css';
import { NavLink } from "react-router-dom";
import Logo from '../images/Logo.png';
import { FaSearch } from "react-icons/fa";



const Navbar = ({handleChange}) => {
    const navLinkStyles = ({isActive}) => {
        return {
            color: 'white',
            textDecoration: isActive ? 'underline' : 'none',
        }
    }
    
    return (
        <header  id="navbarContainer">
                <form action="submit" id="searchContainer" class="wrapper">
                    <input id="searchInput" type="text" onChange={handleChange}></input>
                    <div class="icon"><FaSearch /></div>
                    
                </form>
            <nav  class="navbar navbar-expand-lg">
            <div className="container-fluid">
               
                <NavLink to='/' id="logo"><img src={Logo} alt="logo" /></NavLink>
                <button class="navbar-toggler custom-toggler ml-auto " data-bs-toggle="collapse" data-bs-target="#linkContainer" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="linkContainer">
                <ul className="navbar-nav ms-auto">
                    <li class="nav-item">
                    <NavLink to='/batiment' class="nav-link" style={navLinkStyles}>Bâtiment</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to='/fabrication' class="nav-link" style={navLinkStyles}>Fabrication</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to='/services' class="nav-link" style={navLinkStyles}>Services</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink to='/alimentation' class="nav-link" style={navLinkStyles}>Alimentation</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
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