import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './todo list with state/TodoList'
import TodoListContext from './todo with context/TodoList'

function App() {
 

  return (
    <>
     {/* <TodoList />  */}
     <TodoListContext />
    </>
  )
}

export default App
