import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { TaskList } from "../../utils/model/dataModel";
import { ConfirmationModal } from "../../utils/common/modal/confirmationModal";

export const ToDoTaskList = ({ task }: { task: TaskList[] }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="taskList">
      <ConfirmationModal show={show} handleClose={handleClose} />
      {task.map((item, i) => (
        <Card className="taskCard">
          <Card.Body>
            <Row>
              <Col lg={10} md={10} sm={10}>
                <div>
                  <span>{item.name} </span>
                  <span>{"(" + item.priority + ")"}</span>
                </div>
                <div>
                  <span>{item.time} </span>
                  <span>{"(" + item.type + ")"}</span>
                </div>
              </Col>
              <Col lg={2} md={2} sm={2} className="taskIcon">
                <Col>
                  <FontAwesomeIcon
                    className="float-start blue-color pointer"
                    icon={faPenToSquare}
                  />
                </Col>
                <Col>
                  <FontAwesomeIcon
                    className="float-end red-color pointer"
                    icon={faTrash}
                    onClick={handleShow}
                  />
                </Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
