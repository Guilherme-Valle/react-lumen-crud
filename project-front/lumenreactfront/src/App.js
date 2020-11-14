import React, { Component } from 'react';
import classes from './App.css';
import NavBar from './components/Navbar/Navbar';
import BookList from './components/BookList/BookList';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <NavBar/>
          <BookList />
      </div>
    );
  }
}

export default App;
