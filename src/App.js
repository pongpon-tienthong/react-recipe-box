import React, { Component } from 'react';
import RecipeBox from './containers/RecipeBox/RecipeBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeBox />
      </div>
    );
  }
}

export default App;
