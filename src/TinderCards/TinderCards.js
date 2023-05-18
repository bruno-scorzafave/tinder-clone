import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

import './TinderCards.scss';

const onSwipe = (direction) => {
  console.log('You swiped: ' + direction);
}

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + ' left the screen');
}

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'KattyPerry',
            url: 'https://yt3.googleusercontent.com/8s2hH6UfSKbED2-UUVgCALU5BXXxvnk2ueNzBaCU-exfeoC9X1OZzDa6uqzI4cOA3ZDqyXjIsg=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Barack Obama',
            url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/President_Barack_Obama_%28cropped%29.jpg'
        }
    ]);

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
                            style={{ backgroundImage: `url(${person.url})`}}
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
