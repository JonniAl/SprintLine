import React from "react"
import "./Main.css"
import TodoItem from "./TodoItem";
import todosData from "./todosData";


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo=> {
                if(todo.id === id) {
                    todo.completed =!todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItem = this.state.todos.map(item => <TodoItem key={item.id} text={item.text}
                                                         completed={item.completed} handleChange={this.handleChange} id={item.id}/>)
        return (
            <div className='todo-list'>
                {todoItem}
            </div>
        )
    }
}

export default Main