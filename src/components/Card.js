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
              path='/Teppanyaki'
            />
            <CardItem
              src='images/img12.jpg'
              text='Borscht soup is a popular soup in Eastern Europe and many versions of Borscht Soup recipes (罗宋汤) can be found online.  '
              label='Italian'
              path='/BorschtSoup'
            />
            <CardItem
              src='images/img13.jpg'
              text='Learn how to make Seared Scallops with a perfectly golden brown crust, just like at the restaurants! They’re incredibly simple to make at home and much cheaper than dining out. '
              label='French'
              path='/SearedScallops'
            />
          </ul>
        </div>
      </div>
      <h1><img src='images/img9.jpg' alt='Japanese' width='100' height='80'/>
          Japanese</h1>
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
              src='images/img14.jpg'
              text='Tempura is a typical Japanese dish usually consisting of seafood, meat and vegetables that have been battered and deep fried.'
              label='Japanese'
              path='/Tempura'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;