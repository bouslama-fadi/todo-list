import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const EmptyComponent = () => {
  return (
    <div className="conainter">
      <ListGroup>
        <ListGroupItem>
          <div>This is an empty component</div>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default EmptyComponent;
