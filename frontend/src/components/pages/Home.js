import React from 'react';
import '../../App.css';
import Poster from '../Poster';
import Card from '../Card';
import Search from '../Search';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {


  return (
    <>
      <Poster />
      
    
            
      <Card />

        <Link to='/Recipes'>
          <div className='center'>
            <h2>All Recipes</h2>
          </div>
        </Link>
        <div className='center'>
          <br></br>
          <br></br>
        </div>
        <div className='center'>
        <Link to='/Search'>
          <h2>Look for a Recipe</h2>
        </Link>
      </div>
      <div className='center'>
          <br></br>
          <br></br>
        </div>

    </>
  );
}

export default Home;