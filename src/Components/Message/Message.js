import React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import './Message.scss'

function Message(props) {

  return (
    <div className='messageContainer'>
      <TextareaAutosize readOnly="readonly" className='messageContainer__message' value={props.message} />
    </div>
  )
}

export default Message;
