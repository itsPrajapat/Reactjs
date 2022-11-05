import './App.css';
import { Footer } from './components/Footer';
import { About } from './components/About';
import Header from './components/Header';
import { Todos } from './components/Todos';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  // Deleting a Todo
  const onDelete =(todo)=>{
    console.log("I am on delete of todo", todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos))
  }

    // Adding a Todo
    const addTodo =(title, desc)=>{
      console.log("I am adding this todo", title, desc)
      let sno;
      if(todos.length == 0){
        sno = 0;
      }
      else{
        sno = todos[todos.length - 1].sno + 1;
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc
      }
      setTodos([...todos, myTodo])
      console.log(myTodo)  
    }


  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
    <Router>
      <Header title="MyTodosList" searchBar={false}/>
      <Routes>
          <Route exact path="/" render={()=>{
            return (
              <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }} />
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
