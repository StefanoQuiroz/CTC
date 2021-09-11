import React from 'react';
import './CardCourse.css';

export default function CardCourse({image,range,title,slug,duration,cost,date}) {
  return (
    <div className = "cardContainer">
        <div className ="cardContainer--img">
            <img src={image} alt={title}/>
            <p>{range} años</p>
        </div>
        <div className ="cardContainer--body">
            <h3>{title}</h3>
            <p>{slug}</p>
            <div className ="cardContainer--body--columns">
              <p>Duración: <span>{parseFloat(duration)} mes{duration>1?'es':''}</span></p>
              <p>Costo: <span>${cost}</span></p>
            </div>
            {
              date?<p>Proximo inicio: <span>{date}</span></p>:''
            }
        </div>
   </div>
  )
}