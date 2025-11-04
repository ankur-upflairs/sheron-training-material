import React from 'react'
import { Link, Outlet } from 'react-router'

function Tasks() {
  return (
    <div>
        <ul>
            <li><Link to={'old'}>old</Link></li>
            <li><Link to={'new'}>New</Link></li>
        </ul>
        this is task page 
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Tasks