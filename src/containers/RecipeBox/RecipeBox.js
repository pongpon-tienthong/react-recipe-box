import React, { Component } from "react";
import './RecipeBox.css';

class RecipeBox extends Component {
  render() {
    return (
      <div className="RecipeBox">
        <div>
          <h3>Menu</h3>
          <ul>
            <li>Menu Item</li>
            <li>Menu Item</li>
            <li>Menu Item</li>
          </ul>
          </div>
        <div>Add Recipe Button</div>
      </div>
    );
  }
}

export default RecipeBox;
