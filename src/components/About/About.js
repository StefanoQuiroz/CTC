import React from 'react';
import kidsImage from '../../images/kids.jpeg';
import './About.css';

export default function About() {
  return (
    <div className = "container">
        <div className ="container--left">
            <h1>Cursos de programación online para niños, niñas y adolescentes</h1>
            <p>¡Haz que se conviertan en creadores de tecnología! Enseñamos el lenguaje del futuro mientras aprenden, juegan y se divierten.</p>
            <a href="#cursos"><button>Ver cursos</button></a>
        </div>
        <div className ="container--right">
          <img src={kidsImage} alt="kids"/>
        </div>
    </div>
  )
}