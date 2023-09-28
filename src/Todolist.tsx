import React, { FC } from 'react'
import { TaskType } from './App'

type TodoListType = {
    tasks: TaskType[]
    title: string
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
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
