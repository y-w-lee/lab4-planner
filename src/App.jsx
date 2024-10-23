import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import './App.css'; 

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="app-container">
      <h1 className="app-header">Daily Planner</h1>

      <TaskForm addTask={addTask} />

      <h2 className="task-counter">You have {remainingTasks} tasks remaining</h2>

      <ul className="task-list">
        {tasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;