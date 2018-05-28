import React from "react";
import MenuItem from "./MenuItem/MenuItem";
import { Container, Row, Col } from "reactstrap";
import "./Menu.css";

const menu = props => (
  <Container className="card card-body bg-light">
    <Row>
      <Col>
        <MenuItem />
      </Col>
    </Row>
    <Row>
      <Col>
        <MenuItem />
      </Col>
    </Row>
    <Row>
      <Col>
        <MenuItem />
      </Col>
    </Row>
  </Container>
);

export default menu;
