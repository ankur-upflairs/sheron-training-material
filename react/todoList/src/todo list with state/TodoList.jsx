import React, { useState } from 'react'
import Navbar from './Navbar'
import AddTask from './AddTask'
import TaskDetails from './TaskDetails'
import TaskList from './TaskList'
const initialTodo = [
  {
    title:'Buy groceries', description:'buy groceries from market',category:'Groceries' ,dueDate:'24-10-2025'
  }
]

function TodoList() {
  const [tab, setTab] = useState(0)
  const [todo,setTodo] = useState(initialTodo)
  const [selectedTask,setSelectedTask] = useState(null)

  console.log(todo)
   
  return (
    <div>
      <Navbar setTab={setTab} />
      {tab == 0 && <AddTask todo={todo} setTodo={setTodo} />}
      {tab == 1 && <TaskList todo={todo} setSelectedTask={setSelectedTask} setTab={setTab} />}
      {tab == 2 && <TaskDetails selectedTask={selectedTask} />} 
    </div>
  )
}

export default TodoList