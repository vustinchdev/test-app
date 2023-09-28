import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './Todolist';

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'HTML', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: true },
    { id: 4, title: 'Redux', isDone: false }
  ])

  return (
    <div className="App">
      <TodoList tasks={tasks} title='What to learn' />
    </div>
  );
}

export default App;
