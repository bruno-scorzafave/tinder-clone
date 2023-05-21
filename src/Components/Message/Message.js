import React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import './Message.scss'

function Message(message) {

    console.log(message.message);

  return (
    <div className='messageContainer'>
      <TextareaAutosize readOnly="readonly" className='messageContainer__message'>
        { message.message }
      </TextareaAutosize>
    </div>
  )
}

export default Message;
