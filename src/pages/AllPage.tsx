import { FC, useEffect, useState } from "react";
import "./Page.scss";
import TodoList from "../components/TodoList/TodoList";
import { todoList } from "../services/todoList";
import { useAppDispatch } from "../hooks/redux";
import { useAppSelector } from "../hooks/redux";
import { deleteSlice } from "../store/deleteSlice";
import { ITodoList } from "../models/ITodoList";

const AllPageButton = (item: ITodoList) => {
  const dispatch = useAppDispatch();
  const handleButtonEvent = () => {
    dispatch(deleteSlice.actions.getTodoDelete(item));
  };
  return <button onClick={handleButtonEvent}>Delete</button>;
};

const AllPage: FC = () => {
  const [currentTodos, setCurrentTodos] = useState<ITodoList[]>(todoList);
  const deleteTodos = useAppSelector((state) => state.deleteReducer.todoDelete);
  useEffect(() => {
    deleteTodos.forEach((deleteTodo) => {
      setCurrentTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== deleteTodo.id));
    });
  }, [deleteTodos]);

  return (
    <div className="page">
      <TodoList todoList={currentTodos} Button={AllPageButton} />
    </div>
  );
};

export default AllPage;
