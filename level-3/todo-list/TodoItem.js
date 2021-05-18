import React from "react"
import todosData from "./todosData"

function TodoItem() {
    const newTodo = todosData.map(todo => <TodoItem id={todo.id} text={todo.text} completed={todo.completed} />)
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>{newTodo}</p>
        </div>
    )
}

export default TodoItem