import { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import './Todo.scss'
const TodoList = () => {
    const [todoList, setTodolist] = useState([
        { id: '1', name: 'code' },
        { id: '2', name: 'fix bugs' },
        { id: '3', name: 'fix bugs' },

    ])
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const handleAdd = (job) => {
        let random = getRndInteger(1, 99999999999)
        let todoName = {
            id: random, // set cho id random
            name: job
        }
        setTodolist([...todoList, todoName])// spread operator
    }
    const handleDelete = (job) => {
        let tododelete = todoList.filter(item => item !== job)
        console.log('check tododele', tododelete)
        setTodolist(tododelete)
    }
    return (
        // <div className="main">
            <div className="List-todo">
                <AddTodo
                    AddTodo={handleAdd}
                />
                <ListTodo
                    todoList={todoList}
                    handleDelete={handleDelete}
                />
            </div>
        // </div>
    );
}
export default TodoList