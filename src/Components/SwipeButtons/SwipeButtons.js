import React from 'react';
import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import './SwipeButtons.scss';

function SwipeButtons(props) {
  const { swipe, goBack } = props;

  return (
    <div className='swipeButtons'>
      <IconButton onClick={ () => goBack() } className='swipeButtons__repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton onClick={ () => swipe('left') } className='swipeButtons__left'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton onClick={ () => swipe('down') } className='swipeButtons__star'>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton onClick={ () => swipe('right') } className='swipeButtons__right'>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton onClick={ () => swipe('up') } className='swipeButtons__lightning'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  )
}

export default SwipeButtons;
