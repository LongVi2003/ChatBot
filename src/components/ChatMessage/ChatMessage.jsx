import React from 'react';
import './ChatMessage.css';
import share from '../assets/share.png';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

const ChatMessage = ({ message, sender, direction, avatar }) => {

  const [CopySuccess, setCopySuccess] = useState('')
  const HandleCopy = () =>{
    navigator.clipboard.writeText(message)
    .then(() =>{
      setCopySuccess('success')
      setTimeout(()=>{
        setCopySuccess(false)
      },2000)
    })
    .catch(() =>{
      setCopySuccess('error')
      setTimeout(()=>{
        setCopySuccess(true)
      },2000)
      
    })
  }

  return (
    <div className={`message-row ${direction}`}>
      <img className="avatar" src={avatar} alt={`${sender} avatar`} />
      <div className="message-content">
        <div className="message-text">{message}</div>
      </div>
      <img src={share} alt="" className='share-icon' onClick={HandleCopy} />
      {CopySuccess && <Alert severity={CopySuccess ==='success'?'success':'error'}>{CopySuccess ==='success'?'Sao Chép Thành Công':'Sao Chép Thất Bại'}</Alert>}
    </div>
    
  );
};

export default ChatMessage;
