import React, { useState } from "react";
import { CommonConst } from "../../utils/common/const/commonConst";
import { Card, Form } from "react-bootstrap";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const todoList = [
  {
    name: "To do 1",
    type: "not complete",
  },
  {
    name: "To do 2",
    type: "not complete",
  },
  {
    name: "To do 3",
    type: "not complete",
  },
  {
    name: "To do 4",
    type: "not complete",
  },
  {
    name: "To do 5",
    type: "not complete",
  },
  {
    name: "To do 6",
    type: "not complete",
  },
  {
    name: "To do 7",
    type: "not complete",
  },
  {
    name: "To do 8",
    type: "not complete",
  },
];

export const ToDoList = () => {
  const [todo, setTask] = useState(todoList);
  return (
    <div className="mt-2">
      <h5>{CommonConst.TO_DOS}</h5>
      <div className="todoList">
        {todo.map((item, i) => (
          <DndProvider backend={HTML5Backend}>
            <Card className="taskCard">
              <Card.Body>
                <div>
                  <Form.Check
                    inline
                    name="group1"
                    type="checkbox"
                    id={i.toString()}
                  />
                  <span>{item.name} </span>
                </div>
              </Card.Body>
            </Card>
          </DndProvider>
        ))}
      </div>
    </div>
  );
};
