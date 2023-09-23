import './App.css';
import Header from './Component/Header';
import TodoDisplay from './Component/TodoDisplay';
import TodoForm from './Component/TodoForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
          <TodoForm/>
          <TodoDisplay/>
      </header>
    </div>
  );
}

export default App;
