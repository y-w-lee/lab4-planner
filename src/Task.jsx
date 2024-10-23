import React from 'react';

const Task = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li className="task-item">
      <label>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleTaskCompletion(task.id)} 
        />
        <span className={task.completed ? 'task-completed' : ''}>{task.name}</span>
      </label>
      <button className="remove-btn" onClick={() => deleteTask(task.id)}>Remove</button>
    </li>
  );
};

export default Task;