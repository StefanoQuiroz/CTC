import React from 'react';
import './CardCourse.css';

export default function CardCourse({image,range,title,slug,duration,cost,date}) {
  return (
    <div className = "cardContainer">
        <div className ="cardContainer--img">
            <img src={image} alt={title}/>
            <p>{range} anos</p>
        </div>
        <div className ="cardContainer--body">
            <h3>{title}</h3>
            <p>{slug}</p>
            <div className ="cardContainer--body--columns">
              <p>Duração: <span>{parseFloat(duration)} {duration>1?'meses':'mês'}</span></p>
              <p>Custo: <span>${cost}</span></p>
            </div>
            {
              date?<p>Próximo início: <span>{date}</span></p>:''
            }
        </div>
   </div>
  )
}