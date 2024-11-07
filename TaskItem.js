// components/TaskItem.js

import { useState } from 'react';

const TaskItem = ({ task, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask({
      ...updatedTask,
      [name]: value,
      updatedAt: new Date().toISOString(), // Update timestamp whenever the task is edited
    });
  };

  const saveTask = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex((t) => t.id === task.id);
    tasks[taskIndex] = updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleEditChange}
          />
          <textarea
            name="description"
            value={updatedTask.description}
            onChange={handleEditChange}
          />
          <button onClick={saveTask}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>

          {/* Display the createdAt and updatedAt timestamps */}
          <p>Created At: {new Date(task.createdAt).toLocaleString()}</p>
          {task.updatedAt && (
            <p>Last Updated: {new Date(task.updatedAt).toLocaleString()}</p>
          )}

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
