import "./App.css";
// components
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App = () => {
  return (
    <div className="app">
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
