import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { CommonConst } from "../../utils/common/const/commonConst";

export const ToDoLeftbar = () => {
  return (
    <div className="left-bar">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Button variant="warning" className="left-card">
            {CommonConst.ADD_TASK}
          </Button>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <Button variant="warning" className="left-card">
            {CommonConst.TASK_LIST}
          </Button>
        </Col>
      </Row>
    </div>
  );
};
