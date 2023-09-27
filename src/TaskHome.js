import React, { useState } from 'react';

function TaskHome({ onTaskAdded }) {
  const [taskInput, setTaskInput] = useState('');

  const handleInput = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTaskObject = {
      todo: taskInput,
      id: Date.now(),
    };

    fetch(`http://localhost:3000/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTaskObject),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('New task added', data);
        onTaskAdded(data); 
        setTaskInput(''); 
      })
      .catch((error) => console.error('Error adding to server', error));
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>TODO APP</h1>
        <label>Enter your task for today</label>
        <input
          type='text'
          placeholder='enter task'
          value={taskInput}
          onChange={handleInput}
        />
        <button type='submit'>Add task</button>
      </form>
    </div>
  );
}

export default TaskHome;
