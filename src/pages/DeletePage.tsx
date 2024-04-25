import { FC } from "react";
import "./Page.scss";
import TodoList from "../components/TodoList/TodoList";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ITodoList } from "../models/ITodoList";
import { deleteSlice } from "../store/deleteSlice";

const DeletePageButton = (item: ITodoList) => {
  const dispatch = useAppDispatch();
  const handleButtonEvent = () => {
    dispatch(deleteSlice.actions.awayTodoDelete(item));
  };
  return <button onClick={handleButtonEvent}>Return to All</button>;
};

const DeletePage: FC = () => {
  const deleteTodos = useAppSelector((state) => state.deleteReducer.todoDelete);

  return (
    <div className="page">
      {deleteTodos.length > 0 ? (
        <TodoList todoList={deleteTodos} Button={DeletePageButton} />
      ) : (
        <div className="page-empty">No deleted to-do lists</div>
      )}
    </div>
  );
};

export default DeletePage;
