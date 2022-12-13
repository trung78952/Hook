
const ListTodo = (props) => {
    const handleDelete = (job) => {
        props.handleDelete(job)
    }
    console.log('check props', props)
    let todoList = props.todoList
    return (
        <>
            {todoList.map((item, index) => {
                return (
                    <div key={item.id}>
                        <div >{index+1}-{item.name}-
                            <button onClick={() => handleDelete(item)}>delete</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default ListTodo