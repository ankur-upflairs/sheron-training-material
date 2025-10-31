import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
import AddTask from './AddTask'
import TaskDetails from './TaskDetails'
import TaskList from './TaskList'
const initialTodo = [
  {
    title: 'Buy groceries', description: 'buy groceries from market', category: 'Groceries', dueDate: '24-10-2025'
  }
]
//first step create context 
export const todoContext = createContext(null) 


function TodoList() {
  const [tab, setTab] = useState(0)
  const [todo, setTodo] = useState(initialTodo)
  const [selectedTask, setSelectedTask] = useState(null)

  // console.log(todo) 

  return (
    //use Provider component for this context with value 
    <todoContext.Provider value={{todo,setTodo ,tab ,setTab ,selectedTask ,setSelectedTask}} >
      <div>
        <Navbar  />
        {tab == 0 && <AddTask   />}
        {tab == 1 && <TaskList />}
        {tab == 2 && <TaskDetails />}
      </div>
    </todoContext.Provider>

  )
}

export default TodoList