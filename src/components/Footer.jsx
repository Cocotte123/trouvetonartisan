import React from "react";
import '../components/Footer.css';
import { GiPositionMarker } from "react-icons/gi";
import { FaPhone } from "react-icons/fa";


const Footer = () => {
    const styleIcon = { color: "#F1F8FC", fontSize: "2em" }

    return (
        <footer>
            <div id="adressContainer">
                <h3>Lyon</h3>
                <address>
                    <GiPositionMarker style={styleIcon} />
                    <div id="adressDetails">
                    <p>101 cours Charlemagne</p>
                    <p>CS 20033</p>
                    <p>69 269 LYON CEDEX 02</p>
                    <p>France</p>
                    </div>
                </address>
                <div id="phoneNumber">
                <FaPhone style={styleIcon} />
                <p id="phoneNumberDetail">+33 (0)4 26 73 40 00</p>
                </div>
            </div>
            <div id="menu" class="container">
                <a href="#">Mentions légales</a>
                <a href="#">Données personnelles</a>
                <a href="#">Accessibilité</a>
                <a href="#">Cookies</a>
            </div>

        </footer>
    )
           
}

export default Footer;