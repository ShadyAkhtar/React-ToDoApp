import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header.js';
import {Todos} from './MyComponents/Todos.js';
// import {TodoItem} from './MyComponents/TodoItem.js';
import {Footer} from './MyComponents/Footer.js';

function App(todo) {
  const onDelete = (todo) =>{
    console.log("I m onDelete of todo", todo);
  }

  let todos = [
    {
      sno : 1,
      title : "Go to the Market",
      desc : "Get this Lorem ipsum dolor sit amet job 1"
    },
    {
      sno : 2,
      title : "Go to the Mall",
      desc : "Get this Lorem ipsum dolor sit amet job 2"
    },
    {
      sno : 3,
      title : "Go to the Garage",
      desc : "Get this Lorem ipsum dolor sit amet job 3"
    }
  ]

  return (
    <>
    <Header title="My Todos List" searchBar={true}/>
    <Todos todos={todos} onDelete={onDelete} />
    {/* <TodoItem /> */}
    <Footer />
    

    </>
  );
}

export default App;
