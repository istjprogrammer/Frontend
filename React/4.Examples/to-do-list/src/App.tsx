import React, {useState} from 'react';
import Todos from './components/Todos';
import Todo from './utils/todos'
import InsertTodo from './components/InsertTodo';

const App = ()=>{

  //할일
  // const todos = [new Todo("공부"), new Todo("운동")]
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (item:string) => {    
    const newTodo = new Todo(item);

    setTodos((prevTodos)=>{ 
      return [...prevTodos, newTodo]; 
    });
  }

  const removeTodoHandler = (id:string) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter((todo)=>todo.id !== id)
    })
  }
  
  return (
    <div className="App">
      <InsertTodo onAddTodo={addTodoHandler}/>
      <hr/>
      <Todos items ={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;