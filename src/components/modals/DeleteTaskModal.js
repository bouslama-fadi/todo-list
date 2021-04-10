import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const DeleteTaskModal = ({ modal, toggle, deleteHandler }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>Are you sure you want to delete this item ?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteHandler}>
            Confirm
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteTaskModal;
