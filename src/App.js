import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 5271,
      title: "뭐뭐 하기 1",
      goal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      completed: true,
    },
    {
      id: 7825,
      title: "뭐뭐 하기 2",
      goal: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor",
      completed: false,
    },
    {
      id: 8391,
      title: "뭐뭐 하기 3",
      goal: "enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
      completed: false,
    },
  ]);
  return (
    <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
