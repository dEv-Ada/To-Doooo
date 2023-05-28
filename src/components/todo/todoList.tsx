import React, { useCallback, useState } from "react";
import { CommonConst } from "../../utils/common/const/commonConst";
import { TodoList } from "../../utils/model/dataModel";
import update from "immutability-helper";
import { CardItems } from "./card";
import { useAppSelector } from "../../store/store/store";

export const ToDoList = () => {
  const todoList = useAppSelector((state) => state.todo.todos);
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
        {todoList && todoList.map((item, i) => renderCard(item, i))}
      </div>
    </div>
  );
};
