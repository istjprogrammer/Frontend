import Todo from '../utils/todos';
import TodoItem from './TodoItem';
import style from "../utils/Todos.module.css";

const Todos:React.FC<{items:Todo[]; onRemoveTodo:(id:string) => void}> = (props) => {
    return (
        <ul className={style.todos}>
        {props.items.map((item) => (
            <TodoItem text={item.text} id={item.id}
              onRemoveTodo = {props.onRemoveTodo}/>
      ))}
    </ul>
    )
};

//외부에 출력해야 하기에 export를 해준다.
export default Todos;

/*
import React from 'react';

const Todo: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Todo;

*/