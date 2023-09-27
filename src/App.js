import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import TaskHome from './TaskHome';

function App() {
  const [taskArray, setTaskArray] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/tasks`)
      .then((resp) => resp.json())
      .then((data) => setTaskArray(data))
      .catch((error) => console.error('Error fetching tasks', error));
  }, []);

  const addNewTask = (newTask) => {
    setTaskArray([...taskArray, newTask]);
  };

  const deleteTask = (id) => {
    setTaskArray(taskArray.filter((task) => task.id !== id))
  }

  return (
    <div>
      <TaskHome onTaskAdded={addNewTask} />
      <h1>Prince Hope</h1>
      <TaskList tasks={taskArray} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
