import React from "react";
import Chat from "./Chat";
function Chats() {
  return (
    <div className='chats'>
      <Chat
        name='Rambo'
        message='pawesome'
        timestamp='35 minutes ago'
        profilePic='https://www.villageveterinaryclinic.com/sites/default/files/styles/large/adaptive-image/public/german-shepherd-dog-breed-info.jpg?itok=5U3rHD1W'
      />
      <Chat
        name='Blacky'
        message='whats up?'
        timestamp='45 minutes ago'
        profilePic='https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
      />
      <Chat
        name='Alan'
        message='Holla!'
        timestamp='3 days ago'
        profilePic='https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      />
    </div>
  );
}

export default Chats;
