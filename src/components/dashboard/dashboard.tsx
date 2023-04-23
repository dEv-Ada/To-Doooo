import React from "react";
import { Row, Col } from "react-bootstrap";
import { ToDoLeftbar } from "../left bar/leftBar";
import { ToDoList } from "../todo/todoList";
import { ToDoCalendarTask } from "../calender/calendarTask";
import { ToDoFooter } from "../footer/footer";

export const TodoDashboard = () => {
  return (
    <div>
      <Row className="mainRow">
        <Col lg={3} md={3} sm={3}>
          <ToDoLeftbar />
        </Col>
        <Col lg={9} md={9} sm={9}>
          <Row className="listRow">
            <Col className="listCol">
              <ToDoList />
            </Col>
            <Col>
              <ToDoCalendarTask />
            </Col>
          </Row>
          <Row>
            <ToDoFooter />
          </Row>
        </Col>
      </Row>
    </div>
  );
};
