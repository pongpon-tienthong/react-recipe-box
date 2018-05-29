import React, { Component } from "react";
import { Container } from "reactstrap";
import Menu from "../../components/Menu/Menu";
import "./RecipeBox.css";

class RecipeBox extends Component {
  render() {
    return (
      <Container className="RecipeBox">
        <div className="Menu">
          <Menu />
        </div>
        <div>Add Recipe Button</div>
      </Container>
    );
  }
}

export default RecipeBox;
