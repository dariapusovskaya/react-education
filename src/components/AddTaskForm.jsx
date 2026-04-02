import Field from "./field"
import Button from "./Button"

const AddTaskForm = () => {
    return (
        <form className="todo__form">
        <Field 
        className = "todo_field"
        label = "New task title"
        id = ""
        />
        <Button type = "submit">Add</Button>
      </form>
    )
}

export default AddTaskForm