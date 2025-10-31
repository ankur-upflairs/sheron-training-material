import React from 'react'

function TaskDetails({selectedTask}) {
  return (
    <div>
         <main class="container page">
        <section class="panel">
            <h2>Task Details</h2>


            <article class="task-detail">
                <h3>{selectedTask.title}</h3>
                <p class="meta">Due: {selectedTask.dueDate} • {selectedTask.category}</p>
                <p>{selectedTask.description}</p>


                <div class="detail-actions">
                    <a href="index.html" class="btn">Mark Complete</a>
                    <a href="index.html" class="btn outline">Back</a>
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