import React from "react";
import { Col } from "react-bootstrap";
import { DataTable } from "../../utils/common/data-table/dataTable";
import { CommonConst } from "../../utils/common/const/commonConst";
import { TaskList } from "../../utils/model/dataModel";
export const AllTaskList = () => {
  const header: string[] = [
    "Task",
    "Date",
    "Time",
    "Priority",
    "Alerm",
    "Action",
  ];
  const keys: string[] = ["name", "date", "time", "priority", "type"];
  const data: TaskList[] = [
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
    {
      name: "Task 4",
      priority: "Medium",
      date: "23/04/2023",
      time: "10:00 pm",
      type: "No Alerm",
    },
    {
      name: "Task 5",
      priority: "Medium",
      date: "23/04/2023",
      time: "10:00 pm",
      type: "No Alerm",
    },
    {
      name: "Task 6",
      priority: "Medium",
      date: "23/04/2023",
      time: "10:00 pm",
      type: "No Alerm",
    },
    {
      name: "Task 7",
      priority: "Medium",
      date: "23/04/2023",
      time: "10:00 pm",
      type: "No Alerm",
    },
    {
      name: "Task 8",
      priority: "Medium",
      date: "23/04/2023",
      time: "10:00 pm",
      type: "No Alerm",
    },
    {
      name: "Task 9",
      priority: "Medium",
      date: "23/04/2023",
      time: "10:00 pm",
      type: "No Alerm",
    },
  ];
  return (
    <>
      <Col lg={9} md={9} sm={9}>
        <div className="mt-2">
          <h5>{CommonConst.ALL_TASKS}</h5>
          <DataTable
            header={header}
            data={data}
            objKey={keys}
            action={[
              {
                action: "edit",
              },
              {
                action: "delete",
              },
            ]}
          />
        </div>
      </Col>
    </>
  );
};
