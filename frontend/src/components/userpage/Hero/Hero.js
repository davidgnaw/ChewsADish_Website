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

const Hero = (props) => {
  const Hero = props.userInfo
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>

    {Hero.map((userInfo) => (
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1> {userInfo.userName} </h1>
            <h5>level: {userInfo.level}</h5>
            <p>
              {userInfo.discription}
              Add description...
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
               src={userInfo.userPicture}
               alt="profilepic"

              //template photo
              //src="images/chefprofilepic.png"
              //alt="chefprofilepic"
            />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    )) }
    </main>
  );
}

export default Hero;
