import React, { useState } from "react";

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
