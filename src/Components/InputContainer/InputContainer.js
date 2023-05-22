import React from 'react';
import { useDispatch } from 'react-redux';
import Input from '@mui/base/Input';
import NearMeIcon from '@mui/icons-material/NearMe';
import { IconButton } from '@mui/material';

import { sendMessage } from '../../Redux/Message/actions';

import './InputContainer.scss'

function InputContainer() {
    const dispatch = useDispatch();

    const handleSendMessage = (event) => {
      const inputMessage = document.querySelector(".inputContainer__input input");
      const message = inputMessage.value;

      if ((event.type === 'keypress' && event.key !=='Enter') || message === '') {
        return;
       }

      dispatch(sendMessage([message]));
      inputMessage.value = '';
    };

  return (
    <div className='inputContainer'>
      <Input className='inputContainer__input'onKeyPress={ handleSendMessage } />
      <IconButton onClick={ handleSendMessage }>
        <NearMeIcon fontSize='large' sx={{ color: 'white' }}/>
      </IconButton>
    </div>
  )
}

export default InputContainer;
