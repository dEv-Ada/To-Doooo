import React, { useState } from "react";
import { Modal, InputGroup, Form, Button } from "react-bootstrap";
import { CommonConst } from "../const/commonConst";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { addToDo } from "../../../store/feature/ToDoSlice";
import { useAppDispatch } from "../../../store/store/store";

export const AddTodoModal = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) => {
  const [todoItem, setToDoItem] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    setToDoItem(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addToDo({ name: todoItem }));
    handleClose();
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{CommonConst.ADD_TO_DO}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Add Todo"
            aria-label="Add Todo"
            aria-describedby="basic-addon2"
            onChange={(e: any) => handleChange(e)}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </InputGroup>
      </Modal.Body>
    </Modal>
  );
};
