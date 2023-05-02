import React, { useCallback, useState } from "react";
import { CommonConst } from "../../utils/common/const/commonConst";
// import { Card, Form } from "react-bootstrap";
import { TodoList } from "../../utils/model/dataModel";
import update from "immutability-helper";
import { CardItems } from "./card";

const todoList: TodoList[] = [
  {
    id: 1,
    name: "To do 1",
    type: "not complete",
  },
  {
    id: 2,
    name: "To do 2",
    type: "not complete",
  },
  {
    id: 3,
    name: "To do 3",
    type: "not complete",
  },
  {
    id: 4,
    name: "To do 4",
    type: "not complete",
  },
  {
    id: 5,
    name: "To do 5",
    type: "not complete",
  },
  {
    id: 6,
    name: "To do 6",
    type: "not complete",
  },
  {
    id: 7,
    name: "To do 7",
    type: "not complete",
  },
  {
    id: 8,
    name: "To do 8",
    type: "not complete",
  },
];

export const ToDoList = () => {
  const [todo, setTask] = useState(todoList);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setTask((prevCards: TodoList[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as TodoList],
        ],
      })
    );
  }, []);

  const renderCard = useCallback(
    (card: { id: number; name: string; type: string }, index: number) => {
      return (
        <CardItems
          key={card.id}
          index={index}
          id={card.id}
          text={card.name}
          moveCard={moveCard}
        />
      );
    },
    []
  );

  return (
    <div className="mt-2">
      <h5>{CommonConst.TO_DOS}</h5>
      <div className="todoList">
        {todo.map((item, i) => renderCard(item, i))}
      </div>
    </div>
  );
};
