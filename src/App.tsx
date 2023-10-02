import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './Todolist';
import { v1 } from 'uuid';

export type TaskType = {
  id: string
  title: string
  isDone: boolean
}

export type FilterType = 'All' | 'Complited' | 'Active'

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([
    { id: v1(), title: 'HTML', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'React', isDone: true },
    { id: v1(), title: 'Redux', isDone: false }
  ])

  const [filter, setFilter] = useState('All')


  const removeTask = (taskId: string) => {
    let task = tasks.filter(t => t.id !== taskId)
    setTasks(task)
  }

  const addTask = (taskValue: string) => {
    const newTask = { id: v1(), title: taskValue, isDone: false }
    setTasks([newTask, ...tasks])
  }

  let filteredTasks = tasks

  if (filter === 'Complited') {
    filteredTasks = tasks.filter(t => t.isDone)
  }
  if (filter === 'Active') {
    filteredTasks = tasks.filter(t => !t.isDone)
  }


  const filterTasks = (filterValue: FilterType) => {
    setFilter(filterValue)
  }

  return (
    <div className="App">
      <TodoList
        tasks={filteredTasks}
        title='What to learn'
        removeTask={removeTask}
        filterTasks={filterTasks}
        addTask={addTask} />
    </div>
  );
}

export default App;
