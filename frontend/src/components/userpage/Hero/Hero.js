import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
 
} from "./HeroElements";

const Hero = (props) => {
  const userInfo = props.userInfo;

  /*
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  */


  return (
    <main>

      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1> {userInfo.userName} </h1>
            <h5>level: {userInfo.level}</h5>
            <p>
              {userInfo.discription}
            </p>
          <br></br>
            <Link to="/UserProfile">
            </Link>
            <br></br>
            <Link to="/CreateYourOwnRecipe">
          <Button variant="dark" className="btn-dark">  
          Create your own recipe
           </Button>
            </Link>
  
          
          </HeroLeft>
          <HeroRight>
            <h5>
              E-mail:
              {userInfo.email}
            </h5>
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
     
    </main>
  );
}

export default Hero;
