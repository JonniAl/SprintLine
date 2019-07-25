import React from 'react'
import {Checkbox} from "antd";


function TodoItem(props) {
    const styleThrough = {
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className='todo-item'>
            <Checkbox style={props.completed ? styleThrough : null} className="main-flex-item" checked={props.completed}
                      onChange={() => props.handleChange(props.id)}>{props.text}</Checkbox><br/>
        </div>
    )
}

export default TodoItem