import React, { useState } from 'react'

function AddTask({todo,setTodo}) {
    const [task,setTask] = useState( {
    title:'', description:'',category:'Groceries' ,dueDate:''
  })
  function handleChange(e){
    setTask({...task,[e.target.name]:e.target.value})
  }
  function handleSubmit(e) {
    e.preventDefault()
    setTodo([...todo,task])

  }
  return (
    <div>
        <main class="container page centered">
        <section class="panel form-panel">
            <h2>Create New Task</h2>
            <form onSubmit={handleSubmit} class="todo-form" >
                <label>Title
                    <input onChange={handleChange} value={task.title} name='title' type="text" placeholder="e.g. Call mom"  />
                </label>
                <label>Category
                    <select onChange={handleChange} value={task.category} name='category' >
                        <option>Personal</option>
                        <option>Work</option>
                        <option>Groceries</option>
                    </select>
                </label>


                <label>Due date
                    <input onChange={handleChange} value={task.dueDate} name='dueDate' type="date"  />
                </label>


                <label>Description
                    <textarea onChange={handleChange} value={task.description} name='description' rows="4" placeholder="Notes..." ></textarea>
                </label>


                <div class="form-actions">
                    <button type='submit' class="btn">Save Task</button>
                    {/* <a href="index.html" class="btn outline">Cancel</a> */}
                </div>
            </form>

        </section>
    </main>


    <footer class="site-foot">
        <div class="container">Convert each page into React components (List / Add / Details)</div>
    </footer>
    </div>
  )
}

export default AddTask