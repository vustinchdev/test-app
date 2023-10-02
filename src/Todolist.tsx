import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
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

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskValue(e.currentTarget.value)
    }

    const addTask = () => {
        props.addTask(taskValue)
        setTaskValue('')
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    const allFilterTasksHandler = () => props.filterTasks('All')
    const activeFilterTasksHandler = () => props.filterTasks('Active')
    const complitedFilterTasksHandler = () => props.filterTasks('Complited')

    return (
        <div className='todoList'>
            <h2>{props.title}</h2>
            <div>
                <input
                    value={taskValue}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map(t => {

                    const removeTaskHandler = () => props.removeTask(t.id)

                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} />
                            <span>{t.title}</span>
                            <button onClick={removeTaskHandler}>delete</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={allFilterTasksHandler}>All</button>
            <button onClick={complitedFilterTasksHandler}>Complited</button>
            <button onClick={activeFilterTasksHandler}>Active</button>
        </div >
    )
}
