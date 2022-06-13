import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text='Learn Deez'/>
      <Todo text='Learn Nuts'/>
      <Todo text='Become Pro'/>
    </div>
  );
}

export default App;
