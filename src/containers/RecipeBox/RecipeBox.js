import React, { Component } from "react";
import Menu from "../../components/Menu/Menu";
import { Container } from "reactstrap";
import "./RecipeBox.css";

class RecipeBox extends Component {
  render() {
    return (
      <Container className="RecipeBox">
        <Menu />
        <div>Add Recipe Button</div>
      </Container>
    );
  }
}

export default RecipeBox;
