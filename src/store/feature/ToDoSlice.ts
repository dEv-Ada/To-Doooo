import { TodoList } from "../../utils/model/dataModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToDoState {
    todos: TodoList[];
}

const initialState: ToDoState = {
    todos: [
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
    ],

};

export const ToDoSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<{ name: string }>) => {
            state.todos.push({
                id: state.todos.length + 1,
                name: action.payload.name,
                type: "not complete"
            });
        },
        removeToDo: (state, action: PayloadAction<{ id: number }>) => {
            const filterTodo = state.todos.filter((el: any) => el.id !== Number(action.payload.id));
            console.log("check", filterTodo, Number(action.payload.id))
            state.todos = filterTodo;
        }
    },
});

export default ToDoSlice.reducer;
export const { addToDo } = ToDoSlice.actions;
export const { removeToDo } = ToDoSlice.actions;