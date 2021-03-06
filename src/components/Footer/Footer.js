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
          <li><a href="#A">Nós</a></li>
          <li><a href="#A">Benefícios</a></li>
          <li><a href="#A">Contato</a></li>
          <li><a href="#A"></a>Blogue</li>
        </ul>
        
        <ul>
          <h3>CURSOS POPULARES</h3>
          <li><a href="#A">Programação Python</a></li>
          <li><a href="#A">Desenvolvimento de videogames</a></li>
          <li><a href="#A">Edição de vídeo</a></li>
          <li><a href="#A">Aprendendo com o Minecraft</a></li>
        </ul>

        <ul className="redes">
          <h3>Siga-nos em redes</h3>
          <li><a href="https://www.facebook.com/crackthecode.la"><AiFillFacebook className="icon"/></a></li>
          <li><a href="https://www.instagram.com/crackthecode.la/"><AiFillInstagram className="icon"/></a></li>
          <li><a href="https://www.linkedin.com/company/crack-the-code-per%C3%BA/"><AiFillLinkedin className="icon"/></a></li>
          <li><a href="https://www.tiktok.com/@crackthecodelatam?lang=es"><IoLogoTiktok className="icon"/></a></li>
        </ul>

        <p>©2021 Stefano Quiroz para Crack the Code. Todos os direitos reservados.</p>
      </div>
    </div>
  )
}