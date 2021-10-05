import React from 'react';
import './Card.css';
import CardItem from './Carditem';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <h1>Top Popular</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/png1.png'
              text='The Japanese takes delight in grilling indoor by making Teppanyaki (鉄板焼き) at home.'
              label='Japanese'
              path='/Popular'
            />
            <CardItem
              src='images/img12.jpg'
              text='Borscht soup is a popular soup in Eastern Europe and many versions of Borscht Soup recipes (罗宋汤) can be found online.  '
              label='Italian'
              path='/Popular'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img13.jpg'
              text='Learn how to make Seared Scallops with a perfectly golden brown crust, just like at the restaurants! They’re incredibly simple to make at home and much cheaper than dining out. '
              label='French'
              path='/Popular'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;