import { FC } from "react";
import "./TodoList.scss";
import { ITodoList } from "../../models/ITodoList";

interface Props {
  todoList: ITodoList[];
  Button: (item: ITodoList) => JSX.Element;
}

const TodoList: FC<Props> = ({ todoList, Button }) => {
  return (
    <div className="todo-ul">
      {todoList.map((item, index) => (
        <div className="todo-li" key={index}>
          <p>{item.todo}</p>
          {Button(item)}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
