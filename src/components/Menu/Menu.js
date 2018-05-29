import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import Aux from "./../../hoc/Aux/Aux";
import "./Menu.css";

const menu = props => (
  <Aux>
    <MenuItem />
    <MenuItem />
    <MenuItem />
  </Aux>
);

export default menu;
