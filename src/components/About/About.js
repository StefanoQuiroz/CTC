import React from 'react';
import kidsImage from '../../images/kids.jpeg';
import './About.css';

export default function About() {
  return (
    <div className = "container">
        <div className ="container--left">
            <h1>Cursos de programação on-line para crianças e adolescentes</h1>
            <p>Deixe-os se tornarem criadores de tecnologia! Nós ensinamos a linguagem do futuro enquanto eles aprendem, brincam e se divertem.</p>
            <button><a href="#cursos"Ver>Cursos</a></button>
        </div>
        <div className ="container--right">
          <img src={kidsImage} alt="kids"/>
        </div>
    </div>
  )
}