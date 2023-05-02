import React from "react";
import { Row, Col } from "react-bootstrap";
import { ToDoList } from "../todo/todoList";
import { ToDoCalendarTask } from "../calender/calendarTask";
import { ToDoFooter } from "../footer/footer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const TodoDashboard = () => {
  return (
    <>
      <Col lg={9} md={9} sm={9}>
        <Row className="listRow">
          <Col className="listCol">
            <DndProvider backend={HTML5Backend}>
              <ToDoList />
            </DndProvider>
          </Col>
          <Col>
            <ToDoCalendarTask />
          </Col>
        </Row>
        <Row>
          <ToDoFooter />
        </Row>
      </Col>
    </>
  );
};
