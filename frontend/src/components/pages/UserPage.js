import React from 'react';
import '../../App.css';
import { useEffect, useState } from "react"

import Hero from "../userpage/Hero/Hero";
import Projects from "../userpage/Projects/Projects";


const UserPage = () => {
  const [userInfo, setuserInfo] = useState(null);


  useEffect(() => {
      fetch('http://localhost:3456/api/userInfo')
          .then(res => {
              return res.json();
          })
          .then(data => {
              setuserInfo(data)
          })
  }, []);

  return (
    <>
      { userInfo && <Hero userInfo =  {userInfo}/> }
      { userInfo && <Projects userInfo = {userInfo}/> }
    </> 
  );
}

export default UserPage;