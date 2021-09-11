import React from 'react';
import './Footer.css';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import darkLogo from '../../images/black-logo.PNG';

export default function Footer() {
  return (
    <div className="footer-container" id="footer">
      <img src={darkLogo} alt="darkLogo"/>
      <div className="footer-container--information">
        <ul>
          <li><a href="#A">Nosotros</a></li>
          <li><a href="#A">Beneficios</a></li>
          <li><a href="#A">Contacto</a></li>
          <li><a href="#A">Block</a></li>
        </ul>
        
        <ul>
          <h3>CURSOS POPULARES</h3>
          <li><a href="#A">Programacion en Python</a></li>
          <li><a href="#A">Desarrollo de Videojuegos</a></li>
          <li><a href="#A">Edicion de videos</a></li>
          <li><a href="#A">Aprender con Minecraft</a></li>
        </ul>

        <ul className="redes">
          <h3>Siguenos en redes</h3>
          <li><AiFillFacebook className="icon"/></li>
          <li><AiFillInstagram className="icon"/></li>
          <li><AiFillLinkedin className="icon"/></li>
          <li><IoLogoTiktok className="icon"/></li>
        </ul>

        <p>©2021 Stefano Quiroz for Crack the Code. All Rights Reserved.</p>
      </div>
    </div>
  )
}