import React from 'react';
import { useDispatch } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

import { chatPage, cardsPage, userPage } from '../../Redux/Page/actions';

import './Header.scss';

function Header() {
  const dispatch = useDispatch();

  const handleChatClick = () => {
    dispatch(chatPage)
  };

  const handleLogoClick = () => {
    dispatch(cardsPage)
  };

  const handleUserClick = () => {
    dispatch(userPage)
  };

  return (
    <div className='header'>
      <IconButton onClick={ handleUserClick }>
        <PersonIcon fontSize='large' sx={{ color: 'white' }} className='header__user'/>
      </IconButton>
      <IconButton onClick={ handleLogoClick }>
        <InsertEmoticonIcon fontSize='large' sx={{ color: 'white' }} className='header__logo'/>
      </IconButton>
      <IconButton onClick={ handleChatClick }>
        <ForumIcon fontSize='large' sx={{ color: 'white' }} className='header__chat'/>
      </IconButton>
    </div>
  )
}

export default Header;
