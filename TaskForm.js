// components/TaskForm.js

import { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    id: Date.now(),
    title: '',
    description: '',
    priority: 'Medium',
    status: 'Open',
    timeSpent: 0, // The time spent on this task in minutes
    createdAt: new Date().toISOString(), // Timestamp for task creation
    updatedAt: null, // Timestamp for last update
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task); // Pass the task with the timestamp to the parent component
    setTask({
      id: Date.now(),
      title: '',
      description: '',
      priority: 'Medium',
      status: 'Open',
      timeSpent: 0,
      createdAt: new Date().toISOString(), // New timestamp for each new task
      updatedAt: null,
    });
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Priority</label>
          <select name="priority" value={task.priority} onChange={handleInputChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <select name="status" value={task.status} onChange={handleInputChange}>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
