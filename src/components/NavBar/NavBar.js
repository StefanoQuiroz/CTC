import React, {useState,useEffect} from 'react';
import Logo from '../../images/logo.PNG';
import { MainLayout } from '../../styles/Layouts';
import { IoIosMenu } from "react-icons/io";
import './NavBar.css';

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () =>{
    setToggleMenu(!toggleMenu);
  }

  useEffect(()=>{
    const changeWidth = () =>{
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize',changeWidth);

    return ()=>{
      window.removeEventListener('resize',changeWidth);
    }
  },[]);

  return (
    <MainLayout className = "navbar">
      <div className = "navbar--image">
        <img src={Logo} alt="logo"/>
      </div>
      {
        (toggleMenu || screenWidth > 500) && (
          <ul className = "navbar-tems">
            <li><a href="#footer">Nosotros</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#footer">Contactanos</a></li>
          </ul>
        )
      }
     
      <button onClick={toggleNav}><IoIosMenu className="navbar--btn"/></button>
    </MainLayout>
  )
}