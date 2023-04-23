import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CommonConst } from "../../utils/common/const/commonConst";
import { AddTodoModal } from "../../utils/common/modal/addTodoModal";

export const ToDoFooter = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <AddTodoModal show={show} handleClose={handleClose} />
      <Card>
        <Card.Body className="h-50">
          <Row>
            <Col>
              <Button
                variant="dark"
                className="float-start"
                onClick={handleShow}
              >
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                <span>{CommonConst.ADD_TO_DO}</span>
              </Button>
            </Col>
            <Col>
              <span className="mt-1 float-end">
                {CommonConst.VERSION} : 1.0.0
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
