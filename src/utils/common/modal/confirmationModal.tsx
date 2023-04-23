import React from "react";
import { Modal, Button } from "react-bootstrap";
import { CommonConst } from "../const/commonConst";

export const ConfirmationModal = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{CommonConst.DELETE_TASK}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{CommonConst.ARE_YOU_SURE}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {CommonConst.NO}
        </Button>
        <Button variant="primary">{CommonConst.YES}</Button>
      </Modal.Footer>
    </Modal>
  );
};
