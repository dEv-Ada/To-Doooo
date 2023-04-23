import React from "react";
import { Container, CardGroup, Card, Form, Button } from "react-bootstrap";
import logo from "../../utils/assets/images/logo.png";
import { CommonConst } from "../../utils/common/const/commonConst";

export const ToDoLogin = () => {
  return (
    <div className="loginMain">
      <Container className="login-container">
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Img variant="top" width={350} height={350} src={logo} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>{CommonConst.LOGIN}</Card.Title>
              <Card.Text>
                <Form className="p-3">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{CommonConst.USER}</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>{CommonConst.PASSWORD}</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Text className="text-muted">
                    {CommonConst.FORGOT_PASSWORD}
                  </Form.Text>
                  <Button className="float-end" variant="primary" type="submit">
                    {CommonConst.LOGIN}
                  </Button>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};
