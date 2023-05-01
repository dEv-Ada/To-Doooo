import React, { useState } from "react";
import { Row, Col, Button, Nav } from "react-bootstrap";
import { CommonConst } from "../../utils/common/const/commonConst";
import { AddTaskModal } from "../../utils/common/modal/addTaskModal";
import { useNavigate } from "react-router-dom";

export const ToDoLeftbar = () => {
  const [show, setShow] = useState(false);
  //const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    // console.log("calling");
    // navigate("/tasks");
  };
  return (
    <div className="left-bar">
      <AddTaskModal show={show} handleClose={handleClose} />
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Button variant="warning" className="left-card" onClick={handleShow}>
            {CommonConst.ADD_TASK}
          </Button>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <Button variant="warning" className="left-card" onClick={handleClick}>
            <Nav.Item>
              <Nav.Link href="/tasks">{CommonConst.TASK_LIST}</Nav.Link>
            </Nav.Item>
          </Button>
        </Col>
      </Row>
    </div>
  );
};
