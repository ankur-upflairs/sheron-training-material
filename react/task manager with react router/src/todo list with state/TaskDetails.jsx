import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

function TaskDetails() {
    const [task, setTask] = useState({})
    const [isChange,setIsChange] = useState(false)
    let { id } = useParams()
    let navigate = useNavigate()
    useEffect(() => {
        async function getData() {
            let res = await axios.get('http://localhost:3000/tasks/' + id)
            setTask(res.data)
        }
        getData()
    }, [isChange])
    async function deleteTask(id) {
        let res = await axios.delete(`http://localhost:3000/tasks/${id}`)
        navigate('/')
    }
    async function completeTask(id) {
        let res = await axios.patch(`http://localhost:3000/tasks/${id}`, { isComplete: true })
        setIsChange(!isChange)
    }
    return (
        <div>
            <main class="container page">
                <section class="panel">
                    <h2>Task Details</h2>


                    <article class="task-detail">
                        <h3>{task.title}</h3>
                        <p class="meta">Due: {task.dueDate} • {task.category}</p>
                        <p>{task.description}</p>


                        <div class="detail-actions">
                            {task.isComplete ? <button class="btn outline">Task Completed</button>
                                :

                                <button onClick={() => completeTask(task.id)} class="btn">Mark Complete</button>
                            }
                            <button onClick={() => deleteTask(task.id)} class="btn outline">Delete</button>
                            <Link to={'/'} class="btn outline">Back</Link>
                        </div>
                    </article>
                </section>


                <aside class="panel slim">
                    <h3>Task Info</h3>
                    <p class="muted">Static page — details can be fed from props/state once converted to React.</p>
                </aside>
            </main>


            <footer class="site-foot">
                <div class="container">ZenTodo • Static demo</div>
            </footer>

        </div>
    )
}

export default TaskDetails