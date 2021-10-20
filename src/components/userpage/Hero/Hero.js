import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'




import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
 
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      
      
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1> David Wang </h1>
            <h5>Master Chef</h5>
            <p>
              Coding is temporary, cooking is forever.
            </p>
          <br></br>
            <Link to="/UserProfile">
          <Button variant="dark" className="btn-dark">  
          User Settings
           </Button>
            </Link>
            <br></br>
            <Link to="/CreateYourOwnRecipe">
          <Button variant="dark" className="btn-dark">  
          Create your own recipe
           </Button>
            </Link>
  
          
          </HeroLeft>
          <HeroRight>
            <Image
              src="images/chefprofilepic.png"
              alt="chefprofilepic"
            />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
}

export default Hero;
