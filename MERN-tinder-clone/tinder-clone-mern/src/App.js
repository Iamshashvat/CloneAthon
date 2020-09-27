import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from "./components/cards/Cards";
import Header from "./components/header/Header";
import SwipeButton from "./components/swipeButton/SwipeButton";
import ChatScreen from "./components/chatScreen/ChatScreen";
import Chats from "./components/chat/Chats";
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path='/'>
            <Header />
            <Cards />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
