import React from "react";
import "./App.css";
import "./stylesheet/leftBar.css";
import "./stylesheet/calendar.css";
import "./stylesheet/todo.css";
import "./stylesheet/login.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToDoHeader } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import { TodoDashboard } from "./components/dashboard/dashboard";
import ErrorPage from "./utils/common/error-page/errorPage";
import { ToDoLogin } from "./components/login/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <TodoDashboard />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <ToDoLogin />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div className="App">
      <ToDoHeader />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
