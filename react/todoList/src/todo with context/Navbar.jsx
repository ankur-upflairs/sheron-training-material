import React, { useContext } from 'react'
import { todoContext } from './TodoList'

function Navbar() {
    const {todo,setTodo ,tab ,setTab ,selectedTask ,setSelectedTask} = useContext(todoContext)
    function changeTab(e,index) {
        e.preventDefault()
        setTab(index)
    }
    return (
        <div>
            <header class="site-header">
                <div class="container">
                    <h1 class="logo">ZenTodo</h1>
                    <nav>
                        <a onClick={(e)=>changeTab(e,1)} class="btn" href="index.html">List</a> 
                        <a onClick={(e)=>changeTab(e,0)} class="btn outline" href="add.html">Add Task</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar