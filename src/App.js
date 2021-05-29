import './App.css';
import Header from './MyComponents/Header.js';
import {Todos} from './MyComponents/Todos.js';
import {AddTodo} from './MyComponents/AddTodo.js';
import {About} from './MyComponents/About.js';
// import {TodoItem} from './MyComponents/TodoItem.js';
import {Footer} from './MyComponents/Footer.js';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App(todo) {
  let initTodo; 
if (localStorage.getItem("todos") === null){
initTodo = [];
}else{
  initTodo = JSON.parse(localStorage.getItem("todos"))
}

  const onDelete = (todo) =>{
    console.log("I m onDelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) =>{
    console.log("Adding todo", title, desc)
    let sno;
    if (todos.length === 0){
      sno = 0;
    }
    else{

      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
    
    <Router>
     
    <Header title="My Todos List" searchBar={true}/>

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
          
        </Switch>
    <Footer />
      
    </Router>
    
   
    
    
    {/* <TodoItem /> */}
    

    </>
  );
}

export default App;
