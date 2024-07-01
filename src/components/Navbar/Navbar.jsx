import React from "react";
import '../../components/Navbar/Navbar.css';
import { NavLink } from "react-router-dom";
import Logo from '../../images/Logo.png';
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
                
            <nav  className="navbar navbar-expand-lg">
            <div className="container-fluid">
               
                <NavLink to='/' id="logo"><img src={Logo} alt="logo" /></NavLink>
                <button className="navbar-toggler custom-toggler ml-auto " data-bs-toggle="collapse" data-bs-target="#linkContainer" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="linkContainer">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <NavLink to='/batiment' className="nav-link" style={navLinkStyles}>Bâtiment</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/fabrication' className="nav-link" style={navLinkStyles}>Fabrication</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/services' className="nav-link" style={navLinkStyles}>Services</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to='/alimentation' className="nav-link" style={navLinkStyles}>Alimentation</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <form action="submit" id="searchContainer" className="wrapper">
                    <input id="searchInput" type="text"  onChange={handleChange} placeholder="Filtrer par nom, spécialité ou ville"></input>
                    <div className="icon"><FaSearch /></div>
                    
            </form>
        </header>
    )
}

export default Navbar;

            