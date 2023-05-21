import React from 'react';
import { useSelector } from 'react-redux';

import InputContainer from '../../Components/InputContainer/InputContainer';
import Message from '../../Components/Message/Message';

import './Chat.scss';

function Chat() {
  const { messages } = useSelector((rootReducer) => rootReducer.messageReducer);

  console.log('messsages:', messages);

  return (
    <div className='chatContainer'>
      <InputContainer />
      <div className='chatContainer__messages'>
        { messages.map((message) => (
            <Message message={message} />
          ))
        }
      </div>
    </div>
  )
}

export default Chat;
