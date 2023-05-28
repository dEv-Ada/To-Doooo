import type { Identifier, XYCoord } from "dnd-core";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Card, Form } from "react-bootstrap";
import { DragItem } from "../../utils/model/dataModel";
import { useAppDispatch } from "../../store/store/store";
import { removeToDo } from "../../store/feature/ToDoSlice";

export const CardItems = ({ id, text, index, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const handleChange = () => {
    dispatch(removeToDo({ id: id }));
  };
  return (
    <div
      ref={ref}
      className="drag-elm"
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      <Card className="taskCard">
        <Card.Body>
          <Form.Check
            inline
            name="group1"
            type="checkbox"
            id={index}
            onChange={handleChange}
          />
          <span>{text} </span>
        </Card.Body>
      </Card>
    </div>
  );
};
