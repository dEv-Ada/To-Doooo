import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { CommonConst } from "../../utils/common/const/commonConst";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const ToDoHeader = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>{CommonConst.BRAND_NAME}</Navbar.Brand>
          <Navbar.Toggle />
        </Container>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown
              align="end"
              title={<FontAwesomeIcon icon={faUser} />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>{CommonConst.MY_PROFILE}</NavDropdown.Item>
              <NavDropdown.Item>{CommonConst.ABOUT}</NavDropdown.Item>
              <NavDropdown.Item>{CommonConst.LOGOUT}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
