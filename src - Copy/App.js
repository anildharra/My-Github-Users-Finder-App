import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import UserItem from './components/users/UserItem';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello from Dharra app</h1>
        <NavBar />
        <UserItem />
        
      </div>
    );
  }
}


export default App;
