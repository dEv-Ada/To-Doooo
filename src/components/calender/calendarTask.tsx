import React, { useState } from "react";
import Calendar from "react-calendar";
import { CommonConst } from "../../utils/common/const/commonConst";

import { ToDoTaskList } from "../task/taskList";

const taskList = [
  {
    name: "Task 1",
    priority: "High",
    date: "23/04/2023",
    time: "10:00 pm",
    type: "Alerm",
  },
  {
    name: "Task 2",
    priority: "Normal",
    date: "23/04/2023",
    time: "10:00 pm",
    type: "Alerm",
  },
  {
    name: "Task 3",
    priority: "Medium",
    date: "23/04/2023",
    time: "10:00 pm",
    type: "No Alerm",
  },
];

export const ToDoCalendarTask = () => {
  const [value, onChange] = useState(new Date());
  const [task, setTask] = useState(taskList);
  return (
    <div>
      <div className="calendar">
        <Calendar value={value} />
      </div>
      <div>
        <h5>{CommonConst.TASKS}</h5>
        <ToDoTaskList task={task} />
      </div>
    </div>
  );
};
