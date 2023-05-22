import React, { useEffect, useState, useRef, useMemo } from 'react';
import TinderCard from 'react-tinder-card';

import SwipeButtons from '../../Components/SwipeButtons/SwipeButtons';
import Placeholder from '../../Components/Placeholder/Placeholder';
import axios from '../../axios';

import './TinderCards.scss';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/cards');

      setPeople(req.data);
    };

    fetchData().then(setCurrentIndex(people.length - 1));
  }, [people.length]);

  const [currentIndex, setCurrentIndex] = useState(people.length - 1);
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(people.length)
        .fill(0)
        .map((i) => React.createRef()),
    [people.length]
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < people.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < people.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };


  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className='tinderCards'>
      {
        <div className='tinderCards__container'>
            {people.map((person, index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className='tinderCards__swipe'
                        key={person.name}
                        onSwipe={(dir) => swiped(dir, person.name, index)}
                        onCardLeftScreen={() => outOfFrame(person.name, index)}
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
            <Placeholder />
            <SwipeButtons swipe={swipe} goBack={goBack} />
          </div>
        }
      </div>
  )
}

export default TinderCards;
