import React, { Component } from "react";
import RecipeBox from "./containers/RecipeBox/RecipeBox";
import styles from "./App.css";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <RecipeBox />
      </div>
    );
  }
}

export default App;
