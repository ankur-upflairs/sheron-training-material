import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Tasks from './pages/Tasks'
import NewTasks from './pages/NewTasks'
import OldTasks from './pages/OldTasks'
import SingleTask from './pages/SingleTask'

function App() {

  return (
    <>
      <BrowserRouter >
        {/* <ul>
          <li> <Link to={''} >Home</Link></li>
          <li> <Link to={'/about'} >About</Link></li>
          <li> <Link to={'/tasks'} >Tasks</Link></li>
        </ul> */}
        <ul>
          <li> <NavLink to={''} >Home</NavLink></li>
          <li> <NavLink to={'/about'} >About</NavLink></li>
          <li> <NavLink to={'/tasks'} >Tasks</NavLink></li>
        </ul>
        <Routes >
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='tasks' element={<Tasks />} >
            <Route path='new' element={<NewTasks />} />
            <Route path='old' element={<OldTasks />} />
          </Route>
          <Route path='task-details/:id' element={<SingleTask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
{/* <Route path='tasks' element={<Tasks />} >
          </Route>
            <Route path='tasks/new' element={<NewTasks />} />
            <Route path='tasks/old' element={<OldTasks />} /> */}