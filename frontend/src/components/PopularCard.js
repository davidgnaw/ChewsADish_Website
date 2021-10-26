import React from 'react';
import './Card.css';
import CardItem from './Carditem';
import { Link } from 'react-router-dom';

function PopularCards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/png1.png'
              text='The Japanese takes delight in grilling indoor by making Teppanyaki (鉄板焼き) at home.'
              label='Japanese'
              path='/Teppanyaki'
            />
            <CardItem
              src='images/img12.jpg'
              text='Borscht soup is a popular soup in Eastern Europe and many versions of Borscht Soup recipes (罗宋汤) can be found online.  '
              label='Italian'
              path='/BorschtSoup'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img13.jpg'
              text='Learn how to make Seared Scallops with a perfectly golden brown crust, just like at the restaurants! They’re incredibly simple to make at home and much cheaper than dining out. '
              label='French'
              path='/SearedScallops'
            />
            <CardItem
              src='images/img14.jpg'
              text='Tempura is a typical Japanese dish usually consisting of seafood, meat and vegetables that have been battered and deep fried.'
              label='Japanese'
              path='/Tempura'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img15.jpg'
              text='Dhansak is a traditional parsi recipe Usually served with brown rice. '
              label='Indian'
              path='/Dhansak'
            />
            <CardItem
              src='images/img16.jpg'
              text='"Singapore"-style noodles is a dish of stir-fried cooked rice vermicelli, curry powder, vegetables, scrambled eggs and meat, most commonly chicken, beef, char siu pork, or prawns, yellow in colour.'
              label='Singapore'
              path='/SingaporeNoodles'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PopularCards;