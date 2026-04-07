import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import ToDoInfo from "./ToDoInfo"
import ToDoList from "./ToDoList"

const ToDo = () => {

    const [tasks, setTasks] = useState([
        { id: 'task-1', title: 'Buy milk', isDone: false },
        { id: 'task-2', title: 'Wash the dishes', isDone: true }
    ])

    const [newTaskTitle, setNewTaskTitle] = useState('')

    const deleteAllTasks = () => {
        const isConfirmed = confirm('are you sure?')

        if (isConfirmed) {
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }

    const toggleTaskComplete = (taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, isDone }
                }
                return task
            })
        )
    }

    const filterTask = (query) => {
        console.log(`search: ${query}`)
    }

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now.toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks([...tasks, newTask])
            setNewTaskTitle('')
        }
    }


    return (
        <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask = {addTask}
      newTaskTitle={newTaskTitle}
      setNewTaskTitle={setNewTaskTitle}
      />
     <SearchTaskForm 
     onSearchInput = {filterTask}
     />
      <ToDoInfo 
      total = {tasks.length}
      done = {tasks.filter(({isDone}) => isDone).length}
      onDeleteAllButtonClick = {deleteAllTasks}
      />
      <ToDoList tasks = {tasks}
      onDeleteTaskButtonClick ={deleteTask}
      onTaskCompleteChange = {toggleTaskComplete}
      />
    </div>
    )
}

export default ToDo