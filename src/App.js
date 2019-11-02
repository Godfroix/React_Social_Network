import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
// import { Route, BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';

const App = (props) => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Navbar />}/>
      <div className='app_wrapper_content'>
        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
      </div>
    </div>
  );
}

export default App;
