import React from 'react'

function TaskList({ todo,setSelectedTask,setTab }) {
    function handleDetails(e,index){
        e.preventDefault()
        setSelectedTask(todo[index])
        setTab(2)
    }
    return (
        <div>

            <main class="container page">
                <section class="panel">
                    <div class="panel-head">
                        <h2>My Tasks</h2>
                        <div class="search-wrap">
                            <input type="search" placeholder="Search tasks..." disabled />
                        </div>
                    </div>


                    <ul class="todo-list">
                        {todo.map((task, index) => {

                            return <li class="todo done">
                                <div class="left">
                                    <input type="checkbox" checked disabled />
                                    <div>
                                        <h3>{task.title}</h3>
                                        <p class="meta">Due: {task.dueDate} • {task.category}</p>
                                    </div>
                                </div>
                                <div class="right">
                                    <a onClick={(e)=>handleDetails(e,index)} href="#" class="link">Details</a>
                                </div>
                            </li>
                        })}

                        {/* 

                        <li class="todo">
                            <div class="left">
                                <input type="checkbox" disabled />
                                <div>
                                    <h3>Finish project README</h3>
                                    <p class="meta">Due: Nov 2 • Work</p>
                                </div>
                            </div>
                            <div class="right">
                                <a href="details.html" class="link">Details</a>
                            </div>
                        </li>


                        <li class="todo">
                            <div class="left">
                                <input type="checkbox" disabled />
                                <div>
                                    <h3>Plan weekend hike</h3>
                                    <p class="meta">No due date • Personal</p>
                                </div>
                            </div>
                            <div class="right">
                                <a href="details.html" class="link">Details</a>
                            </div>
                        </li> */}
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default TaskList