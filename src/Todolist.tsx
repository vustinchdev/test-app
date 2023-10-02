import React, { FC, useState } from 'react'
import { FilterType, TaskType } from './App'

type TodoListType = {
    tasks: TaskType[]
    title: string
    removeTask: (taskId: string) => void
    filterTasks: (filterValue: FilterType) => void
    addTask: (taskValue: string) => void
}



export const TodoList: FC<TodoListType> = (props) => {

    const [taskValue, setTaskValue] = useState('')

    return (
        <div className='todoList'>
            <h2>{props.title}</h2>
            <div>
                <input value={taskValue} onChange={(e) => {
                    setTaskValue(e.currentTarget.value)
                }} />
                <button onClick={() => {
                    props.addTask(taskValue)
                    setTaskValue('')
                }}>+</button>
            </div>
            <ul>
                {props.tasks.map(t => {
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} />
                            <span>{t.title}</span>
                            <button onClick={() => props.removeTask(t.id)}>delete</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.filterTasks('All')}>All</button>
            <button onClick={() => props.filterTasks('Complited')}>Complited</button>
            <button onClick={() => props.filterTasks('Active')}>Active</button>
        </div >
    )
}
