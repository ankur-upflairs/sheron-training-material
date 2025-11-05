import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar({setTab}) {

    function changeTab(e,index) {
        e.preventDefault()
        setTab(index)
    }
    return (
        <div>
            <header className="site-header">
                <div className="container">
                    <h1 className="logo">ZenTodo</h1>
                    <nav>
                        <NavLink to={'/'} className="btn" >List</NavLink> 
                        <NavLink to={'/add-task'} className="btn" >Add Task</NavLink>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar