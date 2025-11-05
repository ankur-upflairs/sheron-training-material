import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import TaskList from './todo list with state/TaskList'
import Navbar from './todo list with state/Navbar'
import AddTask from './todo list with state/AddTask'
import TaskDetails from './todo list with state/TaskDetails'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes >
        <Route path='' element={<TaskList />} />
        <Route path='add-task' element={<AddTask/>} />
        <Route path='task/:id' element={<TaskDetails />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
