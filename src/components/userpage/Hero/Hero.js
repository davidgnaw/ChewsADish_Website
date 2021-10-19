import React, { useState } from "react";
import { Link } from 'react-router-dom'




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
          
            <Link to="/UserProfile">
          <button variant="outlined">
          User Settings
           </button>
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
