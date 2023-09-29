import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './Todolist';

export type TaskType = {
  id: number
  title: string
  isDone: boolean
}

export type FilterType = 'All' | 'Complited' | 'Active'

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'HTML', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: true },
    { id: 4, title: 'Redux', isDone: false }
  ])

  const [filter, setFilter] = useState('All')


  const removeTask = (taskId: number) => {
    let task = tasks.filter(t => t.id !== taskId)
    setTasks(task)
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
        filterTasks={filterTasks} />
    </div>
  );
}

export default App;
