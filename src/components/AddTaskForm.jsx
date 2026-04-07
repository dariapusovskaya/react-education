import Field from "./field"
import Button from "./Button"

const AddTaskForm = (props) => {
  const {
    addTask,
  } = props

  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
  }
    return (
        <form className="todo__form" onSubmit = {onSubmit}>
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