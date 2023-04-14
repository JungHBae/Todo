import "./App.css";
import { Counter } from "./Counter";
function App() {
  const title = 'Title'
  return (
    <div className="App">
      <Counter title={title}/>
    </div>
  );
}

export default App;
