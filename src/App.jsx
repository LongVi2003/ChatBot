import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/SideBar/Sidebar';
import SearchBar from './components/SearchBar/SearchBar';
import ChatMessage from './components/ChatMessage/ChatMessage';
import meow from './components/assets/meow.jpg'; 
import attachmentIcon from './components/assets/attach-file.png';
import emojiIcon from './components/assets/happy.png';
import sendIcon from './components/assets/send.png';
import bot from './components/assets/bot.png'
import EmojiPicker from 'emoji-picker-react';



function App() {
  const [messages, setMessages] = useState([
    {
      message: "Xin chào, tôi là ChatBot!",//giả lập chatbot bên trái
      sender: "ChatBot",
      direction: "incoming",
      avatar: bot
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [file,setFile] = useState(null);
  const [showEmojiPicker, setEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiIcon) => {
    setMessageInput((prevMessageInput) => prevMessageInput + emojiIcon.emoji);
  }

  const handleFileUpload = (e) => {
    if(e.target.files.length>0){
      setFile(e.target.files[0]);
    }
  };

  const handleSend = async () => {
    if (messageInput.trim() === "") return; 

    const newMessage = {  
      message: messageInput.trim() === "" ? "File Attached" : messageInput,//người dùng bên phải
      sender: "user",
      direction: "outgoing",
      avatar: meow,
      file : file ? URL.createObjectURL(file) : null
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setMessageInput(''); 

    //giả lập chatbot trả lời
    setIsTyping(true);
    setTimeout(() => {
      const botMessage = {
        message: "ChatBot response!",
        sender: "ChatBot",
        direction: "incoming",
        avatar: bot
      };
      setMessages([...newMessages, botMessage]);
      setIsTyping(false);
    }, 2000);
    
  };


  return (
    <div className="App">
      <div className="chat-layout">
        <Sidebar />
        <div className="chat-container">
          <div className='search-bar'>
            <SearchBar />
          </div>
          <div className="chat-area">
            {/*Khung chat */}
            {messages.map((message, i) => (
              <ChatMessage
                key={i}
                message={message.message}
                sender={message.sender}
                direction={message.direction}
                avatar={message.avatar}
              />
            ))}
            {isTyping && <div className="typing-indicator">... ChatBot Đang Nhập</div>}
          </div>
          <div className="chat-box">
            <input
              type="text"
              placeholder="Type a new message here"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSend();
                }
              }}
            />
            
            <input type="file" style={{display: 'none'}} onChange = {handleFileUpload} id='file-upload' />
    
            <div className="icon" onClick={() => document.getElementById('file-upload').click() }  >
              <img src={attachmentIcon} alt="attachment" />
            </div>
            <div className="icon" onClick={() => setEmojiPicker(!showEmojiPicker)}>
              <img src={emojiIcon} alt="" />
            </div>
            {showEmojiPicker && (
              <div style={{ position: "absolute", bottom: "150px", left: "550px", height: "330px" }}>
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </div>
            )}
            <button className="send-button" onClick={handleSend}>
              <img src={sendIcon} alt="send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
