import React, { useContext, useState } from 'react';
import { MyContext } from '../../views/Main';
import course from '../../images/course.jpg';
import CardCourse from '../CardCourse/CardCourse';
import { AiOutlineSearch } from "react-icons/ai";
import './Courses.css';

export default function Courses() {
    const {data} = useContext(MyContext);
    const [busqueda, setBusqueda] = useState("");

    return (  
    <div className="coursesContainer" id="cursos">
        <div className="coursesContainer--header">
        <h2>Informe-se sobre nossos cursos!</h2>
        <div className="coursesContainer--header--searchBar">
            <input 
                type="text" 
                placeholder="Pesquisar..."
                className= "coursesContainer--header--input"
                name="busqueda"
                value={busqueda}
                onChange={(event) => setBusqueda(event.target.value)}
            />
            <AiOutlineSearch className="coursesContainer--header--icon"/>
        </div>
        </div>
        <div className = "coursesContainer--courseList">
        {
        data && data.filter((val) => {
            if(val.name.includes(busqueda) || val.name.toLowerCase().includes(busqueda) || val.duration.includes(busqueda)){
                return val;
            }
        }).map((item,index)=>(
            <CardCourse 
                key={index} 
                /* image={item.thumbnail} */ 
                image={course}
                range={item.age_range} 
                title={item.name}
                slug={item.slug}
                duration={item.duration}
                cost={item.amount_usd}
                date={item.next_start_date}
            />
        ))
        }
        </div>    
    </div>
    )
}