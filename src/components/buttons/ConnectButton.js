import React, { Component } from "react";
import { Button } from "reactstrap";

const ConnectButton = ({ onSubmitData }) => {
  return (
    <>
      <div>
        <Button color="primary" onClick={onSubmitData}>
          Confirm
        </Button>
      </div>
    </>
  );
};

export default ConnectButton;
