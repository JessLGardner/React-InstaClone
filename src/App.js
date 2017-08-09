import React, { Component } from 'react';
import Posts from './components/Posts';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    const style = {
      backgroundColor: "rgba(249,249,249, 1)"
    };
    return (
      <div>
        <Navbar />
        <Posts />
      </div>
    );
  }
}

export default App;
