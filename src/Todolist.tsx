import React, { FC } from 'react'
import { TaskType } from './App'

type TodoListType = {
    tasks: TaskType[]
    title: string
    removeTask: (taskId: number) => void
}

export const TodoList: FC<TodoListType> = (props) => {
    return (
        <div className='todoList'>
            <h2>{props.title}</h2>
            <div>
                <input />
                <button>+</button>
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
        </div>
    )
}
