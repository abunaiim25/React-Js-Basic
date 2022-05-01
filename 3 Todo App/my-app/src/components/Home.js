import React,{useState} from 'react';
import Todos from './Todos';
import style from "./home.module.css";
import NewTodo from './NewTodo';
import {v4 as uuidv4} from "uuid";

/*
index.html <- index.js <- App.js <- Home.js <- Todos.js <- Todo.js

*/
/*
//object
const dummyTodos = [
    {
        id: 1,
        title: "todo1 title 1",
        desc: "todo1 description is here..."
    },
    {
        id: 2,
        title: "todo2 title 2",
        desc: "todo2 description is here..."
    }
]
*/

export const Home = () => {

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => { //fatch data
    //console.log(todo);
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), todo}]
    })
  }

  //remove
  const handleRemoveTodo = (id) => { //fatch data
    // alert(id);
    setTodos((prevTodos) =>{
     const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
     return filteredTodos;
    });
   };
 

  return (
    <div className={style.container}>

    <h1 style={{color: "white",background:"blue", padding:"10px", borderRadius:"5px" } }>Todo App (Home)</h1>
    
    <NewTodo onAddTodo={handleAddTodo}/>

    <Todos todos={todos}  onRemoveTodo = {handleRemoveTodo}/> 

    </div>
  )
}
