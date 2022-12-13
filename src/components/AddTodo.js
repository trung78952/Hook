import { useState } from "react"
const AddTodo = (props) => {
    const [todo, setTodo] = useState('')
    const handleOnclick = () => {
        if (!todo) {
            alert('fill the text')
        } else {
            props.AddTodo(todo)
            setTodo('')
        }

    }
    return (
        <div>
            ----to do list----
            <div>
                <input type={'text'}
                    value={todo}
                    onChange={(event) => setTodo(event.target.value)} />
                <button onClick={() => handleOnclick()}>Add</button>
            </div>
        </div>
    )
}
export default AddTodo