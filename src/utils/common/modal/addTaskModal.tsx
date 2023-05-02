import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { CommonConst } from "../const/commonConst";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faCalendarCheck,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

const yesterday = moment().subtract(1, "day");
const valid = function (current: any) {
  return current.isAfter(yesterday);
};
export const AddTaskModal = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: any;
}) => {
  const [eventType, setEventType] = useState<string>("");
  const handleEvent = (e) => {
    if (e.target.checked) {
      setEventType(e.target.id);
    }
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton className="task-header">
        <Modal.Title>{CommonConst.CREATE_EVENT}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <span>{CommonConst.EVENT_TYPE + " :"}</span>
          <span key={`inline-$"radio"`} className="ms-3">
            <Form.Check
              inline
              name="group1"
              type="radio"
              id={CommonConst.EVENT}
              onChange={(e) => handleEvent(e)}
            />
            <label className="type-item" htmlFor={CommonConst.EVENT}>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                size="xl"
                className={
                  eventType === CommonConst.EVENT
                    ? "drkblu-color ps-1"
                    : "lgry-color ps-1"
                }
              />
              <div className="text-muted font-smlr text-center">
                {CommonConst.EVENT}
              </div>
            </label>
            <Form.Check
              inline
              name="group1"
              type="radio"
              id={CommonConst.ANNIVERSARY}
              onChange={(e) => handleEvent(e)}
            />
            <label className="type-item" htmlFor={CommonConst.ANNIVERSARY}>
              <FontAwesomeIcon
                icon={faHeart}
                size="xl"
                className={
                  eventType === CommonConst.ANNIVERSARY
                    ? "drkblu-color ps-3"
                    : "lgry-color ps-3"
                }
              />
              <div className="text-muted font-smlr text-center">
                {CommonConst.ANNIVERSARY}
              </div>
            </label>
            <Form.Check
              inline
              name="group1"
              type="radio"
              id={CommonConst.METTING}
              onChange={(e) => handleEvent(e)}
            />
            <label className="type-item" htmlFor={CommonConst.METTING}>
              <FontAwesomeIcon
                icon={faStar}
                size="xl"
                className={
                  eventType === CommonConst.METTING
                    ? "drkblu-color ps-2"
                    : "lgry-color ps-2"
                }
              />
              <div className="text-muted font-smlr text-center">
                {CommonConst.METTING}
              </div>
            </label>
            <Form.Check
              inline
              name="group1"
              type="radio"
              id={CommonConst.BIRTHDAY}
              onChange={(e) => handleEvent(e)}
            />
            <label className="type-item" htmlFor={CommonConst.BIRTHDAY}>
              <FontAwesomeIcon
                icon={faCakeCandles}
                size="xl"
                className={
                  eventType === CommonConst.BIRTHDAY
                    ? "drkblu-color ps-3"
                    : "lgry-color ps-3"
                }
              />
              <div className="text-muted font-smlr text-center">
                {CommonConst.BIRTHDAY}
              </div>
            </label>
          </span>
        </div>
        <div className="mt-4 mb-2">
          <hr />
        </div>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>{CommonConst.EVENT_NAME}</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  {CommonConst.DATE + " & " + CommonConst.TIME}
                </Form.Label>
                <Datetime isValidDate={valid} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>{CommonConst.PRIORITY}</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>{CommonConst.ALERM}</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-crl fw-semibold" variant="warning">
          {CommonConst.SUBMIT}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
