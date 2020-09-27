import React, { useState } from "react";
import "./chatScreen.css";
import Avatar from "@material-ui/core/Avatar";
function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Rambo",
      image:
        "https://www.villageveterinaryclinic.com/sites/default/files/styles/large/adaptive-image/public/german-shepherd-dog-breed-info.jpg?itok=5U3rHD1W",
      message: "Hi! Doggo",
    },
    {
      name: "Rambo",
      image:
        "https://www.villageveterinaryclinic.com/sites/default/files/styles/large/adaptive-image/public/german-shepherd-dog-breed-info.jpg?itok=5U3rHD1W",
      message: "How's life?",
    },
    {
      message: "pawesome",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className='chatScreen'>
      <p className='chatScreen__timestamp'>You matched</p>
      {messages.map((message) =>
        message.name ? (
          <div className='chatScreen__message'>
            <Avatar
              className='chatScreen__image'
              alt={message.name}
              src={message.image}
            />
            <p className='chatScreen__text'>{message.message}</p>
          </div>
        ) : (
          <div className='chatScreen__message'>
            <p className='chatScreen__textUser'>{message.message}</p>
          </div>
        )
      )}

      <form className='chatScreen_input'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='chatScreen_inputField'
          type='text'
          placeholder='Type'
        />
        <button
          onClick={handleSend}
          type='submit'
          className='chatScreen_inputButton'
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
