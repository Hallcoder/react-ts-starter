import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/Todolist";
import { Todo } from "./todo.model";
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]|{ id:string,text:string}[]>([]);
  const todoAddHandler = (text: string) => {
  setTodos((prevTodos) => [{id:Math.random().toString(),text:text},...prevTodos]);  
  }
  const todoDeleteHandler = (id:string) => {
      setTodos((prevTodos) =>{
        return prevTodos.filter(todo => todo.id !== id)
      })
  }
    return (
    <div className="App">
      <NewTodo  Addhandler={todoAddHandler} />
      <TodoList deleteHandler={todoDeleteHandler} items={todos} />
    </div>
  );
};

export default App;
