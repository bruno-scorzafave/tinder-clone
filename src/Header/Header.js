import React from 'react';
import './Header.scss';
import PersonIcon from '@mui/icons-material/Person';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header_user'/>
      </IconButton>
      <IconButton>
        <InsertEmoticonIcon fontSize='large' className='header_logo'/>
      </IconButton>
      <IconButton>
        <ForumIcon fontSize='large' className='header_logo'/>
      </IconButton>
      {/* chat icon*/}
    </div>
  )
}

export default Header;
