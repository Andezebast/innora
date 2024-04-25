import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoList } from "../models/ITodoList";

interface DeleteState {
  todoDelete: ITodoList[];
}

const initialState: DeleteState = {
  todoDelete: [],
};

export const deleteSlice = createSlice({
  name: "todoDelete",
  initialState,
  reducers: {
    getTodoDelete(state, action: PayloadAction<ITodoList>) {
      state.todoDelete.push(action.payload);
    },
    awayTodoDelete(state, action: PayloadAction<ITodoList>) {
      state.todoDelete = state.todoDelete.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export default deleteSlice.reducer;
