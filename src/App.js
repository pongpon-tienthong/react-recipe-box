import React, { Component } from "react";
import Aux from "./hoc/Aux/Aux";
import RecipeBox from "./containers/RecipeBox/RecipeBox";

class App extends Component {
  render() {
    return (
      <Aux>
        <RecipeBox />
      </Aux>
    );
  }
}

export default App;
