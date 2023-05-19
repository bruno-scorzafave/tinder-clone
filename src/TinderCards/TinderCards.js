import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';

import axios from '../axios';

import './TinderCards.scss';

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction);
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen');
}

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const req = await axios.get('/tinder/cards');

        setPeople(req.data);
      };

      fetchData();
    }, []);

  return (
    <div className='tinderCards'>
      {
        <div className='tinderCards__container'>
            {people.map((person) => (
                    <TinderCard
                        className='tinderCards__swipe'
                        key={person.name}
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen(`${person.name}`)}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})`}}
                            className='tinderCards__card'
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
            ))}
        </div>
      }
    </div>
  )
}

export default TinderCards;
