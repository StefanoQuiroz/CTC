import React, { createContext, useState, useEffect } from 'react';
import About from '../components/About/About';
import NavBar from '../components/NavBar/NavBar';
import axios from 'axios';
import Courses from '../components/Courses/Courses';
import Footer from '../components/Footer/Footer';
export const MyContext = createContext();


export default function Main() {
  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get('https://ctc-backend-staging.herokuapp.com/api/courses/')
        .then(response => setData(response.data))
  },[]);

  console.log(data);

  return (
    <div>
      <MyContext.Provider value = {{data,setData}}>
        <NavBar/>
        <About/>
        <Courses/>
      </MyContext.Provider>
      <Footer/>
    </div>
  )
}