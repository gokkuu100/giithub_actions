import React from 'react'

function TaskList({ tasks, onDeleteTask }) {

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json" 
      }
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("Deleted", data);
      onDeleteTask(id)
    })
    .catch((error) => console.error("error", error))
    

  }
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>Tasks: {task.todo}
          <button onClick={() => handleDelete(task.id)}>Remove</button>
          </h3>
        </div>
      ))}
    </div>
  )
}

export default TaskList;