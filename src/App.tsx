import React from "react";
import "./App.css";
import "./stylesheet/leftBar.css";
import "./stylesheet/calendar.css";
import "./stylesheet/todo.css";
import "./stylesheet/login.css";
import "./stylesheet/task.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToDoHeader } from "./components/header/header";
import { TodoDashboard } from "./components/dashboard/dashboard";
import ErrorPage from "./utils/common/error-page/errorPage";
import { ToDoLogin } from "./components/login/login";
import { AllTaskList } from "./components/task/allTaskList";
import { Col, Row } from "react-bootstrap";
import { ToDoLeftbar } from "./components/left bar/leftBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TodoDashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <ToDoLogin />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/tasks",
      element: <AllTaskList />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div className="App">
      <ToDoHeader />
      <Row className="mainRow">
        <Col lg={3} md={3} sm={3}>
          <ToDoLeftbar />
        </Col>
        <RouterProvider router={router} />
      </Row>
    </div>
  );
}

export default App;
