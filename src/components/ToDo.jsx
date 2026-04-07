import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import ToDoInfo from "./ToDoInfo"
import ToDoList from "./ToDoList"

const ToDo = () => {
    const tasks = [
        { id: 'task-1', title: 'Buy milk', isDone: false },
        { id: 'task-2', title: 'Wash the dishes', isDone: true }
    ]

    const deleteAllTasks = () => {
        console.log('delete all the tasks')
    }

    const deleteTask = (taskId) => {
        console.log(`delete task with ${taskId}`)
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`task ${taskId} ${isDone ? 'complete' : 'not complete'}`)
    }

    const filterTask = (query) => {
        console.log(`search: ${query}`)
    }

    const addTask = () => {
        console.log('task is completed')
    }


    return (
        <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask = {addTask}/>
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